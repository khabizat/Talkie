const router = require("express").Router();
const fs = require("fs");
const aws = require("aws-sdk");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/docs");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = (db) => {
  //

  // save file to 'public/docs' as indicated on line ~5
  router.post("/", upload.single("testAudio.mp3"), (req, res) => {
    // reording in req.body.audioFile?
    // make new S3 object
    const s3 = new aws.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
    console.log("READING MULTER>>", req.file.filename);
    //read incoming file to send to S3
    const file = fs.createReadStream(req.file.path);
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.file.filename,
      Body: file,
      ContentType: "audio/mpeg",
      ACL: "public-read",
    };
    //send file to s3 which returns an object with link to file in bucket. link is in data.data.Location

    //

    const postInDb = async (params) => {
      try {
        const qs = `
        INSERT INTO answers (audio_url, user_id, question_id)
        VALUES ($1, $2, $3)
        RETURNING *;
      `;
        const result = await db.query(qs, params);
        return result.rows[0];
      } catch (error) {
        console.log(error);
        throw new Error(">>Can not post to db<<");
      }
    };

    //const s3Output = await s3.upload(params).promise()

    s3.upload(params, async (err, data) => {
      if (err) {
        let errorData = {
          error: true,
          message: err,
        };
        // res.send(`ERR FROM S3>>> ${err}`);
        res.send(errorData);
        return err;
      }
      let audio_url = data.Location;
      let user_id = req.body.user_id;
      let question_id = req.body.question_id;

      // db.query(
      //   `INSERT INTO answers (audio_url, user_id, question_id) VALUES ($1, $2, $3) RETURNING *`,
      //   [audio_url, user_id, question_id]
      //   )
      //   .then((response) => {
      //     console.log("INSERT RESPONSE>>", response.rows[0])
      //     return res.json(response.rows[0]);
      //   })
      //   .catch((err) => {
      //     console.log("INSERT ERROR>>", err);
      //     return res.json(err);
      //   });
      const output = await postInDb([audio_url, user_id, question_id]);
      console.log("s3 upload >>>>>>>", output);
      return res.json(output);
    });
  });
  return router;
};

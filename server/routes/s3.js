const router = require("express").Router();
const fs = require('fs');
const aws = require('aws-sdk');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/docs')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer({ storage });

module.exports = (db) => {

  // save file to 'public/docs' as indicated on line ~5
  router.post("/", upload.single('testAudio.mp3'), (req, res) => {

    // make new S3 object
    const s3 = new aws.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
    console.log("READING MULTER>>", req.file.filename)
    //read incoming file to send to S3
    const file = fs.createReadStream(req.file.path);
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.file.filename,
      Body: file,
      ContentType: 'audio/mpeg',
      ACL: 'public-read'
    }

    //send file to s3 which returns an object with link to file in bucket. link is in data.data.Location
    s3.upload(params, (err, data) => {
      if (err) {
        res.send(`ERR FROM S3>>> ${err}`)
        return err;
      }
      const audio_url = data.Location;
      const user_id = 1;
      const question_id = 1;
      db.query(
        `INSERT INTO answers (audio_url, user_id, question_id) VALUES ($1, $2, $3)`,
        [audio_url, user_id, question_id]
        )
        .then((response) => {
          return res.json(response.rows);
        })
        .catch((err) => {
          console.log("query ERROR");
          return res.json(err);
      });
      res.send(data.Location);
      return data;
    })
  })
    // })
  return router;
}





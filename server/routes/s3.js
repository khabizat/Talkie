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
  router.get("/", (req, res) => {
    res.send("Hi");
  })
  // save file to 'public/docs' as indicated on line ~5
  router.post("/", upload.single('testAudio.mp3'), (req, res) => {
    debugger
    console.log("TEST FROM S3.JS Body>>", req.file)
    console.log("TEST FROM S3.JS File>>", req.body)

    // make new S3 object
    const s3 = new aws.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
    //read incoming file to send to S3
    // fs.readFile(req.file, (err, data) => {
      // if (err) console.log(err);
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: 'testAudio.mp3',
        Body: req.file,
        ContentType: 'audio/mpeg',
        ACL: 'public-read'
      }
      
      s3.upload(params, (err, data) => {
        if (err) {
          return err;
        } else {
          res.send("Success>>", data);
          return data;
        }
      })
    })
    // res.send("upload successfully!");
  // })
  return router;
}





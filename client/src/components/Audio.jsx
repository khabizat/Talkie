import React, { Component } from "react";

import MicRecorder from 'mic-recorder-to-mp3';
import Button from "./Button";
import axios from "axios";
// import fs from "fs";
// import multer from 'multer';
// const upload = multer({ dest: 'public/docs' })
// const multer = require('multer')
// const upload = multer({ dest: 'public/docs' })

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export default class Audio extends Component {

  constructor(props) {
    super(props);

    this.state = {
        isRecording: false,
        blobURL: '',
        isBlocked: false,
        isRecordingStp: false,
        recordingFile: '',
      }

    //binds the methods to the component
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.submit = this.submit.bind(this);
   }

  componentDidMount(){

    //Prompt the user for permission to allow audio device in browser

    navigator.getUserMedia = (
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia
     );

     //Detects the action on user click to allow or deny permission of audio device

     navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },

      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  start(){

    if (this.state.isBlocked) {
      alert('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  }

  stop() {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {

        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
        this.setState({ isRecordingStp: true });

        //make buffer <doesn't like input>
        // const binary = new Buffer(buffer, 'testAudio.mp3')

        
        //make File
        const file = new File(buffer, 'testAudio.mp3', {
          type: blob.type,
          lastModified: Date.now()
        });
        
        // blob = binary
        //make FormData file

        const audioFile = new FormData();
        audioFile.append('testAudio.mp3', blob, 'testAudio.mp3')
        // audioFile.append('testAudio.mp3', buffer);
        
        //set to state for submit method below
        this.state.recordingFile = file;

        axios
          .post("/api/s3upload", audioFile) // << what to put here
          .then((req, res) => {
            console.log("SUCCESS!!😁😴")
            console.log(req.body.Location)
          })
          .catch(err => console.log("TEST FROM AXIOS ERR>>", err))
        //>>
    })
    .catch((e) => console.log(e));
  };

  reset() {
      document.getElementsByTagName('audio')[0].src = '';
      this.setState({ isRecordingStp: false });
  };

  submit() {
    // const timeStamp = new Date()
    // const testObj = {description: "this is a test file", time: timeStamp}
    // const file = JSON.parse(testObj)
    
    console.log("this....>>>",this.state.recordingFile)

    const audioFile = new FormData();
    audioFile.append('testAudio.mp3', this.state.recordingFile);

    axios
      .post("/api/s3upload", audioFile) // , upload.single('audioFile')
      .then((req, res) => {
        console.log("SUCCESS!!😁😴")
        console.log(req.body.Location)
      })
      .catch(err => console.log(err))


  };

  render() {


    return(
      <div className="row d-flex justify-content-center mt-5" style={{color:'red'}}>
      { !this.state.isRecording && !this.state.isRecordingStp && <Button confirm onClick={this.start} disabled={this.state.isRecording}>Start📼</Button> }
      { this.state.isRecording && <Button danger onClick={this.stop} disabled={!this.state.isRecording}>Stop📼</Button> }
      { this.state.isRecordingStp && <Button danger onClick={this.reset} disabled={!this.state.isRecordingStp}>Reset/ Cancel📼</Button> }
      { this.state.isRecordingStp && <Button confirm onClick={this.submit}>Submit📼</Button> }
      { this.state.isRecordingStp && <audio src={this.state.blobURL} controls="controls" className="audio-player"/> }
      </div>
    );
  }

}
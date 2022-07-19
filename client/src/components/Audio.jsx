import React, { Component } from "react";

import MicRecorder from "mic-recorder-to-mp3";
import Button from "./Button";
import axios from "axios";


const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export default class Audio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRecording: false,
      blobURL: "",
      isBlocked: false,
      isRecordingStp: false,
      recordingFile: "",
    };

    //binds the methods to the component
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    //Prompt the user for permission to allow audio device in browser

    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    //Detects the action on user click to allow or deny permission of audio device

    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        this.setState({ isBlocked: false });
      },

      () => {
        console.log("Permission Denied");
        this.setState({ isBlocked: true });
      }
    );
  }

  start() {
    if (this.state.isBlocked) {
      alert("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  }

  stop() {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob); //<< unused?
        this.setState({ blobURL, isRecording: false }); //<< blobURL unused?
        this.setState({ isRecordingStp: true });
        this.setState({ recordingFile: blob });
        return blob;
      })
      .catch((e) => console.log(e));
  }

  reset() {
    document.getElementsByTagName("audio")[0].src = "";
    this.setState({ isRecordingStp: false });
  }
  //<<<<<<<<<<<
  submit() {
    const findUser = JSON.parse(localStorage.getItem("user"));
    const audioFile = new FormData();
    audioFile.append(
      "testAudio.mp3",
      this.state.recordingFile,
      "testAudio.mp3"
    );
    audioFile.append("question_id", this.props.question_id);
    audioFile.append("user_id", findUser.id);

    axios
      .post("/api/s3upload", audioFile)
      .then((data) => {
        this.state.isRecording = false;
        this.state.isRecordingStp = false;

        const newAnswer = data.data;

        if (!Object.keys(newAnswer).includes("error")) {
          const user_name = findUser.name;
          newAnswer.user_name = user_name;
          newAnswer.answer_id = newAnswer.id;
          newAnswer.photo = findUser.photo_url;
          let newArray = [...this.props.selectedQuestion, newAnswer];
          this.props.setSelectedQuestion(newArray);
        }
      })
      // this.props.setFinishedRecord(true);
      .catch((err) => console.log("SUBMIT_AXIOS_ERR>>", err));
  }

  render() {
    return (
      <div
        className="row d-flex justify-center mt-5"
        style={{ color: "red" }}
      >
        {!this.state.isRecording && !this.state.isRecordingStp && (
          <Button
            confirm
            onClick={this.start}
            disabled={this.state.isRecording}
          >
            Record Your answer 🎙
          </Button>
        )}
        {this.state.isRecording && (
          <Button danger onClick={this.stop} disabled={!this.state.isRecording}>
            Stop Recording
          </Button>
        )}
        {this.state.isRecordingStp && (
          <Button
            danger
            onClick={this.reset}
            disabled={!this.state.isRecordingStp}
          >
            Discard
          </Button>
        )}
        {this.state.isRecordingStp && (
          <Button confirm onClick={this.submit}>
            {" "}
            Submit Your Answer ➕ {" "}
          </Button>
        )}
        {this.state.isRecordingStp && (
          <div className="flex justify-center">
              <audio
                src={this.state.blobURL}
                controls="controls"
                className="audio-player mt-4"
            />
          </div>

        )}
      </div>
    );
  }
}

const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config(); //<<?

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authenticationRouter = require("./routes/authentication");
const questionsRouter = require("./routes/questions");
const answersRouter = require("./routes/answers");
const tagsRouter = require("./routes/tags");
const commentsRouter = require("./routes/comments");
const likedRouter = require("./routes/liked");
const s3 = require("./routes/s3");
// db connection
const db = require("./configs/db.config");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY1, process.env.COOKIE_KEY2],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use("/", indexRouter);
app.use("/api/users", usersRouter(db));
app.use("/api/questions", questionsRouter(db));
app.use("/api/answers", answersRouter(db));
app.use("/api/tags", tagsRouter(db));
app.use("/api/comments", commentsRouter(db));
app.use("/api/auth", authenticationRouter(db));
app.use("/api/s3upload", s3(db));
app.use("/api/liked", likedRouter(db));

app.listen(8080, () => {
  console.log("server is running");
});

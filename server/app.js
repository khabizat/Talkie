var express = require("express");
var path = require("path");
var cookieSession = require("cookie-session");
var logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authenticationRouter = require("./routes/authentication");
const questionsRouter = require("./routes/questions");
const answersRouter = require("./routes/answers");
// db connection
const db = require("./configs/db.config");

var app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY1, process.env.COOKIE_KEY2],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/api/users", usersRouter(db));
app.use("/api/questions", questionsRouter(db));
app.use("/api/answers", answersRouter(db));
app.use("/api/auth", authenticationRouter(db));

app.listen(8080, () => {
  console.log("server is running");
});

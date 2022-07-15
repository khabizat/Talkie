import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/Home/HomePage";
import QuestionsPage from "./components/Questions/QuestionsPage";
import AddQuestionForm from "./components/Questions/AddQuestionForm";
import About from "./components/About";
import User from "./components/User";

function App() {
  const [tagId, setTagId] = useState(null);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/questions">
          <QuestionsPage tagId={tagId} setTagId={setTagId} />
        </Route>
        <Route exact path="/questions/new">
          <AddQuestionForm tagId={tagId} setTagId={setTagId} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

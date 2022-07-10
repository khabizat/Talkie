import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import QuestionsPage from "./components/QuestionsPage";
import AddQuestionFrom from "./components/AddQuestionForm";
import EachQuestionPage from "./components/EachQuestionPage";

function App() {
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
          <QuestionsPage />
        </Route>
        <Route exact path="/questions/new">
          <AddQuestionFrom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

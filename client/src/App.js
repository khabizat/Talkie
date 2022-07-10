import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
<<<<<<< HEAD
import Home from "./components/HomePage";
=======
import HomePage from "./components/HomePage";
import QuestionsPage from "./components/QuestionsPage";
import AddQuestionFrom from "./components/AddQuestionForm";
>>>>>>> 64807af3c5bf2b4410193b291de0ab5ccc95f671

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

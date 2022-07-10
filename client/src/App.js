import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import AddQuestionForm from "./components/AddQuestionForm";
import Register from "./components/Register";
import Home from "./components/HomePage";
import QuestionPage from "./components/QuestionPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/questions">
          <QuestionPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

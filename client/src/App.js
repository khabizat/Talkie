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
import HomePage from "./components/HomePage";

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
        <Route exact path="/questions/new">
          <AddQuestionForm />
        </Route>
        <Route exact path="/questions">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

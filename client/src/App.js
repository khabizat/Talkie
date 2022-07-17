import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/Home/HomePage";
import QuestionsPage from "./components/Questions/QuestionsPage";
import AddQuestionForm from "./components/Questions/AddQuestionForm";
import About from "./components/About";
import User from "./components/User";
import Navbar from "./components/Navbar";

function App() {
  const [tagId, setTagId] = useState(null);
  
  const [currentUser, setCurrentUser] = useState(null);
  const user = JSON.parse(window.localStorage.getItem("user"));
  
  
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    
    <Router>
      <Switch>
        //Home
        <Route exact path="/">
          <Navbar currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
          <HomePage currentUser={ currentUser } />
        </Route>
        //Login
        <Route exact path="/login">
          <Navbar currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
          <Login setCurrentUser={ setCurrentUser } />
        </Route>
        //Register
        <Route exact path="/register">
          <Navbar currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
          <Register />
        </Route>
        //Questions
        <Route exact path="/questions">
          <Navbar currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
          <QuestionsPage tagId={ tagId } setTagId={ setTagId } />
        </Route>
        //Questions/new
        <Route exact path="/questions/new">
          <Navbar currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
          <AddQuestionForm tagId={ tagId } setTagId={ setTagId } />
        </Route>
        //About
        <Route exact path="/about">
          <Navbar currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
          <About />
        </Route>
        //User
        <Route exact path="/user">
          <Navbar currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
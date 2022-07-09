import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AddQuestionForm from "./components/AddQuestionForm";
import Register from "./components/Register";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar authenticated={authenticated} />
          <h1>Home page</h1>
        </Route>
        <Route exact path="/login">
          <Login setAuthenticated={setAuthenticated} />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/questions/new">
          <AddQuestionForm authenticated={authenticated}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

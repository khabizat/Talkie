import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
<<<<<<< HEAD
import QuestionList from "./compontents/QuestionList"
=======
import Register from "./components/Register";
>>>>>>> b7b20cf47d443d47855315a89db5e037b81cfc5e

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
<<<<<<< HEAD
          <Navbar />
          <h1>Home</h1>
        </Route>
        <Route exact path="/login">
          <Login />
          
=======
          <Navbar authenticated={authenticated} />
          <h1>Home page</h1>
        </Route>
        <Route exact path="/login">
          <Login setAuthenticated={setAuthenticated} />
        </Route>
        <Route exact path="/register">
          <Register />
>>>>>>> b7b20cf47d443d47855315a89db5e037b81cfc5e
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <h1>HomePage</h1>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

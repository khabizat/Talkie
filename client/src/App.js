import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import HomeBanner from "./components/HomeBanner";
import HomeWelcome from "./components/HomeWelcome";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar authenticated={authenticated} />
          <HomeBanner />
          <HomeWelcome />
        </Route>
        <Route exact path="/login">
          <Login setAuthenticated={setAuthenticated} />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

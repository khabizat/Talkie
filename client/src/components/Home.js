import React, { useState, useEffect } from "react";
import HomeWelcome from "./HomeWelcome";
import HomeBanner from "./HomeBanner";
import Navbar from "./Navbar";


export default function TestHome() {
  const [currentUser, setCurrentUser] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [currentUser, setCurrentUser]);

  return (
    <>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <HomeBanner />
      <HomeWelcome />
    </>
  );
}
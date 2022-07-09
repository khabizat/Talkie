import React, { useState, useEffect } from "react";
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
      <Navbar user={currentUser} setCurrentUser={setCurrentUser} />
      <div>Home page</div>
    </>
  );
}

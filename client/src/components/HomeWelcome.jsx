import React from "react";
import Button from "./Button";


export default function HomeWelcome() {

  const handleStartButton = () => {
    
  }
  return <section className="main-content">
    <main className="home-welcome">
      <h1>Welcome to the Talkie home page!!🎉🎉</h1>
      <section>
        <Button onClick={handleStartButton} value="Log in">Start</Button>
      </section>
    </main>
  </section>

}
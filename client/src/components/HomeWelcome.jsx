import React from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";

export default function HomeWelcome() {
  const history = useHistory();

  const handleStartButton = () => {
    history.push("/questions");
  };

  return (
    <section className="main-content">
      <main className="home-welcome">
        <h1>Welcome to the Talkie home page!!🎉🎉</h1>
        <section>
          <Button onClick={handleStartButton}>Start</Button>
        </section>
      </main>
    </section>
  );
}

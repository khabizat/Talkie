import React from "react";
import { useHistory } from "react-router-dom";

export default function HomeWelcome() {
  const history = useHistory();

  const handleStartButton = () => {
    history.push("/questions");
  };

  return (
    <section className="main-content">
      <main className="home-welcome">
        <section className="welcome">
          <h3 class="font-serif">Take your interview prep to the next level</h3>
          <button
            onClick={handleStartButton}
            className="start-button"
            class="h-12 animate-pulse px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Start
          </button>
        </section>
      </main>
    </section>
  );
}

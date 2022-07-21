import React from "react";
import { useHistory } from "react-router-dom";

export default function HomeWelcome(props) {
  const history = useHistory();
  const { currentUser } = props;

  const handleStartButton = () => {
    if (currentUser) {
      return history.push("/questions");
    }
    history.push("/login");
  };

  return (
    <section className="">
      <main className="home-welcome">
        <section className="welcome">
          <h3 className="font-semibold text-gray-700">
            Take your interview prep to the next level
          </h3>
          &nbsp;
          <button
            onClick={handleStartButton}
            className="start-button"
            class="font-bold h-12 animate-pulse px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Start Your Practice
          </button>
        </section>
      </main>
    </section>
  );
}

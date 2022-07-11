import React from "react";
import "../style.css";

export default function HomeBanner() {
  return (
    <div className="home-banner">
      <img
        src={
          "https://github.com/khabizat/Talkie/blob/components/home-page/client/docs/Banner.jpg?raw=true"
        }
        alt={"Banner image"}
      />
    </div>
  );
}

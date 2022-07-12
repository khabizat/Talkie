import React from "react";
import "../style.css";
import banner from "../../Banner.jpg"

export default function HomeBanner() {
  return (
    <div className="home-banner">
      <img
        src={banner}
        alt={"Banner image"}
      />
    </div>
  );
}

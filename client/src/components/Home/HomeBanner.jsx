import React from "react";
import banner from "../../Home.jpg";

export default function HomeBanner() {
  return (
    <div className="home-banner">
      <img src={banner} alt={"Banner image"} />
    </div>
  );
}

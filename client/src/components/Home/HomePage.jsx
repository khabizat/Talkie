import React, { useState, useEffect } from "react";
import HomeWelcome from "./HomeWelcome";
import HomeBanner from "./HomeBanner";
import "./HomePage.scss";

export default function HomePage() {


  return (
    <>
      <main className="main-container">
        <HomeBanner />
        <HomeWelcome />
      </main>
    </>
  );
}

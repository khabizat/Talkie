import React, { useState, useEffect } from "react";
import HomeWelcome from "./HomeWelcome";
import HomeBanner from "./HomeBanner";
import Navbar from "../Navbar";
import "./HomePage.scss";

export default function HomePage() {


  return (
    <>
      <HomeBanner />
      <HomeWelcome />
    </>
  );
}

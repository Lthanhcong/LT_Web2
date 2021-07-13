import React from "react";
import News from "./components/News";
import Portfolio from "./components/Portfolio";
import Slider from "./components/Slider";
import Trailers from "./components/Trailers";
import "./components/App.css";

export default function Home() {
  return (
    <div className="container mt-5 carousel">
      <div id="preloader" />
      <News />
      <Slider />
      <Portfolio />
      <Trailers />
    </div>
  );
}

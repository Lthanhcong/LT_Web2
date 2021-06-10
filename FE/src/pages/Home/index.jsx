import React from "react";
import News from "./components/News";
import Portfolio from "./components/Portfolio";
import Slider from "./components/Slider";
import Trailers from "./components/Trailers";

export default function Home() {
  return (
    <div>
      <div id="preloader" />
      <Slider />
      <Portfolio />
      <Trailers />
      <News />
    </div>
  );
}

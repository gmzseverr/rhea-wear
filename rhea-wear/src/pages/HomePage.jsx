import React from "react";
import Hero from "../components/Hero.jsx";
import EditorsPick from "../sections/EditorsPick.jsx";
import Bestesellers from "../sections/Bestesellers.jsx";

import CarouselComponent from "../components/CarouselComponent.jsx";

function HomePage() {
  return (
    <div>
      <Hero />
      <EditorsPick />
      <Bestesellers />
      <CarouselComponent />
    </div>
  );
}

export default HomePage;

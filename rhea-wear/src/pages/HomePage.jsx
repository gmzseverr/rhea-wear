import React from "react";
import Hero from "../components/Hero.jsx";
import EditorsPick from "../sections/EditorsPick.jsx";
import Bestesellers from "../sections/Bestesellers.jsx";

import CarouselComponent from "../components/CarouselComponent.jsx";
import RowComponent from "../sections/RowComponent.jsx";
import FeaturesPosts from "../sections/FeaturesPosts.jsx";

function HomePage() {
  return (
    <div>
      <Hero />
      <EditorsPick />
      <Bestesellers />
      <CarouselComponent />
      <RowComponent />
      <FeaturesPosts />
    </div>
  );
}

export default HomePage;

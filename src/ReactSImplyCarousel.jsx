import React from "react";

const ReactSImplyCarousel = ({ slides, activeSlideIndex }) => {
  // Your carousel rendering logic here based on the active slide index and the slides array
  return (
    <div className="carousel">
      <img src={slides[activeSlideIndex].image} alt={`Slide ${activeSlideIndex + 1}`} />
    </div>
  );
};

export default ReactSImplyCarousel;

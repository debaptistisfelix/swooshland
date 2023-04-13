import "../Homepage/ShoeSlider.css";
import { useState } from "react";

function ShoeSlider({ handleNext, handlePrevious, currentImageIndex }) {
  const images = [
    "/lust-shoe-deg.png",
    "/pride-shoe-deg.png",
    "/rage-shoe-deg.png",
  ];

  return (
    <div className="ShoeSlider">
      <i
        onClick={handleNext}
        className="fa-solid fa-caret-left banner-navs banner-nav-left"
      ></i>
      <i
        onClick={handlePrevious}
        className="fa-solid fa-caret-right banner-navs banner-nav-right"
      ></i>
      <div className="slider-images">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Shoe"
            className={`slider-image ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
        <div className="shoe-shadow"></div>
      </div>
    </div>
  );
}

export default ShoeSlider;

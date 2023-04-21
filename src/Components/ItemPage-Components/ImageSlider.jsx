import "./ImageSlider.css";
import { useState, useEffect } from "react";
import MiniImg from "./MiniImg";
import AOS from "aos";
import "aos/dist/aos.css";

function ImageSlider({ data }) {
  const [displayedImg, setDisplayedImg] = useState(data.images[0].imgSrc);

  function changeDisplayedImg(id) {
    const chosenImg = data.images.filter((img) => {
      return img.imgName === id;
    });
    setDisplayedImg(chosenImg[0].imgSrc);
  }

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setDisplayedImg(data.images[0].imgSrc);
  }, [data.images[0].imgSrc]);

  const galleryImages = data.images.map((img, i) => {
    return (
      <MiniImg
        changeImg={changeDisplayedImg}
        imgSrc={img.imgSrc}
        key={img.imgName}
        id={img.imgName}
        displayedImg={displayedImg}
      />
    );
  });

  let bigAos;
  let smallAos;
  window.matchMedia("(max-width:767px)").matches
    ? (bigAos = "fade-down")
    : (bigAos = "fade-right");
  window.matchMedia("(max-width:767px)").matches
    ? (smallAos = "fade-right")
    : (smallAos = "fade-down");

  const mobileScreenSize = window.innerWidth <= 767;

  return (
    <div
      style={{
        height: mobileScreenSize && data.images.length === 1 && "fit-content",
      }}
      className="ImageSlider"
    >
      <div
        className={`ImageSlider-img-box`}
        data-aos={`${bigAos}`}
        data-aos-delay={600}
      >
        <img className="ImageSlider-img" src={displayedImg} />
      </div>
      <div
        style={{ display: data.images.length === 1 && "none" }}
        className={`ImageSlider-images`}
        data-aos={`${smallAos}`}
        data-aos-delay={600}
      >
        {galleryImages}
      </div>
    </div>
  );
}

export default ImageSlider;

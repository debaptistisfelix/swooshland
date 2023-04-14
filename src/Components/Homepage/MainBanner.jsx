import "../Homepage/MainBanner.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import ShoeSlider from "./ShoeSlider";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";

function MainBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sins = [
    {
      name: "Lust",
      color: "#9d0208",
      path: "/products/6432f546e715a8760dcccaf6",
    },
    {
      name: "Pride",
      color: "#023e7d",
      path: "/products/6432f546e715a8760dcccae8",
    },
    {
      name: "Rage",
      color: "#191919",
      path: "/products/6432f546e715a8760dcccada",
    },
  ];
  const images = [
    "/lust-shoe-smaller.png",
    "/pride-shoe-smaller.png",
    "/rage-shoe-smaller.png",
  ];

  let fontColor;
  let shoeImg;
  let shopPath;
  let name;

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  function handleShoeColors(color, img, path, shoeName) {
    fontColor = color;
    shoeImg = img;
    shopPath = path;
    name = shoeName;
  }

  if (currentImageIndex === 0) {
    handleShoeColors(
      "#9d0208",
      "/lust-shoe.png",
      "/products/6432f546e715a8760dcccaf6",
      "Lust"
    );
  } else if (currentImageIndex === 1) {
    handleShoeColors(
      "#023e7d",
      "/pride-shoe.png",
      "/products/6432f546e715a8760dcccae8",
      "Pride"
    );
  } else if (currentImageIndex === 2) {
    handleShoeColors(
      "#191919",
      "/rage-shoe.png",
      "/products/6432f546e715a8760dcccada",
      "Rage"
    );
  }

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="MainBanner">
      <i
        onClick={handlePrevious}
        className="fa-solid fa-caret-left banner-navs banner-nav-left"
      ></i>
      <i
        onClick={handleNext}
        className="fa-solid fa-caret-right banner-navs banner-nav-right"
      ></i>
      <div className="MainBanner-text-box">
        <div className="MainBanner-title-box">
          <h5
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
            className="MainBanner-mini-title"
            style={{ color: fontColor }}
          >
            NIKE AIR
          </h5>
          <h1
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
            className="MainBanner-title"
            style={{ color: fontColor }}
          >
            JORDAN 1 MID
          </h1>
          <h1 className="MainBanner-rogue">ROGUE</h1>
        </div>
        <div className="MainBanner-slogan-box">
          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="1250"
            data-aos-anchor-placement="bottom"
            className="MainBanner-slogan"
          >
            Step into sin with our Seven Sins collection of Jordan 1 Mids.
          </p>
          {sins.map((sin, index) => {
            return (
              <Link
                key={uuidv4()}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={`${sin.path}`}
                className={`MainBanner-go-btn ${
                  index === currentImageIndex ? "active" : ""
                }`}
                style={{ backgroundColor: sin.color }}
              >
                Sin of {sin.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="MainBanner-slider-container">
        <ShoeSlider
          currentImageIndex={currentImageIndex}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </div>
    </div>
  );
}

export default MainBanner;

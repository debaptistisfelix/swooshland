import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../Homepage/BentoCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BentoImg from "./BentoImg";

function BentoCard() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="BentoCard-container">
      <div className="BentoCard">
        <div className="BentoCard-title-box">
          <h1
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom"
            className="BentoCard-title"
          >
            JUST IN
          </h1>
        </div>
        <div className="BentoCard-img-box">
          <div className="BentoCard-circle">
            <BentoImg />
            {/* <img className="BentoCard-small-img" src="/bento-long.png" /> */}
          </div>
        </div>

        <div className="BentoCard-bottom-part">
          <h4
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="BentoCard-item"
          >
            LAMU' LUNCH-BOX - $79.90
          </h4>
        </div>

        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/products/6432f546e715a8760dcccb41"
          className="BentoCard-btn"
        >
          SEE MORE
        </Link>
      </div>
    </div>
  );
}

export default BentoCard;

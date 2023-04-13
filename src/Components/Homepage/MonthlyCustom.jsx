import "./MonthlyCustom.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MonthlyImg from "./MonthlyImg";

import { Link } from "react-router-dom";

function MonthlyCustom() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="MonthlyCustom-container">
      <div className="MonthlyCustom">
        <div className="MonthlyCustom-title-box">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom"
            className="MonthlyCustom-title"
          >
            JUST IN
          </h1>
        </div>
        <div className="MonthlyCustom-img-box">
          <div className="MonthlyCustom-circle">
            <MonthlyImg />
          </div>
        </div>

        <div className="MonthlyCustom-bottom-part">
          <h4
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="MonthlyCustom-item"
          >
            AF1 L.A. Kraken- $199.90
          </h4>
        </div>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/products/6432f546e715a8760dcccbce"
          className="MonthlyCustom-btn"
        >
          SEE MORE
        </Link>
      </div>
    </div>
  );
}

export default MonthlyCustom;

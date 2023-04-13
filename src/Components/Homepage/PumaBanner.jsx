import "./PumaBanner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function PumaBanner() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="PumaBanner-container">
      <div className="PumaBanner">
        <div className="PumaBanner-img-container">
          <img className="PumaBanner-img" src="/pumaposter2.jpg" />
          <img className="PumaBanner-img puma-cut" src="/pumacut2.png" />
          <div className="PumaBanner-text-box">
            <div className="PumaBanner-model-box">
              <h1
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-anchor-placement="bottom"
                className="PumaBanner-big-text title-puma"
              >
                PUMA
              </h1>
              <h1
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="bottom"
                className="PumaBanner-big-text title-cali"
              >
                CALI
              </h1>
            </div>
            <h3
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-anchor-placement="bottom"
              className="PumaBanner-small-text"
            >
              CLEOPATRA
            </h3>
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/products/6432f546e715a8760dcccc4c"
              className="PumaBanner-link"
            >
              SEE MORE
            </Link>
          </div>
        </div>
      </div>

      <div className="PumaMobile">
        <div className="PumaMobile-img-box">
          <div className="PumaMobile-text-box"></div>
          <div className="PumaMobile-cut-img"></div>
          <div className="PumaMobile-text-box">
            <div className="PumaMobile-model-box">
              <h1
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-anchor-placement="bottom"
                className="PumaMobile-big-text title-puma-mobile"
              >
                PUMA
              </h1>
              <h1
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="bottom"
                className="PumaMobile-big-text title-cali-mobile"
              >
                CALI
              </h1>
              <h3
                data-aos="flip-down"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-anchor-placement="bottom"
                className="PumaMobile-small-text"
              >
                CLEOPATRA
              </h3>
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to="/products/6432f546e715a8760dcccc4c"
                className="PumaMobile-link"
              >
                SEE MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PumaBanner;

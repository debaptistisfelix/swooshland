import "./BreezeBanner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function BreezeBanner() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="BreezeBanner-container">
      <div className="BreezeBanner">
        <div className="BreezeBanner-img-container">
          <img className="BreezeBanner-img" src="Muro.jpg" />
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-anchor-placement="bottom"
            className="BreezeBanner-cut"
            src="/breeze-hand-cut.png"
          />
          <div className="BreezeBanner-text-box">
            <div className="BreezeBanner-title-box">
              <h1 className="BreezeBanner-model">JORDAN 1 MID</h1>
              <h1 className="BreezeBanner-name">BREEZE</h1>
            </div>
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/products/6432f546e715a8760dcccb20"
              className="BreezeBanner-btn"
            >
              SEE MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreezeBanner;

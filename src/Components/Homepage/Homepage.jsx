import "./Homepage.css";
import { useState } from "react";
import PumaBanner from "./PumaBanner";
import MonthlyCustom from "./MonthlyCustom";
import BreezeBanner from "./BreezeBanner";
import AccessSection from "./AccessSection";
import SneakSection from "./SneakSection";
import MainBanner from "./MainBanner";
import BentoCard from "./BentoCard";

function Homepage() {
  const [loadedPage, setLoadedPage] = useState(false);
  function loadPage(delay) {
    setTimeout(() => {
      setLoadedPage(true);
    }, delay);
  }
  loadPage(600);
  return (
    <div className="Homepage">
      {loadedPage === true ? (
        <div className="Homepage-container">
          <MainBanner />
          <SneakSection />
          <div className="homepage-section">
            {/*  <h3 className="homepage-section-title">WOMEN</h3> */}
            <div className="homepage-section-box">
              <div className="homepage-puma-container">
                <PumaBanner />
              </div>
              <div className="homepage-access-container">
                <BentoCard />
              </div>
            </div>
          </div>
          <AccessSection />
          <div className="homepage-section">
            {/*  <h3 className="homepage-section-title">MEN</h3> */}
            <div className="homepage-section-box">
              <div className="homepage-orange-container">
                <MonthlyCustom />
              </div>
              <div className="homepage-lemon-container">
                <BreezeBanner />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="Homepage-loader-box">
          <div className="loader-container">
            <div className="loader"></div>
            <span className="loader-text">LOADING</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;

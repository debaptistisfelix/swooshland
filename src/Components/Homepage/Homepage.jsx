import "./Homepage.css";
import { useState } from "react";
import RogueBox from "./RogueBox";
import NewProds from "./NewProds";
import Models from "./Models";
import PumaBanner from "./PumaBanner";
import MonthlyCustom from "./MonthlyCustom";
import LemonBanner from "./LemonBanner";


function Homepage() {
    const [loadedPage, setLoadedPage] = useState(false);
    function loadPage(delay) {
        setTimeout(() => {
            setLoadedPage(true);
        }, delay);
    }
    loadPage(600)
    return (
        <div className="Homepage">


            {loadedPage === true
                ? <div className="Homepage-container">
                    <div className="Homepage-lev2">
                        <RogueBox />
                        <div className="Homepage-right">
                            <PumaBanner />
                        </div>
                    </div>
                    <div className="Homepage-lev1">
                        <div className="Homepage-left">
                            <LemonBanner />
                        </div>
                        <MonthlyCustom />
                    </div>
                    <div className="Homepage-lev3"></div>

                </div>
                : <div className="Homepage-loader-box">
                    <div className="loader-container">
                        <div className="loader"></div>
                        <span className="loader-text">LOADING</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Homepage;
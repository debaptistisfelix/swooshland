import "./Homepage.css";
import { useState } from "react";
import RogueBox from "./RogueBox";
import NewProds from "./NewProds";
import Models from "./Models";
import PumaBanner from "./PumaBanner";

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
                    <RogueBox />
                    <div className="Homepage-right">
                        <PumaBanner />
                    </div>
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
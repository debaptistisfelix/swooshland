import "./Homepage.css";
import { useState } from "react";
import RogueBox from "./RogueBox";
import NewProds from "./NewProds";

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
                        <div className="project1">
                            <div className="shader">
                                <h2 className="project-title">L.A. KRAKEN</h2>
                            </div>
                        </div>
                        <div className="project2">
                            <div className="shader">
                                <h2 className="project-title">LEO KAWAII</h2>
                            </div>
                        </div>

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
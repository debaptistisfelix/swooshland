import "./RogueRage.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

function RogueRage() {
    useEffect(() => {
        AOS.init();
        return () => { AOS.refresh() }
    }, [])
    return (
        <div className="RogueRage">
            <div className="RogueRage-img-box">
                <div className="RogueRage-poster-text">
                    <div className="RogueRage-model">
                        <span data-aos="fade-down"
                            data-aos-duration="1000"
                            className="RogueRage-model-a">JORDAN 1</span>
                        <span data-aos="fade-left"
                            data-aos-duration="1000"
                            className="RogueRage-model-b">ROGUE</span>
                        <span
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            className="RogueRage-name"
                        >Sin of Rage</span>
                    </div>
                    <div className="RogueRage-name-box">
                        <span
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >Sin Of Rage</span>
                    </div>
                </div>
            </div>
            <div className="RogueRage-text-box">
                <p
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >Old Schoold Rock & White Peonies</p>
                <Link
                    to="/products/640361040df5eac563cb781d"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    className="RogueRage-go"
                    data-aos-anchor-placement="top-bottom"
                >EXPLORE</Link>
            </div>
            <img className="RogueRage-waves" src="/blackwaves.png" />
            <div className="RogueRage-gradient"></div>
        </div>
    )
}

export default RogueRage;
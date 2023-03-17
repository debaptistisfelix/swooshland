import "./RoguePride.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

function RoguePride() {
    useEffect(() => {
        AOS.init();
        return () => { AOS.refresh() }
    }, [])
    return (
        <div className="RoguePride">
            <div className="RoguePride-img-box">
                <div className="RoguePride-poster-text">
                    <div className="RoguePride-model">
                        <span data-aos="fade-down"
                            data-aos-duration="1000"
                            className="RoguePride-model-a">JORDAN 1</span>
                        <span data-aos="fade-left"
                            data-aos-duration="1000"
                            className="RoguePride-model-b">ROGUE</span>
                    </div>
                    <div className="RoguePride-name-box">
                        <span
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            className="RoguePride-name"
                        >Sin of Pride</span>
                    </div>
                </div>
            </div>
            <div className="RoguePride-text-box">
                <p
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >Deep Blue, Koi Carps & Calmness</p>
                <Link
                    to="/products/640360ad0df5eac563cb7809"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"

                    data-aos-anchor-placement="top-bottom"
                    className="RoguePride-go"
                >EXPLORE</Link>
            </div>
            <img className="RoguePride-waves" src="/waves3.png" />
            <div className="RoguePride-gradient"></div>
        </div>
    )
}

export default RoguePride;
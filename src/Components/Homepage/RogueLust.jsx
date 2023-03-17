import "./RogueLust.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

function RogueLust() {
    useEffect(() => {
        AOS.init();
        return () => { AOS.refresh() }
    }, [])
    return (
        <div className="RogueLust">
            <div className="RogueLust-img-box">
                <div className="RogueLust-poster-text">
                    <div className="RogueLust-model">
                        <span data-aos="fade-down"
                            data-aos-duration="1000"
                            className="RogueLust-model-a">JORDAN 1</span>
                        <span data-aos="fade-left"
                            data-aos-duration="1000"
                            className="RogueLust-model-b">ROGUE</span>
                    </div>
                    <div className="RogueLust-name-box">
                        <span
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            className="RogueLust-name"
                        >Sin of Lust</span>
                    </div>
                </div>
            </div>
            <div className="RogueLust-text-box">
                <p
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >Chicago, Bloody Red & White Roses </p>
                <Link
                    to="/products/6403601d0df5eac563cb77da"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    className="RogueLust-go"
                    data-aos-anchor-placement="top-bottom"
                >EXPLORE</Link>
            </div>
            <img className="RogueLust-waves" src="/redwaves.png" />
            <div className="RogueLust-gradient">
                <div className="RogueLust-first-curve">
                </div>
            </div>

        </div>
    )
}

export default RogueLust;
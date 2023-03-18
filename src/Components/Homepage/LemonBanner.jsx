import "./LemonBanner.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LemonBanner() {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init();
        return () => { AOS.refresh() }
    }, [])
    return (
        <div className="LemonBanner-container">



            <div className="LemonBanner">
                <div className="LemonBanner-text">
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="LemonBanner-title">
                        <span className="title-og">O.G.</span>
                        <span className="title-lemon">LEMON</span>
                    </div>
                </div>
            </div>



            <div className="MobileLemon">

            </div>
        </div>
    )
}

export default LemonBanner;
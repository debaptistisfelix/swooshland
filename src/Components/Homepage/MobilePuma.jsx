import "./MobilePuma.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";



function MobilePuma() {
    useEffect(() => {
        AOS.init();
        return () => { AOS.refresh() }
    }, [])
    return (
        <div className="MobilePuma">
            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
                className="MobilePuma-title">
                <span className="title-pumaMobile">PUMA</span>
                <span className="title-caliMobile">CALI</span>
            </div>

            <div className="MobilePuma-cut"></div>
            <div
                className="MobilePuma-btn-box">
                <Link
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                    to="/products/640b5e649cbf6ac54337dddb" className="MobilePuma-btn">SEE MORE</Link>
            </div>
            <div
                data-aos="fade-down"
                data-aos-duration="1000"

                data-aos-anchor-placement="top-center"
                className="MobilePuma-name">CLEOPATRA</div>
        </div>
    )
}

export default MobilePuma;
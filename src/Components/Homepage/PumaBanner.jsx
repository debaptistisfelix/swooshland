import "./PumaBanner.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PumaBanner() {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init();
        return () => { AOS.refresh() }
    }, [])
    return (
        <div className="PumaBanner-container">



            <div className="PumaBanner">
                <div className="PumaBanner-text">
                    <div className="PumaBanner-title">
                        <span className="title-puma">PUMA</span>
                        <span className="title-cali">CALI</span>
                    </div>
                </div>
                <div className="Puma-cut">
                    <div
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                        className="title-cleopatra">CLEOPATRA</div>
                    <div


                        className="PumaBanner-btn-box">
                        <Link
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                            to="/products/640b5e649cbf6ac54337dddb" className="PumaBanner-btn">SEE MORE</Link>
                    </div>
                </div>
            </div>



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
        </div>
    )
}

export default PumaBanner;
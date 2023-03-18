import "./MonthlyCustom.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MonthlyCustom() {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init();
        return () => { AOS.refresh() }
    }, [])
    return (
        <div className="MonthlyCustom">
            <div className="Monthly-poster">
            </div>
            <div className="Monthly-cut"></div>
            <div className="Monthly-text">
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="Monthly-model">
                    <span>O.G. ORANGE</span>
                </div>
                <div
                    onClick={() => {
                        navigate("/products/64036bf0261d099979a2494b");
                        window.scrollTo(0, 0);
                    }}
                    className="Monthly-btn">SEE MORE</div>
                <div
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="Monthly-tag">
                    <span>CUSTOM OF</span>
                    <span>THE MONTH</span>
                </div>
            </div>
        </div>
    )
}

export default MonthlyCustom;
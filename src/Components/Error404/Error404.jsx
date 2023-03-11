import "../Error404/Error404.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Error404() {
    useEffect(() => {
        AOS.init();
        return () => { AOS.refresh() }
    }, [])
    return (
        <div className="Error404">
            <div className="Error404-card">
                <img src="/leo/leo2.jpg" />
                <div className="Error-text-box">
                    <h1 data-aos="fade-right" data-aos-duration="500" data-aos-delay="500" className="Error">ERROR</h1>
                    <h1 data-aos="fade-down" data-aos-duration="500" data-aos-delay="700" className="Error-nr">404</h1>
                    <span data-aos="flip-up" data-aos-delay="900" className="Error-detail">Page not Found.</span>
                </div>

            </div>
        </div>
    )
}

export default Error404;
import "../Login/ForgotSent.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ForgotSent() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="ForgotSent">
      <div className="ForgotSent-box">
        <i
          data-aos="fade-down"
          data-aos-delay={1000}
          className="fa-sharp fa-solid fa-envelope icon"
        ></i>
        <h3
          data-aos="fade-left"
          data-aos-delay={1200}
          className="ForgotSent-title"
        >
          RESET TOKEN SENT
        </h3>
        <p data-aos="fade-up" data-aos-delay={1300}>
          The token will expire in 10 minutes.
        </p>
      </div>
    </div>
  );
}

export default ForgotSent;

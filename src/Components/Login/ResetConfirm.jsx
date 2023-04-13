import "../Login/ResetConfirm.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ResetConfirm() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="ResetConfirm">
      <div className="ResetConfirm-box">
        <i
          data-aos="fade-down"
          data-aos-delay={200}
          className="fa-solid fa-circle-check icon"
        ></i>
        <h3
          data-aos="fade-left"
          data-aos-delay={300}
          className="ResetConfirm-title"
        >
          NEW PASSWORD SET
        </h3>
        <Link to="/user-log" className="ResetConfirm-link">
          Go to Login
        </Link>
      </div>
    </div>
  );
}
export default ResetConfirm;

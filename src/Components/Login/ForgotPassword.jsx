import "../Login/ForgotPassword.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ForgotForm from "./ForgotForm";
import ForgotSent from "./ForgotSent";

function ForgotPassword() {
  const [EmailSent, setEmailSent] = useState(false);
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="ForgotPassword">
      <div
        className="ForgotPassword-card"
        data-aos="fade-down"
        data-aos-delay={500}
      >
        {EmailSent === false ? (
          <ForgotForm setEmailSent={setEmailSent} />
        ) : (
          <ForgotSent />
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;

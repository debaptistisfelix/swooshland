import "../Login/ResetPassword.css";
import { useParams } from "react-router-dom";
import ResetForm from "./ResetForm";
import { useState } from "react";
import ResetConfirm from "./ResetConfirm";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ResetPassword() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pwResetted, setPwResetted] = useState(false);
  let { resetToken } = useParams();
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  async function ResetYourPassword(pass, passConf) {
    try {
      await axios.patch(
        `http://localhost:8000/api/users/resetPassword/${resetToken}`,
        {
          password: pass,
          passwordConfirm: passConf,
        }
      );
      setPwResetted(true);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError(err);
      setIsLoading(false);
      console.log(err);
    }
  }

  return (
    <div data-aos="fade-down" data-aos-delay={200} className="ResetPassword">
      <div className="ResetPassword-card">
        {pwResetted === false ? (
          <ResetForm ResetYourPassword={ResetYourPassword} />
        ) : (
          <ResetConfirm />
        )}
      </div>
    </div>
  );
}

export default ResetPassword;

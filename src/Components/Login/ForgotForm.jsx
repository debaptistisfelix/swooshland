import "../Login/ForgotForm.css";
import useInputState from "../Hooks/useInputState";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function ForgotForm({ setEmailSent }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, handleEmail, resetEmail] = useInputState("");
  const [loaderClass, setLoaderClass] = useState("hide-loader");

  const requireToken = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/users/forgotpassword", {
        email: email,
      });
      setError(null);
      setIsLoading(false);
      setEmailSent(true);
      console.log("token reset sent");
    } catch (err) {
      console.log(err.response.data.message);
      setError(err.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={() => {
        requireToken(event);
      }}
      className="ForgotForm"
    >
      <h3 className="ForgotForm-title">PASSWORD RESET</h3>
      <div className="ForgotForm-box">
        <p
          style={{ color: error ? "red" : "#495057" }}
          className="ForgotForm-parag"
        >
          {error && <>{error}</>}
          {!error && "Please enter your email address to reset your password."}
        </p>
        <input
          type="email"
          required
          onChange={handleEmail}
          className="ForgotForm-input"
        />
        <button
          onClick={() => {
            email !== "" ? setLoaderClass("show-loader") : undefined;
          }}
          className="ForgotForm-btn"
          type="submit"
        >
          SEND RESET TOKEN <div className={`btn-loader ${loaderClass}`}></div>
        </button>
      </div>
      <Link className="ForgotForm-back" to="/user-log">
        Back
      </Link>
    </form>
  );
}

export default ForgotForm;

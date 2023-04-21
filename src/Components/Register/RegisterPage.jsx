import { useContext, useState } from "react";
import "../Register/RegisterPage.css";
import axios from "axios";
import { LoggedContext } from "../Context/LoggedContext";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function RegisterPage({ formOn, toggleForm }) {
  const [cookies, setCookie, removeCookie] = useCookies(["client"]);

  const navigate = useNavigate();
  const { logIn } = useContext(LoggedContext);

  const [registrationError, setRegistrationError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  // INPUT STATE AND FUNCTIONS TO UPDATE IT
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handlePasswordConfirmChange(e) {
    setPasswordConfirm(e.target.value);
  }

  let errorClass;
  async function handleRegistrationSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/signup",
        {
          name: username,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
        }
      );
      setRegistrationError(false);
      setErrorMsg(null);
      const JWT = response.data.token;
      const codeUI = response.data.data.user._id;
      const infos = {
        token: JWT,
        codeUI: codeUI,
      };
      setCookie("client", infos, {
        path: "/",
        maxAge: 60 * 60 * 24,
      });
      logIn();
      navigate("/");
    } catch (err) {
      console.log(err);
      setErrorMsg(err.response.data.message);
      setRegistrationError(true);
    }
    /*  if (response.data.message === "Username already registered" || response.data.message === "Email already registered") {
            setRegistrationError(true);
        } else {
            logIn();
            setUser(response.data);
            const infos = {
                id: response.data._id

            }
            setCookie('client', infos, { path: '/' });
            setRegistrationError(false);
            navigate("/");
        } */
  }

  let RegisterCardStatus;
  formOn !== false
    ? (RegisterCardStatus = "hide-register-form")
    : (RegisterCardStatus = "show-register-form");

  return (
    <div className={`RegisterPage-card ${RegisterCardStatus}`}>
      <div className="RegisterPage-title-box">
        <span className="RegisterPage-title">REGISTER</span>
        <span
          style={{ color: registrationError === true ? "red" : "#495057" }}
          className="RegisterPage-subtitle"
        >
          {registrationError === true
            ? errorMsg
            : "Please enter your details to sign up."}
        </span>
      </div>
      <form
        onSubmit={handleRegistrationSubmit}
        className="RegisterPage-inputs-box"
      >
        <div className="RegisterPage-input-box">
          <label htmlFor="username-input">Username</label>
          <input
            onChange={handleUsernameChange}
            id="username-input"
            name="username"
            value={username}
            type="text"
            required
          />
        </div>
        <div className="RegisterPage-input-box">
          <label htmlFor="email-input">Email</label>
          <input
            onChange={handleEmailChange}
            id="email-input"
            name="email"
            value={email}
            type="text"
            required
          />
        </div>
        <div className="RegisterPage-input-box">
          <label htmlFor="password-input">Password</label>
          <input
            id="password-input"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            minLength={8}
          />
        </div>

        <div className="RegisterPage-input-box">
          <label htmlFor="password-input">Confirm Password</label>
          <input
            id="passwordConfirm-input"
            name="passwordConfirm"
            type="password"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
            required
            minLength={8}
          />
        </div>

        <button className="RegisterPage-btn" type="submit">
          SIGN UP
        </button>
      </form>
      <div className="RegisterPage-to-register">
        <span className="RegisterPage-to-register-a">
          Have an account already?
        </span>
        <span
          onClick={() => {
            toggleForm();
            setRegistrationError(false);
          }}
          className="RegisterPage-to-register-b"
        >
          <b>Sign In here.</b>
        </span>
      </div>
    </div>
  );
}

export default RegisterPage;

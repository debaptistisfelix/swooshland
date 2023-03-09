import { useContext, useState } from "react";
import "../Register/RegisterPage.css";
import axios from "axios";
import { LoggedContext } from "../Context/LoggedContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { useCookies } from "react-cookie";






function RegisterPage({ formOn, toggleForm }) {
    const { user, setUser } = useContext(UserContext);
    const [cookies, setCookie, removeCookie] = useCookies(['U-I']);

    const navigate = useNavigate();
    const { logIn } = useContext(LoggedContext);

    const [registrationError, setRegistrationError] = useState(false);
    // INPUT STATE AND FUNCTIONS TO UPDATE IT 
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    let errorClass;
    async function handleRegistrationSubmit(e) {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/users/register", {
            username: username,
            email: email,
            password: password
        })
        if (response.data.message === "Username already registered" || response.data.message === "Email already registered") {
            setRegistrationError(true);
        } else {
            logIn();
            setUser(response.data);
            const infos = {
                username: response.data.username,
                cart: response.data.cart,
                wishlist: response.data.wishlist,
                id: response.data._id

            }
            setCookie('U-I', infos, { path: '/' });
            setRegistrationError(false);
            navigate("/");
        }
    }

    let RegisterCardStatus;
    formOn !== false ? RegisterCardStatus = "hide-register-form" : RegisterCardStatus = "show-register-form"


    return (
        <div className={`RegisterPage-card ${RegisterCardStatus}`}>
            <div className="RegisterPage-title-box">
                <span className="RegisterPage-title">REGISTER</span>
                <span
                    style={{ color: registrationError === true ? "red" : "#495057" }}
                    className="RegisterPage-subtitle">
                    {registrationError === true ? "Username or Email already registered" : "Please enter your details to sign up."}
                </span>
            </div>
            <form onSubmit={handleRegistrationSubmit} className="RegisterPage-inputs-box">
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

                <button className="RegisterPage-btn" type="submit">SIGN UP</button>
            </form>
            <div className="RegisterPage-to-register">
                <span className="RegisterPage-to-register-a">Have an account already?</span>
                <span
                    onClick={() => {
                        toggleForm();
                        setRegistrationError(false);
                    }}
                    className="RegisterPage-to-register-b"><b>Sign In here.</b></span>
            </div>

        </div>
    )
}


export default RegisterPage;
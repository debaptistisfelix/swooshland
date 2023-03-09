import "./LoginPage.css"
import { useState, useContext } from "react";
import axios from "axios";
import { LoggedContext } from "../Context/LoggedContext";
import { UserContext } from "../Context/UserContext";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function LoginPage({ formOn, toggleForm }) {

    const [cookies, setCookie, removeCookie] = useCookies(['client']);

    const { user, setUser } = useContext(UserContext);

    // TO REDIRECT AFTER LOG IN
    const navigate = useNavigate();
    // LOGIN STATE FROM LOGGED-CONTEXT
    const { logIn } = useContext(LoggedContext);



    const [logError, setLogError] = useState(false);
    // STATE INPUTS TO LOGIN
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // FUNCTION TO HANDLE INPUT CHANGES
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }
    // FUNCTION TO SUBMIT THE LOGIN FOMR
    async function handleSubmitLogin(e) {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/users/login", ({
            "email": email,
            "password": password
        }))
        if (response.data.message === "Email or Password incorrect") {
            setLogError(true);
        } else if (!response.data.message) {
            logIn();
            setLogError(false);
            setUser(response.data);
            const infos = {
                _id: response.data._id,

            }
            setCookie('client', infos, {
                path: '/',
                maxAge: 60 * 60 * 24
            });
            navigate("/");
        }
    }

    /*  window.localStorage.removeItem("User"); */

    let errorStyles = {
        color: "red",
        border: "1px solid red"
    }


    // VARIABLE THAT CHANGES FORM STYLE BASED ON IF LOGGED IN WENT WELL OR BAD




    let LoginCardStatus;
    formOn !== true ? LoginCardStatus = "hide-login-form" : LoginCardStatus = "show-login-form"
    return (

        <div className={`LoginPage-card ${LoginCardStatus}`}>
            <div className="LoginPage-title-box">
                <span className="LoginPage-title">WELCOME BACK</span>
                <span
                    style={{ color: logError === true ? "red" : "#495057" }}
                    className="LoginPage-subtitle">
                    {logError === true ? "Invalid Email or Password. Try Again" : "Please enter your details to log in."}
                </span>
            </div>
            <form onSubmit={handleSubmitLogin} className="LoginPage-inputs-box">
                <div className="LoginPage-input-box">
                    <label htmlFor="email">Email</label>
                    <input
                        style={logError === true ? errorStyles : undefined}
                        onChange={handleEmailChange}
                        id="email"
                        value={email}
                        name="email"
                        type="text"
                        required
                    />
                </div>
                <div className="LoginPage-input-box">
                    <label htmlFor="password">Password</label>
                    <input
                        style={{ border: logError === true ? "1px solid red" : "1px solid #495057" }}
                        onChange={handlePasswordChange}
                        name="password"
                        id="password"
                        value={password}
                        type="password"
                        required
                    />
                </div>
                <span className="LoginPage-reset-pw">Forgot Password</span>
                <button className="LoginPage-btn" type="submit">LOG IN</button>
            </form>
            <div className="LoginPage-to-register">
                <span className="LoginPage-to-register-a">Don't have an account?</span>
                <span
                    onClick={() => {
                        toggleForm();
                        setLogError(false);
                    }}
                    className="LoginPage-to-register-b"><b>Sign up for free</b></span>
            </div>
        </div>

    )
}

export default LoginPage;
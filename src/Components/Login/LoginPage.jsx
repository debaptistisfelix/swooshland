import "./LoginPage.css"

function LoginPage({ formOn, toggleForm }) {
    let LoginCardStatus;
    formOn !== true ? LoginCardStatus = "hide-login-form" : LoginCardStatus = "show-login-form"
    return (

        <div className={`LoginPage-card ${LoginCardStatus}`}>
            <div className="LoginPage-title-box">
                <span className="LoginPage-title">WELCOME BACK</span>
                <span className="LoginPage-subtitle">Please enter your details to log in.</span>
            </div>
            <div className="LoginPage-inputs-box">
                <div className="LoginPage-input-box">
                    <label>Email</label>
                    <input
                        type="text"
                    />
                </div>
                <div className="LoginPage-input-box">
                    <label>Password</label>
                    <input
                        type="password"
                    />
                </div>
                <span className="LoginPage-reset-pw">Forgot Password</span>
                <button className="LoginPage-btn" type="submit">LOG IN</button>
            </div>
            <div className="LoginPage-to-register">
                <span className="LoginPage-to-register-a">Don't have an account?</span>
                <span
                    onClick={toggleForm}
                    className="LoginPage-to-register-b"><b>Sign up for free</b></span>
            </div>
        </div>

    )
}

export default LoginPage;
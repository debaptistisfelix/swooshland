import "../Register/RegisterPage.css";

function RegisterPage({ formOn, toggleForm }) {
    let RegisterCardStatus;
    formOn !== false ? RegisterCardStatus = "hide-register-form" : RegisterCardStatus = "show-register-form"
    return (
        <div className={`RegisterPage-card ${RegisterCardStatus}`}>
            <div className="RegisterPage-title-box">
                <span className="RegisterPage-title">REGISTER</span>
                <span className="RegisterPage-subtitle">Please enter your details to sign up.</span>
            </div>
            <div className="RegisterPage-inputs-box">
                <div className="RegisterPage-input-box">
                    <label>Email</label>
                    <input
                        type="text"
                    />
                </div>
                <div className="RegisterPage-input-box">
                    <label>Password</label>
                    <input
                        type="password"
                    />
                </div>

                <button className="RegisterPage-btn" type="submit">SIGN UP</button>
            </div>
            <div className="RegisterPage-to-register">
                <span className="RegisterPage-to-register-a">Have an account already?</span>
                <span
                    onClick={toggleForm}
                    className="RegisterPage-to-register-b"><b>Sign In here.</b></span>
            </div>

        </div>
    )
}


export default RegisterPage;
import "./UserLogContainer.css";
import LoginPage from "./Login/LoginPage";
import { useState } from "react";
import RegisterPage from "./Register/RegisterPage";

function UserLogContainer() {
    const [displayedLogin, setDisplayedLogin] = useState(true)

    function toggleForm() {
        setDisplayedLogin(!displayedLogin)
    }
    return (
        <div className="UserLogContainer">
            <RegisterPage
                formOn={displayedLogin}
                toggleForm={toggleForm}
            />
            <LoginPage
                formOn={displayedLogin}
                toggleForm={toggleForm}
            />

        </div>
    )
}

export default UserLogContainer;
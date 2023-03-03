import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoggedContext = createContext();

export function LoggedProvider(props) {
    const [logged, setLogged] = useState(false);
    const navigate = useNavigate();

    const logOut = () => {
        setLogged(false);
        navigate("/");
        window.localStorage.removeItem('isLoggedIn');
    }

    const logIn = () => {
        setLogged(true);
        window.localStorage.getItem("isLoggedIn") === null ? window.localStorage.setItem('isLoggedIn', true) : undefined
    }
    return (
        <LoggedContext.Provider value={{ logged, setLogged, logOut, logIn }}>
            {props.children}
        </LoggedContext.Provider>
    )
}

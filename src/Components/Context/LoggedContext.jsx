import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { UserContext } from "./UserContext";


export const LoggedContext = createContext();


export function LoggedProvider(props) {
    const [logged, setLogged] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const [cookies, setCookie, removeCookie] = useCookies(['client']);
    const navigate = useNavigate();



    const logOut = () => {
        removeCookie("client");
        removeCookie("isLGGD");
        setLogged(false);
        setUser({})
        navigate("/sneakers");

    }

    const logIn = () => {
        setLogged(true);
        setCookie('isLGGD', true, { path: '/', maxAge: 60 * 60 * 24 });

    }


    return (
        <LoggedContext.Provider value={{ logged, setLogged, logOut, logIn }}>
            {props.children}
        </LoggedContext.Provider>
    )
}






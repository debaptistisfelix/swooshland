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
        setLogged(false);
        navigate("/");

        setUser({})
        removeCookie("client");
        removeCookie("isLGGD");



    }

    const logIn = () => {
        setLogged(true);
        setCookie('isLGGD', true, { path: '/' });

    }


    return (
        <LoggedContext.Provider value={{ logged, setLogged, logOut, logIn }}>
            {props.children}
        </LoggedContext.Provider>
    )
}






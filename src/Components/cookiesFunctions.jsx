import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from "./Context/UserContext";
import { useContext } from "react";

function CookieFunctions() {
    const { user, setUser } = useContext(UserContext);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    let client = {
        name: "",
        surname: "",
        cart: [],
        id: "culo"
    }

    setLoggedInCookies = function (cookiesName, cookieData, data) {
        setCookie(cookiesName, cookieData, {
            path: '/',
            maxAge: 60 * 60 * 1,
        });
        setUser(data);
    }

    const checkIfAlreadyCookies = function () {
        !cookies.client && setCookie('client', client, {
            path: '/',
            maxAge: 60 * 60 * 1,

        });

        setUser(cookies.client)
    }

    const resetPostLogOut = function () {
        setCookie('client', client, {
            path: '/',
            maxAge: 60 * 60 * 1,

        });
        setUser(cookies.client)
    }

    return [checkIfAlreadyCookies, resetPostLogOut, setLoggedInCookies]
}

export default CookieFunctions;
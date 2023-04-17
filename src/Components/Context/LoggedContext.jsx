import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const LoggedContext = createContext();

export function LoggedProvider(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["client"]);
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState(null);
  const [codeUI, setCodeUI] = useState(null);

  useEffect(() => {
    cookies.client ? setToken(cookies.client.token) : setToken(null);
    cookies.client ? setCodeUI(cookies.client.codeUI) : setCodeUI(null);
  }, []);

  useEffect(() => {
    cookies.client ? setToken(cookies.client.token) : setToken(null);
    cookies.client ? setCodeUI(cookies.client.codeUI) : setCodeUI(null);
  }, [logged]);

  const logOut = () => {
    removeCookie("client");
    removeCookie("isLGGD");
    navigate("/sneakers");
    setToken(null);
    setCodeUI(null);
    setLogged(false);
  };

  const logIn = () => {
    setLogged(true);
    setCookie("isLGGD", true, {
      path: "/",
      maxAge: 60 * 60 * 24,
      Secure: true,
      httpOnly: true,
      sameSite: "strict",
    });
  };

  return (
    <LoggedContext.Provider
      value={{ logged, setLogged, logOut, logIn, token, codeUI }}
    >
      {props.children}
    </LoggedContext.Provider>
  );
}

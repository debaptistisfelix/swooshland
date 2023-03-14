import "../Cart/Cart.css";
import CartRecap from "./CartRecap";
import CartList from "./CartList";
import useLoadedState from "../Hooks/useLoadedState";
import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import Error404 from "../Error404/Error404";

function Cart() {
    /* const [loadedPage, loadPage] = useLoadedState(false); */
    const [loadedPage, setLoadedPage] = useState(false);
    const { user } = useContext(UserContext);
    function loadPage(delay) {
        setTimeout(() => {
            setLoadedPage(true);
        }, delay);
    }

    loadPage(600);
    return (
        <div className="Cart">
            {
                (!user.cart)
                    ? <Error404 />
                    : loadedPage === true
                        ? <div className="Cart-container">
                            <CartList />
                            <CartRecap />
                        </div>
                        : <div className="Cart-loader-box">
                            <div className="loader-container">
                                <div className="loader"></div>
                                <span className="loader-text">LOADING</span>
                            </div>
                        </div>
            }
        </div>
    )
}

export default Cart
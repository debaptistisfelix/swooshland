import "../Cart/Cart.css";
import CartRecap from "./CartRecap";
import CartList from "./CartList";
import useLoadedState from "../Hooks/useLoadedState";

function Cart() {
    const [loadedPage, setLoadedPage, loadPage] = useLoadedState(false);
    loadPage(600);
    return (
        <div className="Cart">
            {loadedPage === true
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
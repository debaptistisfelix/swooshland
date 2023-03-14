import "../OrderPage/OrderPage.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { OrderContext } from "../Context/OrderContext";
import Error404 from "../Error404/Error404";
import OrderShip from "./OrderShip";
import OrderRecap from "./OrderRecap";
import OrderPay from "./OrderPay";

function OrderPage() {
    const { user } = useContext(UserContext);
    const { displayedPage,
        setDisplayedPage,
        order, setOrder,
        chosenAddress,
        setChosenAddress,
        addAddressToOrder,
        backToOrderShip } = useContext(OrderContext)

    useEffect(() => {
        setDisplayedPage("OrderShip")
        setChosenAddress("");
    }, [])

    const [loadedPage, setLoadedPage] = useState(false)
    function loadPage(delay) {
        setTimeout(() => {
            setLoadedPage(true);
        }, delay);
    }
    loadPage(600);




    return (
        <div className="OrderPage">
            {
                (!user.cart)
                    ? <Error404 />
                    : loadedPage === true
                        ? <div className="OrderPage-container">
                            <div className="Order-progressbar">
                                <div
                                    className={`Order-progress-status ${displayedPage === "OrderShip" && "active-bar"}`}>
                                    {/* {displayedPage === "OrderShip" && "SHIPPING"} */}SHIPPING <i className="fa-solid fa-truck-fast"></i><i className="fa-solid fa-angle-right"></i></div>
                                <div
                                    className={`Order-progress-status ${displayedPage === "Recap" && "active-bar"}`}>
                                    {/* {displayedPage === "Recap" && "RECAP"} */}RECAP
                                    <i className="fa-solid fa-eye"></i><i className="fa-solid fa-angle-right"></i></div>
                                <div className={`Order-progress-status ${displayedPage === "Payment" && "active-bar"}`}>
                                    PAYMENT {/* {displayedPage === "Payment" && "PAYMENT"} */}
                                    <i className="fa-solid fa-credit-card"></i><i className="fa-solid fa-angle-right"></i></div>
                            </div>
                            <div className="Order-displayer">
                                {displayedPage === "OrderShip" && <OrderShip addAddressToOrder={addAddressToOrder} />}
                                {displayedPage === "Recap" && <OrderRecap />}
                                {displayedPage === "Payment" && <OrderPay />}
                            </div>
                        </div>
                        : <div className="OrderPage-loader-box">
                            <div className="loader-container">
                                <div className="loader"></div>
                                <span className="loader-text">LOADING</span>
                            </div>
                        </div>
            }
        </div>
    )
}

export default OrderPage;
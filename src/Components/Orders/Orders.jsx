import "../Orders/Orders.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import Error404 from "../Error404/Error404";
import OrdersList from "../Orders/OrdersList";

function Orders() {
    const { user } = useContext(UserContext);
    const [loadedPage, setLoadedPage] = useState(false)
    function loadPage(delay) {
        setTimeout(() => {
            setLoadedPage(true)
        }, delay);
    }
    loadPage(600)



    return (
        <div className="Orders">
            {
                (!user.cart)
                    ? <Error404 />
                    : loadedPage === true
                        ? <div className="Orders-container">
                            <OrdersList />
                        </div>
                        : <div className="Orders-loader-box">
                            <div className="loader-container">
                                <div className="loader"></div>
                                <span className="loader-text">LOADING</span>
                            </div>
                        </div>
            }
        </div>
    )
}

export default Orders;
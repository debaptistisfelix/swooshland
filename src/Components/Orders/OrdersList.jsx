import "../Orders/OrdersList.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import OrderBlock from "./OrderBlock";


function OrdersList() {
    const { user } = useContext(UserContext);
    const [ordersList, setOrdersList] = useState([]);



    useEffect(() => {
        setOrdersList(user.orders);
    }, [user])

    const ordersListed = ordersList.map((order, i) => {
        return <OrderBlock
            key={i}
            address={order.orderAddress}
            cart={order.orderCart}
            amount={order.toPay}
            date={order.date}
        />
    })


    return (
        <div className="OrdersList">
            <span className="OrdersList-title">YOUR ORDERS</span>
            {ordersList.length === 0
                ? <div className="OrdersList-empty-box">
                    <span className="OrdersList-empty">No Orders submitted yet.</span>
                </div>
                : <div className="OrdersList-list">
                    {ordersListed}
                </div>
            }
        </div>
    )
}

export default OrdersList;
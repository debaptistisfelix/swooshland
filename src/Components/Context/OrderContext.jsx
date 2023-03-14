import { useState, createContext, useContext } from "react";
import { UserContext } from "./UserContext";


export const OrderContext = createContext();

export function OrderProvider(props) {
    const [displayedPage, setDisplayedPage] = useState("OrderShip");
    const [order, setOrder] = useState({})
    const [chosenAddress, setChosenAddress] = useState("");
    const { user, calculateSubtotal } = useContext(UserContext);

    function addAddressToOrder(ad) {
        setOrder({ ...order, orderAddress: ad });
        setDisplayedPage("Recap");
    }

    function backToOrderShip() {
        setChosenAddress("");
        setDisplayedPage("OrderShip");
        window.scrollTo(0, 0);
    }

    function addCartToOrder(cart) {
        const subtotal = calculateSubtotal().subtotal;
        const shippingCost = calculateSubtotal().shippingCost;
        let total = (subtotal + shippingCost).toFixed(2);
        setOrder({ ...order, orderCart: cart, toPay: total, subtotal: subtotal, shippingCost: shippingCost });
        setDisplayedPage("Payment");
    }

    return (
        <OrderContext.Provider value={{ displayedPage, setDisplayedPage, order, setOrder, chosenAddress, setChosenAddress, addAddressToOrder, backToOrderShip, addCartToOrder }}>
            {props.children}
        </OrderContext.Provider>
    )
}
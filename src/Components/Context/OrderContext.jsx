import { useState, createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { useCookies } from "react-cookie";
import axios from "axios";



export const OrderContext = createContext();

export function OrderProvider(props) {
    const [displayedPage, setDisplayedPage] = useState("OrderShip");
    const [order, setOrder] = useState({})
    const [chosenAddress, setChosenAddress] = useState("");
    const { user, calculateSubtotal, setUser } = useContext(UserContext);





    function backToOrderShip() {
        setChosenAddress("");
        setDisplayedPage("OrderShip");
        window.scrollTo(0, 0);
    }



    function addCartToOrder(cart, ad) {
        const subtotal = calculateSubtotal().subtotal;
        const shippingCost = calculateSubtotal().shippingCost;
        let total = (subtotal + shippingCost).toFixed(2);
        const stripeArray = user.cart.map(item => {
            return { price: item.stripe.item, quantity: item.stripe.quantity }
        })
        setOrder({ ...order, orderAddress: ad, orderCart: cart, toPay: total, subtotal: subtotal, shippingCost: shippingCost, stripe: stripeArray });
        setDisplayedPage("Recap");

    }



    function addOrderToStorage(order) {
        let orderObject = JSON.stringify(order);
        localStorage.setItem("order", orderObject);
    }

    async function completeOrder(ord) {
        const id = user._id;
        await axios.patch(`http://localhost:3000/api/users/${id}`, {
            orders: [...user.orders, { ...ord, date: new Date().toLocaleDateString("en-es") }],
            cart: []
        })
        const updatedUser = await axios.get(`http://localhost:3000/api/users/${user._id}`)
        setUser(updatedUser.data);
        localStorage.removeItem("order");

    }

    return (
        <OrderContext.Provider value={{ displayedPage, setDisplayedPage, order, setOrder, chosenAddress, setChosenAddress, backToOrderShip, addCartToOrder, addOrderToStorage, completeOrder }}>
            {props.children}
        </OrderContext.Provider>
    )
}
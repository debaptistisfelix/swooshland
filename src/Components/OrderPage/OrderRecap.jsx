import "../OrderPage/OrderRecap.css";
import CartSummary from "./CartSummary";
import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import { UserContext } from "../Context/UserContext";
import ShippingRecap from "./ShippingRecap";
import PaymentRecap from "./PaymentRecap";

function OrderRecap() {
    const { backToOrderShip, addCartToOrder } = useContext(OrderContext);
    const { user, calculateSubtotal } = useContext(UserContext);

    let subtotal = (calculateSubtotal().subtotal);
    let shippingCost = (calculateSubtotal().shippingCost)
    let total = (subtotal + shippingCost).toFixed(2);

    console.log(total)


    return (
        <div className="OrderRecap">
            <div className="OrderRecap-container">
                <CartSummary />
                <div className="OrderRecap-ship-pay">
                    <ShippingRecap />
                    <PaymentRecap />
                </div>
            </div>
            <div className="OrderRecap-btns">
                <button className="OrderRecap-btn back-btn"
                    onClick={backToOrderShip}
                >BACK</button>
                <button className="OrderRecap-btn next-btn"
                    onClick={() => { addCartToOrder(user.cart) }}
                >NEXT</button>
            </div>
        </div >
    )
}

export default OrderRecap;
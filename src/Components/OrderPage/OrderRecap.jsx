import "../OrderPage/OrderRecap.css";
import CartSummary from "./CartSummary";
import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import { UserContext } from "../Context/UserContext";
import ShippingRecap from "./ShippingRecap";
import PaymentRecap from "./PaymentRecap";
import { loadStripe } from '@stripe/stripe-js';



let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51MlaBCGchiLw6IuQQ8xDwhwdrG0wDMR34bc2MExpwbAzzOFaR2VmdZLw1TmcXFgivYidIYxVHnl4nBK1crcp3IEW00a73CWL5k")
    }
    return stripePromise;
};


function OrderRecap() {
    const { backToOrderShip, order, addOrderToStorage } = useContext(OrderContext);
    /*   const { user, calculateSubtotal } = useContext(UserContext); */

    const checkoutOptions = {
        lineItems: [...order.stripe],
        mode: "payment",
        successUrl: "http://localhost:5173/order-completed",
        cancelUrl: "http://localhost:5173/order-failed"
    }

    const redirectToCheckout = async () => {
        console.log("redirectToCheckout")
        addOrderToStorage(order);
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error)
    }



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
                    onClick={() => {
                        redirectToCheckout();
                    }}
                >NEXT</button>
            </div>
        </div >
    )
}

export default OrderRecap;
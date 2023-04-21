import "../OrderPage/OrderPay.css";
import { useContext, useEffect } from "react";

import { UserContext } from "../Context/UserContext";

import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MlaBCGchiLw6IuQQ8xDwhwdrG0wDMR34bc2MExpwbAzzOFaR2VmdZLw1TmcXFgivYidIYxVHnl4nBK1crcp3IEW00a73CWL5k"
    );
  }
  return stripePromise;
};

function OrderPay() {
  const { order, addOrderToStorage } = useContext(UserContext);

  const checkoutOptions = {
    lineItems: [...order.stripe],
    mode: "payment",
    successUrl: `${window.location.origin}/order-completed`,
    cancelUrl: `${window.location.origin}/order-failed`,
  };

  const redirectToCheckout = async () => {
    console.log("redirectToCheckout");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
  };

  return (
    <div className="OrderPay">
      <button
        onClick={() => {
          /* redirectToCheckout(); */
          addOrderToStorage(order);
        }}
        className="OrderPay-btn"
      >
        PAY
      </button>
    </div>
  );
}

export default OrderPay;

import "../OrderPage/OrderRecap.css";
import CartSummary from "./CartSummary";
import { useContext } from "react";
import { OrderProcessContext } from "../Context/OrderProcessContext";
import ShippingRecap from "./ShippingRecap";
import PaymentRecap from "./PaymentRecap";
import { loadStripe } from "@stripe/stripe-js";
import { UserContext } from "../Context/UserContext";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MlaBCGchiLw6IuQQ8xDwhwdrG0wDMR34bc2MExpwbAzzOFaR2VmdZLw1TmcXFgivYidIYxVHnl4nBK1crcp3IEW00a73CWL5k"
    );
  }
  return stripePromise;
};

function OrderRecap() {
  const { backToOrderShip, prepareOrderFile } = useContext(OrderProcessContext);
  const { cart } = useContext(UserContext);

  let stripeArr = cart.map((el) => {
    return { price: el.stripe.item, quantity: el.stripe.quantity };
  });
  console.log(stripeArr);

  const checkoutOptions = {
    lineItems: [...stripeArr],
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
    <div className="OrderRecap">
      <div className="OrderRecap-container">
        <CartSummary data={cart} />
        <div className="OrderRecap-ship-pay">
          <ShippingRecap />
          <PaymentRecap />
        </div>
      </div>
      <div className="OrderRecap-btns">
        <button className="OrderRecap-btn back-btn" onClick={backToOrderShip}>
          BACK
        </button>
        <button
          className="OrderRecap-btn next-btn"
          onClick={() => {
            prepareOrderFile();
            redirectToCheckout();
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default OrderRecap;

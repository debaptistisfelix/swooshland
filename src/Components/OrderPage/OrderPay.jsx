import "../OrderPage/OrderPay.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { OrderContext } from "../Context/OrderContext";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
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
  const { order, addOrderToStorage } = useContext(OrderContext);

  const checkoutOptions = {
    lineItems: [...order.stripe],
    mode: "payment",
    successUrl: "http://localhost:5173/order-completed",
    cancelUrl: "http://localhost:5173/",
  };

  const redirectToCheckout = async () => {
    console.log("redirectToCheckout");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
  };

  /*   async function fetchUser() {
          const userData = cookies.client._id
          const res = await axios.get(`http://localhost:3000/api/users/${userData}`)
          const userInfos = res.data;
          setUser(userInfos)
      }
  
  
  
  
  
      async function completeOrder(ord) {
          const id = user._id;
          await axios.patch(`http://localhost:3000/api/users/${id}`, {
              orders: [...user.orders, { ...ord, date: new Date().toLocaleDateString("en-es") }],
              cart: []
          })
          const updatedUser = await axios.get(`http://localhost:3000/api/users/${user._id}`)
          setUser(updatedUser.data);
          navigate("/");
      } */

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

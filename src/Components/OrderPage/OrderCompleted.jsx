import "./OrderCompleted.css";
import { useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

function OrderCompleted() {
  const [cookies, removeCookie] = useCookies(["client"]);
  const token = cookies.client?.token;
  const headers = { Authorization: `Bearer ${token}` };
  const orderConfirmedRef = useRef(false);

  const confirmOrder = useCallback(async () => {
    let finishedOrder = cookies.ordCookie;
    const newOrder = await axios.post(
      "https://easy-ruby-goose-sari.cyclic.app/api/orders",
      finishedOrder,
      { headers }
    );
    await axios.delete(
      "https://easy-ruby-goose-sari.cyclic.app/api/cartItems",
      {
        headers,
      }
    );
    removeCookie("ordCookie");
    console.log("Order confirmed and cart emptied");
  }, [headers]);

  useEffect(() => {
    if (orderConfirmedRef.current) return;
    orderConfirmedRef.current = true;
    confirmOrder();
  }, []);

  return (
    <div className="OrderCompleted">
      <div className="OrderCompleted-card">
        <span className="OrderCompleted-title">ORDER COMPLETED</span>
        <div className="OrderCompleted-parags">
          <p>
            Your order was <b>completed succesfully!</b>
          </p>
          <p>You will receive an email as soon as we ship your order.</p>
          <p>
            You can check this order or the previous ones on your{" "}
            <b>User's Order Page</b> anytime you want.{" "}
          </p>
        </div>
        <div className="OrderCompleted-links">
          <Link to="/orders" className="OrderCompleted-link">
            Orders Page
          </Link>
          <Link to="/" className="OrderCompleted-link">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderCompleted;

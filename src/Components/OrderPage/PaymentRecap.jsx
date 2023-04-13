import "../OrderPage/PaymentRecap.css";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { CartContext } from "../Context/CartContext";

function PaymentRecap() {
  const { payRecap } = useContext(CartContext);

  return (
    <div className="PaymentRecap">
      <span className="PaymentRecap-title">TOTAL</span>
      <div className="PaymentRecap-costs">
        <div className="costs-box">
          <span className="cost-label">SUBTOTAL</span>
          <span>${payRecap.subtotal.toFixed(2)}</span>
        </div>
        <div className="costs-box">
          <span className="cost-label">SHIPPING</span>
          <span>{payRecap.shippingCost === 0 ? "FREE" : "$30"}</span>
        </div>
        <div className="costs-box costs-total-box">
          <span className="cost-label total-label">TOTAL</span>
          <span className="total-amount">
            ${(payRecap.subtotal + payRecap.shippingCost).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PaymentRecap;

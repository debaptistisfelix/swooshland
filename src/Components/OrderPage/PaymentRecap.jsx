import "../OrderPage/PaymentRecap.css";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";


function PaymentRecap() {
    const { user, calculateSubtotal } = useContext(UserContext);



    let subtotal = (calculateSubtotal().subtotal);
    let shippingCost = (calculateSubtotal().shippingCost)

    return (
        <div className="PaymentRecap">
            <span className="PaymentRecap-title">TOTAL</span>
            <div className="PaymentRecap-costs">
                <div className="costs-box">
                    <span className="cost-label">SUBTOTAL</span>
                    <span>${(subtotal).toFixed(2)}</span>
                </div>
                <div className="costs-box">
                    <span className="cost-label">SHIPPING</span>
                    <span>{shippingCost === 0 ? "FREE" : "$30"}
                    </span>
                </div>
                <div className="costs-box costs-total-box">
                    <span className="cost-label total-label">TOTAL</span>
                    <span className="total-amount">${(subtotal + shippingCost).toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default PaymentRecap;
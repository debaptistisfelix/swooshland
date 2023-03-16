import "./OrderFailed.css";
import { Link } from "react-router-dom";

function OrderFailed() {
    return (
        <div className="OrderFailed">
            <div className="OrderFailed-card">
                <span className="OrderFailed-title">ORDER ERROR</span>
                <div className="OrderFailed-parags">
                    <p>Your order was <b>NOT completed!</b></p>
                    <p>Something went wrong during the payment process.</p>
                    <p>Please wait a few minutes before trying again to complete the order.</p>
                </div>
                <div className="OrderFailed-links">

                    <Link to="/" className="OrderFailed-link">Continue Shopping</Link>
                </div>
            </div>
        </div>
    )
}

export default OrderFailed;
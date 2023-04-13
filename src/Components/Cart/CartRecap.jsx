import "../Cart/CartRecap.css";
import { Link } from "react-router-dom";

function CartRecap({ data, payRecap }) {
  return (
    <div className="CartRecap">
      <span className="CartRecap-title">OVERVIEW</span>
      <div className="CartRecap-sub-ship">
        <div className="CartRecap-subtotal">
          <span className="CartRecap-subtotal-label">SUBTOTAL</span>
          <span className="CartRecap-subtotal-sum">
            ${payRecap?.subtotal.toFixed(2)}
          </span>
        </div>
        <div className="CartRecap-ship">
          <div className="CartRecap-ship-visible">
            <span className="CartRecap-ship-label">Shipping Cost</span>
            <span className="CartRecap-ship-cost">
              ${payRecap?.shippingCost}
            </span>
          </div>
          <div className="CartRecap-ship-hidden">
            <span>
              Shipping costs are free if yu spend more then <b>$200.00</b>
            </span>
            {payRecap?.subtotal < 200 ? (
              <span>
                Only <b>${(200 - payRecap?.subtotal).toFixed(2)}</b> left to
                reach <b>FREE Shipping!</b>
              </span>
            ) : undefined}
          </div>
        </div>
      </div>
      <div className="CartRecap-total">
        <div className="CartRecap-total-box">
          <span className="CartRecap-total-label">TOTAL</span>
          <span className="CartRecap-total-sum">
            ${payRecap?.subtotal === 0 ? 0 : payRecap?.total.toFixed(2)}
          </span>
        </div>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          style={
            data && {
              pointerEvents: data.length === 0 ? "none" : undefined,
            }
          }
          to="/order"
          className="CartRecap-btn"
        >
          {" "}
          GO TO PAYMENT
        </Link>
      </div>
    </div>
  );
}

export default CartRecap;

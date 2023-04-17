import "./CartIcon.css";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "../Context/UserContext";

function CartIcon() {
  const { cartAnim } = useContext(AppContext);
  const { cart, showReservedNote } = useContext(UserContext);
  const [cookies] = useCookies(["client"]);

  let bagAnimation;
  cartAnim === true ? (bagAnimation = "updateCartCount") : undefined;

  return (
    <div className="CartIcon">
      <div className="CartIcon-handle"></div>
      <div className="CartIcon-box">
        <span className={`CartIcon-amount ${bagAnimation}`}>
          {!cookies.client ? "0" : cart && cart.length}
        </span>
      </div>
      {showReservedNote === true && (
        <div className="reserved-note">Item reserved for 10 minutes</div>
      )}
    </div>
  );
}

export default CartIcon;

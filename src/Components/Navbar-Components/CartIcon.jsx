import "./CartIcon.css";
import { AnimationContext } from "../Context/AnimationContext";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import { useCookies } from "react-cookie";

function CartIcon({ cart }) {
  const { cartAnim } = useContext(AnimationContext);
  const { data, showReservedNote } = useContext(CartContext);
  const [cookies] = useCookies(["client"]);

  let bagAnimation;
  cartAnim === true ? (bagAnimation = "updateCartCount") : undefined;

  return (
    <div className="CartIcon">
      <div className="CartIcon-handle"></div>
      <div className="CartIcon-box">
        <span className={`CartIcon-amount ${bagAnimation}`}>
          {!cookies.client ? "0" : data && data.length}
        </span>
      </div>
      {showReservedNote === true && (
        <div className="reserved-note">Item reserved for 10 minutes</div>
      )}
    </div>
  );
}

export default CartIcon;

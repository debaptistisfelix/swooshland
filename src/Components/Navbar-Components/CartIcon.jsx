import "./CartIcon.css";
import { AnimationContext } from "../Context/AnimationContext";
import { useContext } from "react";

function CartIcon({ cart }) {
    const { cartAnim } = useContext(AnimationContext);
    let bagAnimation;
    cartAnim === true ? bagAnimation = "updateCartCount" : undefined;
    return (
        <div className="CartIcon">
            <div className="CartIcon-handle"></div>
            <div className="CartIcon-box">
                <span className={`CartIcon-amount ${bagAnimation}`}>{!cart ? "0" : cart.length}</span>

            </div>
        </div>
    )
}

export default CartIcon
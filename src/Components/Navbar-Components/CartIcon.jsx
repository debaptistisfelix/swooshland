import "./CartIcon.css";

function CartIcon({ cart }) {
    return (
        <div className="CartIcon">
            <div className="CartIcon-handle"></div>
            <div className="CartIcon-box">
                {!cart ? "0" : cart.length}

            </div>
        </div>
    )
}

export default CartIcon
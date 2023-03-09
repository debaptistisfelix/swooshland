import "../Cart/CartRecap.css";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { useEffect, useContext, useState } from "react";
import useCartState from "../Hooks/useCartState";


function CartRecap() {
    const { user } = useContext(UserContext);

    const [cart, setCart] = useCartState([])
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(0)

    useEffect(() => {
        setCart(user.cart);
    }, [])

    useEffect(() => {
        setCart(user.cart);
    }, [user])


    useEffect(() => {
        let cartSubtotalArr = cart.map(item => {
            return item.price
        })
        let subtotalCount = cartSubtotalArr.reduce((a, b) => {
            return a + b;
        }, 0);
        setSubtotal(subtotalCount);
        subtotal < 200 ? setShippingCost(30) : setShippingCost(0);
        setTotal((subtotal + shippingCost).toFixed(2));
    }, [cart])







    return (
        <div className="CartRecap">
            <span className="CartRecap-title">OVERVIEW</span>
            <div className="CartRecap-sub-ship">
                <div className="CartRecap-subtotal">
                    <span className="CartRecap-subtotal-label">SUBTOTAL</span>
                    <span className="CartRecap-subtotal-sum">${subtotal.toFixed(2)}</span>
                </div>
                <div className="CartRecap-ship">
                    <div className="CartRecap-ship-visible">
                        <span className="CartRecap-ship-label">Shipping Cost</span>
                        <span className="CartRecap-ship-cost">
                            {subtotal >= 200
                                ? "FREE"
                                : "$30"}
                        </span>
                    </div>
                    <div className="CartRecap-ship-hidden">
                        <span>Shipping costs are free if yu spend more then <b>$200.00</b></span>
                        {subtotal < 200
                            ? <span>Only <b>${(200 - subtotal).toFixed(2)}</b> left to reach <b>FREE Shipping!</b></span>
                            : undefined}
                    </div>
                </div>
            </div>
            <div className="CartRecap-total">
                <div className="CartRecap-total-box">
                    <span className="CartRecap-total-label">TOTAL</span>
                    <span className="CartRecap-total-sum">
                        {subtotal === 0 ? "" : `$${total}`}
                    </span>
                </div>
                <Link

                    className="CartRecap-btn" > GO TO PAYMENT</Link>
            </div>
        </div >
    )
}

export default CartRecap;
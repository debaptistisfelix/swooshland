import "../OrderPage/CartSummary.css";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import ItemBlock from "./ItemBlock";

function CartSummary() {
    const { user } = useContext(UserContext)
    const cart = user.cart;

    let list = cart.map(item => {
        return <ItemBlock
            key={item._id}
            id={item._id}
            item={item} />
    })

    return (
        <div className="CartSummary">
            <span className="CartSummary-title">YOUR CART</span>
            <div className="CartSummary-list">
                {list}
            </div>
        </div>
    )
}

export default CartSummary;
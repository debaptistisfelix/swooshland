import "../Cart/CartList.css"
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import CartListBlock from "./CartListBlock";
import { UserContext } from "../Context/UserContext";
import useCartState from "../Hooks/useCartState";


function CartList() {
    const { user } = useContext(UserContext);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(user.cart);
    }, [user])




    async function removeItem(id) {
        const filteredItems = cart.filter(item => {
            return item.id !== id;
        })
        await axios.patch(`http://localhost:3000/api/users/${user._id}`, {
            cart: [...filteredItems]
        })
    }




    const cartList = cart.map(item => {
        return <CartListBlock
            user={user}
            key={item.id}
            item={item}
            removeItem={removeItem}
        />
    })

    /*  let cartList;
     cart.length > 1
         ? cartList = cart.map(item => {
             return <CartListBlock
                 user={user}
                 key={item._id}
                 item={item}
                 removeItem={removeItem}
             />
         })
         : cartList = <CartListBlock
             user={user}
             key={cart[0]._id}
             item={cart[0]}
             removeItem={removeItem}
         /> */



    return (
        <div className="CartList">
            <span className="CartList-title">YOUR CART</span>

            {cart.length === 0
                ? <div className="CartList-empty-box">
                    <span className="CartList-empty">No Items in your Cart yet.</span>
                </div>
                : <div className="CartList-list">
                    {cartList}
                </div>
            }



        </div>
    )
}
export default CartList;
import "./CartModalNav.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { useContext, useEffect, useState } from "react";
import useCartState from "../Hooks/useCartState";
import useLoadedState from "../Hooks/useLoadedState";


function CartModalNav({ openedCartModal }) {
    const { user } = useContext(UserContext);

    const [cart, setCart] = useCartState([]);
    const [cartList, setCartList] = useState([]);




    /* useEffect(() => {
        setCart(user.cart);
        let list = user.cart.map(item => {
            return { name: item.name, model: item.model }
        })
        setCartList(list);
    }, [user]) */



    /*  useEffect(() => {
         let list = cart.map(item => {
             return { name: item.name, model: item.model }
         })
         setCartList(list);
     }, [cart]) */




    const navigate = useNavigate();
    function moveToCart() {
        navigate("/cart");
        window.scrollTo(0, 0);
    }

    let displayedList = cartList.map(item => {
        return <div key={item._id} className="CartModalNav-itembox">
            <span className="item-box-qty"><b>1x</b></span>
            <span className="item-box-name">{item.model} - {item.name}</span>
        </div>
    })



    let CartStatus;
    openedCartModal === true ? CartStatus = "showCartModal" : undefined;
    return (
        <div className={`CartModalNav ${CartStatus}`}>
            <div className="CartModalNav-titlebox">
                <span className="CartModalNav-title"><b>Swoosh</b>Cart <i className="fa-solid fa-cart-shopping"></i></span>
            </div>
            <div className="CartModalNav-cartbox">
                {displayedList}
            </div>
            <span className="CartModalNav-total">TOTAL: <b>$269.90</b></span>
            <button className="CartModalNav-button"
                onClick={moveToCart}
            >VIEW CART</button>
        </div>
    )
}

export default CartModalNav;
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
    const [total, setTotal] = useState(0)




    useEffect(() => {
        if (user._id) {

            setCart(user.cart);
            let list = user.cart.map(item => {
                return { name: item.name, model: item.model }
            })
            setCartList(list);
        }
        else if (!user._id) {
            console.log("user not logged in")
        }

        if (user._id) {
            let cartTotalArr = user.cart.map(item => {
                return item.price
            })
            let TotalCount = cartTotalArr.reduce((a, b) => {
                return a + b;
            }, 0);
            setTotal(TotalCount);
        }




    }, [user])



    /* useEffect(() => {
        if (user !== []) {
            let list = cart.map(item => {
                return { name: item.name, model: item.model }
            })
            setCartList(list);
        }
    }, [cart])  */




    const navigate = useNavigate();
    function moveToCart() {
        navigate("/cart");
        window.scrollTo(0, 0);
    }

    /*  if (user._id) {
         let displayedList = cartList.map(item => {
             return <div key={item._id} className="CartModalNav-itembox">
                 <span className="item-box-qty"><b>1x</b></span>
                 <span className="item-box-name">{item.model} - {item.name}</span>
             </div>
         })
     } */




    let CartStatus;
    openedCartModal === true ? CartStatus = "showCartModal" : undefined;
    return (
        <div className={`CartModalNav ${CartStatus}`}>
            <div className="CartModalNav-titlebox">
                <span className="CartModalNav-title"><b>Swoosh</b>Cart <i className="fa-solid fa-cart-shopping"></i></span>
            </div>
            <div className="CartModalNav-cartbox">
                {
                    (!user._id)
                        ? <span className="empty-cart-model">Empty cart</span>
                        : cartList.map(item => {
                            return <div key={item._id} className="CartModalNav-itembox">
                                <span className="item-box-qty"><i className="fa-solid fa-heart"></i></span>
                                <span className="item-box-name"><b>{item.model}</b> - {item.name}</span>
                            </div>
                        })
                }
            </div>
            <span className="CartModalNav-total">TOTAL: <b>${total.toFixed(2)}</b></span>
            <button className="CartModalNav-button"
                onClick={moveToCart}
            >VIEW CART</button>
        </div>
    )
}

export default CartModalNav;
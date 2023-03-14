import "../Cart/CartList.css"
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import CartListBlock from "./CartListBlock";
import { UserContext } from "../Context/UserContext";
import useCartState from "../Hooks/useCartState";
import { useCookies } from "react-cookie";


function CartList() {
    const { user, setUser } = useContext(UserContext);

    const [cookies] = useCookies(['client']);

    const [cart, setCart] = useState([]);

    async function fetchUser() {
        const userData = cookies.client._id
        const res = await axios.get(`http://localhost:3000/api/users/${userData}`)
        const userInfos = res.data;
        setUser(userInfos)
    }

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
        fetchUser();
    }

    /*   async function updateSizeChoice(id, currSize) {
          const ItemToUpdate = cart.filter(item => {
              return item.id === id;
          })
          const filteredItems = cart.filter(item => {
              return item.id !== id;
          })
  
          await axios.patch(`http://localhost:3000/api/users/${user._id}`, {
              cart: [...filteredItems, { ...ItemToUpdate, chosenSize: currSize }]
          })
          fetchUser();
      } */



    let cartList;

    if (user.cart) {
        cartList = cart.map(item => {
            return <CartListBlock
                user={user}
                key={item.id}
                item={item}
                removeItem={removeItem}

            />
        })
    }





    return (
        <div className="CartList">
            <span className="CartList-title">YOUR CART</span>

            {cart?.length === 0
                ? <div className="CartList-empty-box">
                    <span className="CartList-empty">No Items in your Cart yet.</span>
                </div>
                : <div className="CartList-list">
                    {/* {(!user.cart) ? undefined : cartList} */}
                    {cartList}
                </div>
            }



        </div>
    )
}
export default CartList;
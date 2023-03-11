import "../WishlistPage/WishList.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import CartListBlock from "../Cart/CartListBlock"
import WishlistBlock from "../WishlistPage/WishlistBlock";
import { UserContext } from "../Context/UserContext";
import { useCookies } from "react-cookie";
import { AnimationContext } from "../Context/AnimationContext";

function WishList() {
    const { user, setUser } = useContext(UserContext);
    const { cartAnim, setCartAnim } = useContext(AnimationContext);

    const [cookies] = useCookies(['client']);

    const [wishlist, setWishlist] = useState([]);

    async function fetchUser() {
        const userData = cookies.client._id
        const res = await axios.get(`http://localhost:3000/api/users/${userData}`)
        const userInfos = res.data;
        setUser(userInfos)
    }

    /*  useEffect(() => {
         setWishlist(user.wishlist);
     }, []) */

    useEffect(() => {
        setWishlist(user.wishlist);
    }, [user])

    async function removeItem(id) {
        const filteredItems = wishlist.filter(item => {
            return item.id !== id;
        })
        await axios.patch(`http://localhost:3000/api/users/${user._id}`, {
            wishlist: [...filteredItems]
        })
        fetchUser();
    }

    async function moveToCart(id, item) {
        setCartAnim(true);
        setTimeout(() => {
            setCartAnim(false)
        }, 1500);
        const itemToAdd = { ...item }
        const response = await axios.patch(`http://localhost:3000/api/users/${user._id}`, {
            cart: [...user.cart, { ...itemToAdd }]
        });
        const updatedUser = await axios.get(`http://localhost:3000/api/users/${user._id}`)
        setUser(updatedUser.data);
        removeItem(id);
    }



    const wishListed = wishlist.map(item => {
        return <WishlistBlock
            user={user}
            key={item.id}
            item={item}
            removeItem={removeItem}
            moveToCart={moveToCart}
        />
    })

    return (
        <div className="WishList">
            <span className="WishList-title">YOUR WISHLIST</span>
            {wishlist.length === 0
                ? <div className="WishList-empty-box">
                    <span className="WishList-empty">No Items in your Wishlist yet.</span>
                </div>
                : <div className="WishList-list">
                    {wishListed}
                </div>
            }
        </div>
    )
}

export default WishList;
import "../WishlistPage/WishRecap.css";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { useEffect, useContext, useState } from "react";

function WishRecap() {
    const { user } = useContext(UserContext);

    const [wishlist, setWishlist] = useState([])
    const [subtotal, setSubtotal] = useState(0);

    function calculateSubtotal() {
        let wishSubtotalArr = user.wishlist.map(item => {
            return item.price
        })
        let subtotalCount = wishSubtotalArr.reduce((a, b) => {
            return a + b;
        }, 0);
        setSubtotal(subtotalCount);
    }

    useEffect(() => {
        setWishlist(user.wishlist);
        calculateSubtotal();
    }, [])


    useEffect(() => {
        setWishlist(user.wishlist);
        calculateSubtotal();
    }, [user])


    return (
        <div className="WishRecap">
            <span className="WishRecap-title">OVERVIEW</span>
            <div className="WishRecap-subtotal">
                <span className="WishRecap-subtotal-label">SUBTOTAL</span>
                <span className="WishRecap-subtotal-sum">${subtotal.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default WishRecap;
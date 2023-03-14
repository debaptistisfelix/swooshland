import "../WishlistPage/WishlistPage.css";
import useLoadedState from "../Hooks/useLoadedState";
import WishList from "./wishList";
import WishRecap from "./WishRecap";
import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import Error404 from "../Error404/Error404";

function WishlistPage() {
    const { user } = useContext(UserContext)
    const [loadedPage, setLoadedPage] = useState(false)
    function loadPage(delay) {
        setTimeout(() => {
            setLoadedPage(true)
        }, delay);
    }
    loadPage(600);
    return (
        <div className="WishlistPage">

            {
                (!user.cart)
                    ? <Error404 />
                    : loadedPage === true
                        ? <div className="Wish-container">
                            <WishList />
                            <WishRecap />
                        </div>
                        : <div className="Wish-loader-box">
                            <div className="loader-container">
                                <div className="loader"></div>
                                <span className="loader-text">LOADING</span>
                            </div>
                        </div>
            }



        </div>
    )
}

export default WishlistPage;
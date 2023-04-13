import "../WishlistPage/WishlistPage.css";
import WishList from "./wishList";
import WishRecap from "./WishRecap";
import { useCookies } from "react-cookie";
import { useContext, useState } from "react";
import useFetchWish from "../Hooks/useFetchWish";
import axios from "axios";
import Error404 from "../Error404/Error404";
import { WishContext } from "../Context/WishContext";
import { AnimationContext } from "../Context/AnimationContext";
import { CartContext } from "../Context/CartContext";

function WishlistPage() {
  const [cookies] = useCookies(["client"]);
  const token = cookies.client?.token;
  const headers = { Authorization: `Bearer ${token}` };
  const { wishes, error, isLoading, setUpdateWish, updateWish, payRecap } =
    useContext(WishContext);
  const { cartAnim, setCartAnim } = useContext(AnimationContext);
  const { setUpdateState, updateState } = useContext(CartContext);

  const [loadedPage, setLoadedPage] = useState(false);

  const removeWishItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/wishlist/${id}`, {
        headers,
      });
      setUpdateWish(!updateWish);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const moveToCart = async (id, item) => {
    setCartAnim(true);
    setTimeout(() => {
      setCartAnim(false);
    }, 1500);
    const itemToAdd = { ...item };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/cartItems",
        itemToAdd,
        {
          headers,
        }
      );
      setUpdateState(!updateState);
    } catch (err) {
      console.log(error);
    }

    removeWishItem(id);
  };

  function loadPage(delay) {
    setTimeout(() => {
      setLoadedPage(true);
    }, delay);
  }
  loadPage(600);
  return (
    <div className="WishlistPage">
      {!cookies.client ? (
        <Error404 />
      ) : loadedPage === true ? (
        <div className="Wish-container">
          <WishList
            wishes={wishes}
            error={error}
            isLoading={isLoading}
            removeWishItem={removeWishItem}
            moveToCart={moveToCart}
          />
          <WishRecap payRecap={payRecap} />
        </div>
      ) : (
        <div className="Wish-loader-box">
          <div className="loader-container">
            <div className="loader"></div>
            <span className="loader-text">LOADING</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default WishlistPage;

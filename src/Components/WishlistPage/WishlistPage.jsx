import "../WishlistPage/WishlistPage.css";
import WishList from "./WishList";
import WishRecap from "./WishRecap";
import { useCookies } from "react-cookie";
import { useContext, useState } from "react";
import useFetchWish from "../Hooks/useFetchWish";
import axios from "axios";
import Error404 from "../Error404/Error404";
import { UserContext } from "../Context/UserContext";
import { AppContext } from "../Context/AppContext";

function WishlistPage() {
  const [cookies] = useCookies(["client"]);
  const token = cookies.client?.token;
  const headers = { Authorization: `Bearer ${token}` };
  const {
    wishes,
    wishesError,
    wishesIsLoading,
    setUpdateWish,
    updateWish,
    wishesPayRecap,
    updateCartState,
    setUpdateCartState,
  } = useContext(UserContext);
  const { cartAnim, setCartAnim } = useContext(AppContext);
  const { setUpdateState, updateState } = useContext(UserContext);

  const [loadedPage, setLoadedPage] = useState(false);

  const removeWishItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/wishlist/${id}`, {
        headers,
      });
      setUpdateWish(!updateWish);
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
      setUpdateCartState(!updateCartState);
    } catch (err) {
      console.log(err);
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
            error={wishesError}
            isLoading={wishesIsLoading}
            removeWishItem={removeWishItem}
            moveToCart={moveToCart}
          />
          <WishRecap payRecap={wishesPayRecap} />
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

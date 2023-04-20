import "../Cart/Cart.css";
import CartRecap from "./CartRecap";
import CartList from "./CartList";
import { useContext, useState } from "react";
import Error404 from "../Error404/Error404";
import { useCookies } from "react-cookie";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

function Cart() {
  const [cookies] = useCookies(["client"]);
  const token = cookies?.client.token;
  const headers = { Authorization: `Bearer ${token}` };

  const {
    cart,
    cartIsLoading,
    cartError,
    setUpdateCartState,
    cartPayRecap,
    updateCartState,
  } = useContext(UserContext);

  const removeCartItem = async (id) => {
    try {
      await axios.delete(
        `
        http://localhost:8000/api/cartItems/${id}`,
        {
          headers,
        }
      );
      setUpdateCartState(!updateCartState);
    } catch (err) {
      console.log(err);
    }
  };

  const [loadedPage, setLoadedPage] = useState(false);

  function loadPage(delay) {
    setTimeout(() => {
      setLoadedPage(true);
    }, delay);
  }

  loadPage(600);

  return (
    <div className="Cart">
      {!cookies.client ? (
        <Error404 />
      ) : loadedPage === true ? (
        <div className="Cart-container">
          <CartList
            data={cart}
            error={cartError}
            isLoading={cartIsLoading}
            removeCartItem={removeCartItem}
          />
          <CartRecap data={cart} payRecap={cartPayRecap} />
        </div>
      ) : (
        <div className="Cart-loader-box">
          <div className="loader-container">
            <div className="loader"></div>
            <span className="loader-text">LOADING</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

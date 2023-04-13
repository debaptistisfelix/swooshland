import "../Cart/Cart.css";
import CartRecap from "./CartRecap";
import CartList from "./CartList";
import { useContext, useState } from "react";
import Error404 from "../Error404/Error404";
import { useCookies } from "react-cookie";
import axios from "axios";
import { CartContext } from "../Context/CartContext";
import useFetchCart from "../Hooks/useFetchCart";

function Cart() {
  const [cookies] = useCookies(["client"]);
  const token = cookies?.client.token;
  const headers = { Authorization: `Bearer ${token}` };

  const { data, isLoading, error, setUpdateState, payRecap, updateState } =
    useContext(CartContext);

  const removeCartItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/cartItems/${id}`, {
        headers,
      });
      setUpdateState(!updateState);
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
            data={data}
            error={error}
            isLoading={isLoading}
            removeCartItem={removeCartItem}
          />
          <CartRecap data={data} payRecap={payRecap} />
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

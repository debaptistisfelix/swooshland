import { useState, createContext, useContext } from "react";
import axios from "axios";
import { AddressContext } from "./AddressContext";
import { CartContext } from "./CartContext";
import { useCookies } from "react-cookie";

export const OrderProcessContext = createContext();

export function OrderProcessProvider(props) {
  const [cookies, setCookie] = useCookies(["client"]);
  const token = cookies.client?.token;
  const { setUpdateState } = useContext(AddressContext);
  const { payRecap } = useContext(CartContext);
  const [displayedPage, setDisplayedPage] = useState("OrderShip");
  const [chosenAddress, setChosenAddress] = useState(null);
  const [userCart, setUserCart] = useState(null);
  const [userCartIds, setUserCartIds] = useState(null);

  const addCartToOrder = async () => {
    if (token) {
      let headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get("http://localhost:8000/api/cartItems", {
        headers,
      });
      let cartItems = response.data.data.cartItems;
      let idsArray = cartItems.map((item) => {
        return item.itemId;
      });
      setUserCartIds(idsArray);
      setUserCart(cartItems);
      setDisplayedPage("Recap");
    }
  };

  function selectAddress(event) {
    const selectedAd = event.target.value;
    setChosenAddress(JSON.parse(selectedAd));
  }

  async function addAddress(newAddress) {
    let headers = { Authorization: `Bearer ${token}` };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/addresses",
        newAddress,
        {
          headers,
        }
      );
      setUpdateState(true);
    } catch (err) {
      console.log(err);
    }
  }

  const backToOrderShip = () => {
    setChosenAddress("");
    setUserCart(null);
    setDisplayedPage("OrderShip");
  };

  const prepareOrderFile = () => {
    let orderObj = {
      amount: payRecap.total,
      shippingCost: payRecap.shippingCost,
      subtotal: payRecap.subtotal,
      address: chosenAddress,
      items: userCart,
      itemsIds: userCartIds,
    };
    setCookie("ordCookie", orderObj, { path: "/" });
  };

  return (
    <OrderProcessContext.Provider
      value={{
        displayedPage,
        setDisplayedPage,
        chosenAddress,
        setChosenAddress,
        addCartToOrder,
        setUserCart,
        selectAddress,
        addAddress,
        backToOrderShip,
        prepareOrderFile,
      }}
    >
      {props.children}
    </OrderProcessContext.Provider>
  );
}

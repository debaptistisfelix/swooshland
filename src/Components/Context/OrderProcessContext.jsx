import { useState, createContext, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { useCookies } from "react-cookie";

export const OrderProcessContext = createContext();

export function OrderProcessProvider(props) {
  const [cookies, setCookie] = useCookies(["client"]);
  const token = cookies.client?.token;
  const { setUpdateAddressState } = useContext(UserContext);
  const { cartPayRecap } = useContext(UserContext);
  const [displayedPage, setDisplayedPage] = useState("OrderShip");
  const [chosenAddress, setChosenAddress] = useState(null);
  const [userCart, setUserCart] = useState(null);
  const [userCartIds, setUserCartIds] = useState(null);

  const addCartToOrder = async () => {
    if (token) {
      let headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(
        "https://easy-ruby-goose-sari.cyclic.app/api/cartItems",
        {
          headers,
        }
      );
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
      setUpdateAddressState(true);
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
      amount: cartPayRecap.total,
      shippingCost: cartPayRecap.shippingCost,
      subtotal: cartPayRecap.subtotal,
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

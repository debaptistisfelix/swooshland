import { createContext } from "react";
import useFetchOrders from "../Hooks/useFetchOrders";
import useFetchWish from "../Hooks/useFetchWish";
import useFetchAddress from "../Hooks/useFetchAddress";
import useFetchCart from "../Hooks/useFetchCart";

export const UserContext = createContext();

export function UserProvider(props) {
  // ADDRESS CONTEXT
  const { address, addressIsLoading, addressError, setUpdateAddressState } =
    useFetchAddress("http://localhost:8000/api/addresses");

  // CART CONTEXT
  const {
    cart,
    cartError,
    cartIsLoading,
    setUpdateCartState,
    cartPayRecap,
    updateCartState,
    showReservedNote,
    setShowReservedNote,
  } = useFetchCart("http://localhost:8000/api/cartItems");
  // WISHLIST CONTEXT
  const {
    wishes,
    wishesError,
    wishesIsLoading,
    setUpdateWish,
    updateWish,
    wishesPayRecap,
  } = useFetchWish("http://localhost:8000/api/wishlist");

  //   ORDER CONTEXT
  const {
    orders,
    ordersError,
    ordersIsLoading,
    setUpdateOrderState,
    updateOrderState,
  } = useFetchOrders("http://localhost:8000/api/orders");

  return (
    <UserContext.Provider
      value={{
        orders,
        ordersError,
        ordersIsLoading,
        setUpdateOrderState,
        updateOrderState,
        wishes,
        wishesError,
        wishesIsLoading,
        setUpdateWish,
        updateWish,
        wishesPayRecap,
        address,
        addressIsLoading,
        addressError,
        setUpdateAddressState,
        cart,
        cartError,
        cartIsLoading,
        setUpdateCartState,
        cartPayRecap,
        updateCartState,
        showReservedNote,
        setShowReservedNote,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

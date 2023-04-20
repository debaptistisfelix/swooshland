import { createContext, useState } from "react";
import useFetchCart from "../Hooks/useFetchCart";

export const CartContext = createContext();

export function CartProvider(props) {
  const {
    data,
    error,
    isLoading,
    setUpdateState,
    payRecap,
    updateState,
    showReservedNote,
    setShowReservedNote,
  } = useFetchCart("http://localhost:8000/api/cartItems");

  return (
    <CartContext.Provider
      value={{
        data,
        error,
        isLoading,
        setUpdateState,
        payRecap,
        updateState,
        showReservedNote,
        setShowReservedNote,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

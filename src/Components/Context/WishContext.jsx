import { createContext, useState } from "react";
import useFetchWish from "../Hooks/useFetchWish";

export const WishContext = createContext();

export function WishProvider(props) {
  const { wishes, error, isLoading, setUpdateWish, updateWish, payRecap } =
    useFetchWish("http://localhost:8000/api/wishlist");

  return (
    <WishContext.Provider
      value={{
        wishes,
        error,
        isLoading,
        setUpdateWish,
        updateWish,
        payRecap,
      }}
    >
      {props.children}
    </WishContext.Provider>
  );
}

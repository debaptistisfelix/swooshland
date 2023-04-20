import { useState, createContext } from "react";
import useFetchOrders from "../Hooks/useFetchOrders";

export const OrderContext = createContext();

export function OrderProvider(props) {
  const { data, error, isLoading, setUpdateOrderState, updateOrderState } =
    useFetchOrders("http://localhost:8000/api/orders");

  return (
    <OrderContext.Provider
      value={{ data, error, isLoading, setUpdateOrderState, updateOrderState }}
    >
      {props.children}
    </OrderContext.Provider>
  );
}

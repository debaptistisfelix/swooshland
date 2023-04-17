import { useState, useCallback, useEffect, useContext } from "react";

import axios from "axios";
import { LoggedContext } from "../Context/LoggedContext";

const useFetchOrders = (url, dataName) => {
  let { token } = useContext(LoggedContext);
  const [orders, setOrders] = useState(null);
  const [ordersIsLoading, setOrdersIsLoading] = useState(true);
  const [ordersError, setOrdersError] = useState(null);
  const [updateOrderState, setUpdateOrderState] = useState(false);

  const fetchData = useCallback(async () => {
    const headers = { Authorization: `Bearer ${token}` };
    const res = await axios.get(url, {
      headers,
    });
    setOrders(res.data.data.orders);
    setOrdersError(null);
    setOrdersIsLoading(false);
    setUpdateOrderState(!updateOrderState);
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchData().catch((err) => {
        setOrdersError(err.message);
        setOrdersIsLoading(false);
        setOrders(null);
        console.log(err.message);
      });
    }
  }, [fetchData, updateOrderState, token]);

  return {
    orders,
    ordersError,
    ordersIsLoading,
    setUpdateOrderState,
    updateOrderState,
  };
};

export default useFetchOrders;

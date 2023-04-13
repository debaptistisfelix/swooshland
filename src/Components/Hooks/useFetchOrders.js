import { useState, useCallback, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { LoggedContext } from "../Context/LoggedContext";

const useFetchOrders = (url, dataName) => {
  let { token } = useContext(LoggedContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateOrderState, setUpdateOrderState] = useState(false);

  const fetchData = useCallback(async () => {
    const headers = { Authorization: `Bearer ${token}` };
    const res = await axios.get(url, {
      headers,
    });
    setData(res.data.data.orders);
    setError(null);
    setIsLoading(false);
    setUpdateOrderState(!updateOrderState);
  }, [token]);

  useEffect(() => {
    if (token !== undefined) {
      fetchData().catch((err) => {
        setError(err.message);
        setIsLoading(false);
        setData(null);
        console.log(err.message);
      });
    }
  }, [fetchData, updateOrderState, token]);

  return { data, error, isLoading, setUpdateOrderState, updateOrderState };
};

export default useFetchOrders;

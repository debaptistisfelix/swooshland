import { useState, useCallback, useEffect, useContext } from "react";
import axios from "axios";
import { LoggedContext } from "../Context/LoggedContext";

const useFetchCart = (url) => {
  let { token } = useContext(LoggedContext);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateState, setUpdateState] = useState(false);
  const [payRecap, setPayRecap] = useState(null);
  const [showReservedNote, setShowReservedNote] = useState(false);

  const calculateSubtotal = useCallback(() => {
    if (data) {
      let priceArr = data.map((item) => {
        return item.price;
      });
      const subtotalToPay = priceArr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      let shippingCost;
      subtotalToPay < 200 ? (shippingCost = 30) : (shippingCost = 0);
      const total = subtotalToPay + shippingCost;
      const payRecapObj = {
        subtotal: subtotalToPay,
        shippingCost: shippingCost,
        total: total,
      };
      setPayRecap(payRecapObj);
    }
  }, [data, updateState]);

  const fetchData = useCallback(async () => {
    let headers = { Authorization: `Bearer ${token}` };
    const res = await axios.get(url, {
      headers,
    });
    setData(res.data.data.cartItems);
    setError(null);
    setIsLoading(false);
    setUpdateState(!updateState);
    console.log("REQUESTED FETCH CART ITEMS");
  }, [token]);

  useEffect(() => {
    fetchData().catch((err) => {
      setError(err.message);
      setIsLoading(false);
      setData(null);
      console.log(err);
    });
  }, [fetchData, updateState, token]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData().catch((err) => {
        setError(err.message);
        setIsLoading(false);
        setData(null);
        console.log(err);
      });
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, [token]);

  useEffect(() => {
    calculateSubtotal();
  }, [data, updateState]);

  return {
    data,
    error,
    isLoading,
    setUpdateState,
    updateState,
    payRecap,
    showReservedNote,
    setShowReservedNote,
  };
};

export default useFetchCart;

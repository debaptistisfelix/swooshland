import { useState, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import { LoggedContext } from "../Context/LoggedContext";

const useFetchWish = (url) => {
  let { token } = useContext(LoggedContext);
  const [wishes, setWishes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateWish, setUpdateWish] = useState(false);
  const [payRecap, setPayRecap] = useState(null);

  const calculateSubtotal = useCallback(() => {
    if (wishes) {
      let priceArr = wishes.map((item) => {
        return item.price;
      });
      let subtotalToPay = priceArr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      let shippingCost;
      subtotalToPay < 200 ? (shippingCost = 30) : (shippingCost = 0);
      let total = subtotalToPay + shippingCost;
      let payRecapObj = {
        subtotal: subtotalToPay,
        shippingCost: shippingCost,
        total: total,
      };
      setPayRecap(payRecapObj);
    }
  }, [wishes, updateWish]);

  const fetchWishes = useCallback(async () => {
    let headers = { Authorization: `Bearer ${token}` };
    const res = await axios.get(url, { headers });
    setWishes(res.data.data.wishlistItems);
    setError(null);
    setIsLoading(false);
    setUpdateWish(!updateWish);
  }, [token]);

  useEffect(() => {
    fetchWishes().catch((err) => {
      setError(err.message);
      setIsLoading(false);
      setWishes(null);
      console.log(err);
    });
  }, [fetchWishes, updateWish, token]);

  useEffect(() => {
    calculateSubtotal();
  }, [wishes, updateWish]);

  return { wishes, error, isLoading, setUpdateWish, updateWish, payRecap };
};

export default useFetchWish;

import { useState, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import { LoggedContext } from "../Context/LoggedContext";

const useFetchWish = (url) => {
  let { token } = useContext(LoggedContext);
  const [wishes, setWishes] = useState(null);
  const [wishesIsLoading, setWishesIsLoading] = useState(true);
  const [wishesError, setWishesError] = useState(null);
  const [updateWish, setUpdateWish] = useState(false);
  const [wishesPayRecap, setWishesPayRecap] = useState(null);

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
      setWishesPayRecap(payRecapObj);
    }
  }, [wishes, updateWish]);

  const fetchWishes = useCallback(async () => {
    let headers = { Authorization: `Bearer ${token}` };
    const res = await axios.get(url, { headers });
    setWishes(res.data.data.wishlistItems);
    setWishesError(null);
    setWishesIsLoading(false);
    setUpdateWish(!updateWish);
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchWishes().catch((err) => {
        setWishesError(err.message);
        setWishesIsLoading(false);
        setWishes(null);
        console.log(err);
      });
    }
  }, [fetchWishes, updateWish, token]);

  useEffect(() => {
    calculateSubtotal();
  }, [wishes, updateWish]);

  return {
    wishes,
    wishesError,
    wishesIsLoading,
    setUpdateWish,
    updateWish,
    wishesPayRecap,
  };
};

export default useFetchWish;

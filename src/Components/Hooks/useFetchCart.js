import { useState, useCallback, useEffect, useContext } from "react";
import axios from "axios";
import { LoggedContext } from "../Context/LoggedContext";

const useFetchCart = (url) => {
  let { token } = useContext(LoggedContext);

  const [cart, setCart] = useState(null);
  const [cartIsLoading, setCartIsLoading] = useState(true);
  const [cartError, setCartError] = useState(null);
  const [updateCartState, setUpdateCartState] = useState(false);
  const [cartPayRecap, setCartPayRecap] = useState(null);
  const [showReservedNote, setShowReservedNote] = useState(false);

  const calculateSubtotal = useCallback(() => {
    if (cart) {
      let priceArr = cart.map((item) => {
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
      setCartPayRecap(payRecapObj);
    }
  }, [cart, updateCartState]);

  const fetchData = useCallback(async () => {
    let headers = { Authorization: `Bearer ${token}` };
    const res = await axios.get(url, {
      headers,
    });
    setCart(res.data.data.cartItems);
    setCartError(null);
    setCartIsLoading(false);
    setUpdateCartState(!updateCartState);
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchData().catch((err) => {
        setCartError(err.message);
        setCartIsLoading(false);
        setCart(null);
        console.log(err);
      });
    } else {
      setCart([]);
      setCartIsLoading(false);
    }
  }, [fetchData, updateCartState, token]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData().catch((err) => {
        setCartError(err.message);
        setCartIsLoading(false);
        setCart(null);
        console.log(err);
      });
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, [token]);

  useEffect(() => {
    calculateSubtotal();
  }, [cart, updateCartState]);

  return {
    cart,
    cartError,
    cartIsLoading,
    setUpdateCartState,
    updateCartState,
    cartPayRecap,
    showReservedNote,
    setShowReservedNote,
  };
};

export default useFetchCart;

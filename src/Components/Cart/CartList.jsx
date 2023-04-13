import "../Cart/CartList.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import CartListBlock from "./CartListBlock";
import { CartContext } from "../Context/CartContext";
import useCartState from "../Hooks/useCartState";
import { useCookies } from "react-cookie";
import Cart from "./Cart";

function CartList({ data, error, isLoading, removeCartItem }) {
  /*  const { cartList, setCartList, getUserCart, removeItem } =
    useContext(CartContext);

  useEffect(() => {
    getUserCart();
  }, []); */

  /*  useEffect(() => {
    getUserCart();
  }, [cartList]); */

  let cartListed;
  /* cartListed = cartList.map((item) => {
    return (
      <CartListBlock
        key={item._id}
        id={item._id}
        item={item}
        removeItem={removeItem}
      />
    );
  }); */

  return (
    <div className="CartList">
      <span className="CartList-title">YOUR CART</span>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading ...</div>}
      {data && (
        <div className="CartList-list">
          {data.map((item) => {
            return (
              <CartListBlock
                key={item._id}
                id={item._id}
                item={item}
                removeCartItem={removeCartItem}
              />
            );
          })}
        </div>
      )}
      {/*  {cartList.length === 0 ? (
        <div className="CartList-empty-box">
          <span className="CartList-empty">No Items in your Cart yet.</span>
        </div>
      ) : (
        <div className="CartList-list">{cartListed}</div>
      )} */}
    </div>
  );
}
export default CartList;

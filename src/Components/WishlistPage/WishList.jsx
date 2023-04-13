import "../WishlistPage/WishList.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import WishlistBlock from "../WishlistPage/WishlistBlock";

function WishList({ wishes, isLoading, error, removeWishItem, moveToCart }) {
  /* async function moveToCart(id, item) {
        setCartAnim(true);
        setTimeout(() => {
            setCartAnim(false)
        }, 1500);
        const itemToAdd = { ...item }
        const response = await axios.patch(`http://localhost:3000/api/users/${user._id}`, {
            cart: [...user.cart, { ...itemToAdd }]
        });
        const updatedUser = await axios.get(`http://localhost:3000/api/users/${user._id}`)
        setUser(updatedUser.data);
        removeItem(id);
    } */

  console.log(wishes);
  return (
    <div className="WishList">
      <span className="WishList-title">YOUR WISHLIST</span>
      {error && <>{error}</>}
      {isLoading && <>isLoading</>}
      {wishes && (
        <div className="WishList-list">
          {wishes.map((item) => {
            return (
              <WishlistBlock
                key={item._id}
                item={item}
                removeWishItem={removeWishItem}
                moveToCart={moveToCart}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default WishList;

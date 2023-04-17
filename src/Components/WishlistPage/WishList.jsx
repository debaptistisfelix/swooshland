import "../WishlistPage/WishList.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import WishlistBlock from "../WishlistPage/WishlistBlock";

function WishList({ wishes, isLoading, error, removeWishItem, moveToCart }) {
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

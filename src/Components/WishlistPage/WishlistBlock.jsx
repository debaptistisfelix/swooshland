import "../WishlistPage/WishlistBlock.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function WishlistBlock({ item, removeWishItem, moveToCart }) {
  const [blockAnim, setBlockAnim] = useState(false);

  let blockStatus;
  blockAnim === true ? (blockStatus = "vanish-anim") : "not true";

  return (
    <div className={`WishlistBlock ${blockStatus}`}>
      <div className="WishlistBlock-img-box">
        <img className="WishlistBlock-img" src={item.images} />
      </div>
      <div className="WishlistBlock-text">
        <div className="WishlistBlock-toptext">
          <span className="WishlistBlock-model">
            <Link
              className="WishlistBlock-link"
              to={`/products/${item.itemId}`}
            >
              {item.model}
            </Link>
          </span>
          <span className="WishlistBlock-price">${item.price}0</span>
        </div>
        <div className="WishlistBlock-subtext">
          <span className="WishlistBlock-categ">{item.name}</span>
          <div className="WishlistBlock-palette">
            <span
              className="WishlistBlock-color"
              style={{ backgroundColor: item.paletteColors[0].hex }}
            ></span>
            <span
              className="WishlistBlock-color"
              style={{ backgroundColor: item.paletteColors[1].hex }}
            ></span>
            <span
              className="WishlistBlock-color"
              style={{ backgroundColor: item.paletteColors[2].hex }}
            ></span>
          </div>
          <div className="WishlistBlock-size-box">
            <div className="WishlistBlock-left-bottom">
              <label className="WishlistBlock-size-label">Size</label>
              <span>{item.chosenSize}</span>
            </div>
            <div className="WishlistBlock-right-bottom">
              <i
                onClick={() => {
                  moveToCart(item._id, item);
                  setBlockAnim(true);
                }}
                className="fa-solid fa-cart-shopping"
              ></i>
              <i
                onClick={() => {
                  removeWishItem(item._id);
                  setBlockAnim(true);
                }}
                className="fa-solid fa-trash"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistBlock;

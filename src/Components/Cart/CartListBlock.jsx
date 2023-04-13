import "./CartListBlock.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function CartListBlock({ item, id, removeCartItem }) {
  const [blockAnim, setBlockAnim] = useState(false);

  console.log(item);

  let blockStatus;
  blockAnim === true ? (blockStatus = "vanish-anim") : "not true";

  return (
    <div className={`CartListBlock ${blockStatus}`}>
      <div className="CartListBlock-img-box">
        <img className="CartListBlock-img" src={item.images} />
      </div>
      <div className="CartListBlock-text">
        <div className="CartListBlock-toptext">
          <Link to={`/products/${item.itemId}`} className="Cart-product-link">
            <span className="CartListBlock-model">{item.model}</span>
          </Link>

          <span className="CartListBlock-price">${item.price}0</span>
        </div>
        <div className="CartListBlock-subtext">
          <span className="CartListBlock-categ">{item.name}</span>
          <div className="CartListBlock-palette">
            <span
              className="CartListBlock-color"
              style={{ backgroundColor: item.paletteColors[0].hex }}
            ></span>
            <span
              className="CartListBlock-color"
              style={{ backgroundColor: item.paletteColors[1].hex }}
            ></span>
            <span
              className="CartListBlock-color"
              style={{ backgroundColor: item.paletteColors[2].hex }}
            ></span>
          </div>
          <div className="CartListBlock-size-box">
            <div className="CartListBlock-left-bottom">
              <label className="CartListBlock-size-label">Size</label>
              <span>{item.chosenSize}</span>
            </div>
            <div className="CartListBlock-right-bottom">
              <i
                onClick={() => {
                  removeCartItem(id);
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

export default CartListBlock;

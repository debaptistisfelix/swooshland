import "./CartModalNav.css";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../Context/UserContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useCookies } from "react-cookie";

function CartModalNav({ openedCartModal }) {
  const [cookies] = useCookies(["client"]);
  const { cart, cartPayRecap } = useContext(UserContext);

  function moveToCart() {
    window.scrollTo(0, 0);
  }

  let CartStatus;
  openedCartModal === true ? (CartStatus = "showCartModal") : undefined;
  return (
    <div className={`CartModalNav ${CartStatus}`}>
      <div className="CartModalNav-titlebox">
        <span className="CartModalNav-title">
          <b>Swoosh</b>Cart <i className="fa-solid fa-cart-shopping"></i>
        </span>
      </div>
      <div className="CartModalNav-cartbox">
        {cart && cart.length === 0 ? (
          <span className="empty-cart-model">Empty cart</span>
        ) : (
          cart &&
          cart.map((item) => {
            return (
              <div key={uuidv4()} className="CartModalNav-itembox">
                <span className="item-box-qty">
                  <i className="fa-solid fa-heart"></i>
                </span>
                <Link to={`/products/${item.itemId}`} className="item-box-name">
                  <b>{item.model}</b> - {item.name}
                </Link>
              </div>
            );
          })
        )}
      </div>
      <span className="CartModalNav-total">
        TOTAL:{" "}
        <b>${cookies?.client ? cartPayRecap?.subtotal.toFixed(2) : "0.00"}</b>
      </span>
      <Link
        to={cookies?.client ? "/cart" : "/user-log"}
        className="CartModalNav-button"
        onClick={moveToCart}
      >
        VIEW CART
      </Link>
    </div>
  );
}

export default CartModalNav;

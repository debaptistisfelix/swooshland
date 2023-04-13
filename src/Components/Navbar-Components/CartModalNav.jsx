import "./CartModalNav.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useCookies } from "react-cookie";

function CartModalNav({ openedCartModal }) {
  const [cookies] = useCookies(["client"]);
  const { data, payRecap } = useContext(CartContext);

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
        {data && data.length === 0 ? (
          <span className="empty-cart-model">Empty cart</span>
        ) : (
          data &&
          data.map((item) => {
            return (
              <div key={item.itemId} className="CartModalNav-itembox">
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
        <b>${cookies?.client ? payRecap?.subtotal.toFixed(2) : "0.00"}</b>
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

import "../OrderPage/CartSummary.css";
import { useContext } from "react";

import ItemBlock from "./ItemBlock";

function CartSummary({ data }) {
  return (
    <div className="CartSummary">
      <span className="CartSummary-title">YOUR CART</span>
      <div className="CartSummary-list">
        {data &&
          data.map((item) => {
            return <ItemBlock key={item._id} id={item._id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default CartSummary;

import "../Cart/CartList.css";

import CartListBlock from "./CartListBlock";

function CartList({ data, error, isLoading, removeCartItem }) {
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
    </div>
  );
}
export default CartList;

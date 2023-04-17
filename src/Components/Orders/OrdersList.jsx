import "../Orders/OrdersList.css";
import OrderBlock from "./OrderBlock";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function OrdersList() {
  const { orders, ordersIsLoading, ordersError, setUpdateState } =
    useContext(UserContext);

  return (
    <div className="OrdersList">
      <span className="OrdersList-title">YOUR ORDERS</span>

      {ordersError && <div>{ordersError}</div>}
      {ordersIsLoading && (
        <div className="Loading-orders">Loading Orders...</div>
      )}
      {orders && (
        <div className="OrdersList-list">
          {orders.map((order, i) => {
            return <OrderBlock key={i} order={order} />;
          })}
          {orders && orders.length === 0 && "No orders yet."}
        </div>
      )}
    </div>
  );
}

export default OrdersList;

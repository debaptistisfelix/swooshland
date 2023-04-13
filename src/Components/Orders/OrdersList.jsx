import "../Orders/OrdersList.css";
import OrderBlock from "./OrderBlock";
import useFetchOrders from "../Hooks/useFetchOrders";
import { OrderContext } from "../Context/OrderContext";
import { useContext } from "react";

function OrdersList() {
  const { data, isLoading, error, setUpdateState } = useContext(OrderContext);
  console.log(data);
  return (
    <div className="OrdersList">
      <span className="OrdersList-title">YOUR ORDERS</span>

      {error && <div>{error}</div>}
      {isLoading && <div className="Loading-orders">Loading Orders...</div>}
      {data && (
        <div className="OrdersList-list">
          {data.map((order, i) => {
            return <OrderBlock key={i} order={order} />;
          })}
          {data && data.length === 0 && "No orders yet."}
        </div>
      )}
    </div>
  );
}

export default OrdersList;

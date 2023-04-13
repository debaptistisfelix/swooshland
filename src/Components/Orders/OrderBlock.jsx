import "../Orders/OrderBlock.css";
import OrderDetail from "./OrderDetails";
import { useState } from "react";

function OrderBlock({ order }) {
  const { amount, createdAt, items, shippingCost, status, subtotal, address } =
    order;
  const [openDetails, setOpenDetails] = useState(false);
  const [animation, setAnimation] = useState(undefined);

  function closeDetails() {
    setAnimation("close-details");
    setTimeout(() => {
      setOpenDetails(false);
      setAnimation(undefined);
    }, 500);
  }

  function toggleDetails() {
    openDetails === false ? setOpenDetails(true) : closeDetails();
  }

  return (
    <div onClick={toggleDetails} className="OrderBlock">
      <div className="OrderBlock-infos">
        <div className="OrderBlock-icon-box">
          <i className="fa-solid fa-bag-shopping"></i>
          <span>{status}</span>
        </div>
        <div className="OrderBlock-date-box">{createdAt.substring(0, 10)}</div>
        <div className="OrderBlock-items-box">
          Purchased:{" "}
          <b>
            {items.length < 2
              ? `${items.length} item`
              : `${items.length} items`}
          </b>
        </div>
        <div className="OrderBlock-amount">
          <b>${amount.toFixed(2)}</b>
        </div>
        <div className="OrderBlock-open-box">
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      {openDetails === true ? (
        <div className={`OrderBlock-details ${animation}`}>
          <OrderDetail
            items={items}
            address={address}
            subtotal={subtotal}
            shippingCost={shippingCost}
            amount={amount}
          />
        </div>
      ) : undefined}
    </div>
  );
}

export default OrderBlock;

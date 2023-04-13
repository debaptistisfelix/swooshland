import "../OrderPage/OrderShip.css";
import AddressList from "../OrderPage/AddressList";
import AddressForm from "../OrderPage/AddressForm";
import { useState, useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import { UserContext } from "../Context/UserContext";
import { OrderProcessContext } from "../Context/OrderProcessContext";
import axios from "axios";

function OrderShip() {
  const { chosenAddress, addCartToOrder, selectAddress, addAddress } =
    useContext(OrderProcessContext);

  return (
    <div className="OrderShip">
      <div className="OrderShip-container">
        <AddressList selectAddress={selectAddress} />
        <AddressForm addAddress={addAddress} />
      </div>
      <div className="OrderShip-btns">
        <button
          onClick={() => {
            if (chosenAddress === "") {
              window.scrollTo(0, 0);
              return;
            } else {
              addCartToOrder();
              window.scrollTo(0, 0);
            }
          }}
          type="submit"
          className="OrderShip-btn"
          style={{
            backgroundColor: chosenAddress === "" ? "#495057" : "#191919",
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default OrderShip;

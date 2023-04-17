import "../OrderPage/AddressList.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import AddressBlock from "./AddressBlock";

function AddressList({ selectAddress }) {
  const { address } = useContext(UserContext);

  return (
    <div className="AddressList">
      <span className="AddressList-title">
        Choose from your Shipping Addresses or add a New Address.
      </span>
      <div className="AddressList-list">
        {(address && address.length) === 0 ? (
          <span className="empty-address-list">
            No Addresses submitted yet.
          </span>
        ) : (
          address &&
          address.map((item) => {
            return (
              <AddressBlock
                key={item._id}
                id={item._id}
                item={item}
                selectAddress={selectAddress}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default AddressList;

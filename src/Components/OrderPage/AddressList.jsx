import "../OrderPage/AddressList.css";
import { useContext, useState, useEffect } from "react";
import { AddressContext } from "../Context/AddressContext";
import AddressBlock from "./AddressBlock";

function AddressList({ selectAddress }) {
  const { data } = useContext(AddressContext);

  return (
    <div className="AddressList">
      <span className="AddressList-title">
        Choose from your Shipping Addresses or add a New Address.
      </span>
      <div className="AddressList-list">
        {(data && data.length) === 0 ? (
          <span className="empty-address-list">
            No Addresses submitted yet.
          </span>
        ) : (
          data &&
          data.map((item) => {
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

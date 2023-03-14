import "../OrderPage/OrderShip.css";
import AddressList from "../OrderPage/AddressList";
import AddressForm from "../OrderPage/AddressForm";
import { useState, useContext } from "react";
import { OrderContext } from "../Context/OrderContext";

function OrderShip({ addAddressToOrder }) {

    const { chosenAddress, setChosenAddress } = useContext(OrderContext);
    function selectAddress(event) {
        const selectedAd = (event.target.value);
        setChosenAddress(JSON.parse(selectedAd))
    }

    console.log(chosenAddress)
    return (
        <div className="OrderShip">
            <div className="OrderShip-container">
                <AddressList selectAddress={selectAddress} />
                <AddressForm />
            </div>
            <div className="OrderShip-btns">
                <button
                    onClick={() => {
                        if (chosenAddress === "") {
                            window.scrollTo(0, 0);
                            return;
                        } else {
                            addAddressToOrder(chosenAddress);
                            window.scrollTo(0, 0);
                        }

                    }}
                    type="submit" className="OrderShip-btn"
                    style={{ backgroundColor: chosenAddress === "" ? "#495057" : "#191919" }}
                >NEXT</button>
            </div>
        </div>
    )
}

export default OrderShip;
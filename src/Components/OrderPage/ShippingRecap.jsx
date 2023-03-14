import "..//OrderPage/ShippingRecap.css";
import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";

function ShippingRecap() {
    const { chosenAddress } = useContext(OrderContext)

    return (
        <div className="ShippingRecap">
            <span className="ShippingRecap-title">SHIPPING ADDRESS</span>
            <div className="ShippingRecap-address-box">
                <span>{chosenAddress.name} {chosenAddress.surname}</span>
                <span>{chosenAddress.address}</span>
                <span>{chosenAddress.city}, {chosenAddress.postcode}</span>
                <span>{chosenAddress.region}, {chosenAddress.country}</span>
            </div>
        </div>
    )
}

export default ShippingRecap;
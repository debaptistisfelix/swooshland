import "../ProfilePage/AddressBlock.css";
import { useState } from "react";

function AddressBlock({ item, deleteAddress, id }) {
    const { name, surname, address, city, postcode, region, country } = item;
    const [blockAnim, setBlockAnim] = useState(false);

    let blockStatus;
    blockAnim === true ? blockStatus = "AddressBlock-vanish" : undefined
    return (
        <div className={`AddressBlock ${blockStatus}`}>
            <i className="AddressBlock-icon fa-solid fa-location-dot"></i>
            <div className="Address-box">
                <div>{name} {surname}</div>
                <div>{address}</div>
                <div>{city}, {postcode}</div>
                <div>{region}</div>
                <div>{country}</div>
            </div>
            <div className="AddressBlock-btns">
                <button
                    onClick={() => {
                        deleteAddress(id);
                        setBlockAnim(true);
                    }}
                    className="AddressBlock-btn delete-btn">Delete</button>
            </div>
        </div>
    )
}

export default AddressBlock;
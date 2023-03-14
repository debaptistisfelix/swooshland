import "../Orders/OrderBlock.css";
import OrderDetail from "./OrderDetails";
import { useState } from "react";

function OrderBlock({ amount, address, cart, date }) {
    const [openDetails, setOpenDetails] = useState(false);
    const [animation, setAnimation] = useState(undefined);

    function closeDetails() {
        setAnimation("close-details");
        setTimeout(() => {
            setOpenDetails(false);
            setAnimation(undefined)
        }, 500);
    }

    function toggleDetails() {
        openDetails === false
            ? setOpenDetails(true)
            : closeDetails();

    }



    return (
        <div
            onClick={toggleDetails}
            className="OrderBlock">
            <div className="OrderBlock-infos">
                <div className="OrderBlock-icon-box">
                    <i className="fa-solid fa-bag-shopping"></i>
                </div>
                <div className="OrderBlock-date-box">
                    {date}
                </div>
                <div className="OrderBlock-items-box">
                    Purchased: <b>{cart.length < 2 ? `${cart.length} item` : `${cart.length} items`}</b>
                </div>
                <div className="OrderBlock-amount">
                    <b>${amount}</b>
                </div>
                <div className="OrderBlock-open-box">
                    <i
                        className="fa-solid fa-caret-down"></i>
                </div>
            </div>
            {openDetails === true ? <div className={`OrderBlock-details ${animation}`}>
                <OrderDetail />
            </div>
                : undefined}
        </div>
    )
}

export default OrderBlock;
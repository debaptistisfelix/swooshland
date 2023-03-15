import "../Orders/OrderDetails.css";
import ItemBlock from "./ItemBlock";

function OrderDetail({ cart, address, amount, subtotal, shippingCost }) {

    let cartList = cart.map(item => {
        /*  return <div className="OrderDetail-piece">
             <span>{item.model}</span>
             <span>{item.name}</span>
             <span>{item.chosenSize}</span>
             <span>${item.price}0</span>
         </div> */
        return <ItemBlock
            item={item}
            key={item._id}
            id={item._id}
        />


    })


    return (
        <div className="OrderDetail">
            <div className="OrderDetail-list">
                <span className="OrderDetail-list-title">ITEMS</span>
                <div className="OrderDetail-list-list">
                    {cartList}
                </div>
            </div>
            <div className="OrderDetail-ship-pay">
                <div className="OrderDetail-ship-box">
                    <span className="OrderDetail-ship-title">
                        SHIPPING ADDRESS
                    </span>
                    <div className="OrderDetail-ship-detail">
                        <span>{address.name} {address.surname}</span>
                        <span>{address.address}</span>
                        <span>{address.city} {address.postcode}</span>
                        <span>{address.region}, {address.country}</span>
                    </div>
                </div>
                <div className="OrderDetail-pay-box">
                    <span className="OrderDetail-ship-title">
                        PAYMENT
                    </span>
                    <div className="OrderDetail-pay-detail">
                        <div className="OrderDetail-boxes">
                            <span className="OrderDetail-label">SUBTOTAL</span>
                            <span>${(subtotal).toFixed(2)}</span>
                        </div>
                        <div className="OrderDetail-boxes">
                            <span className="OrderDetail-label">SHIPPING</span>
                            <span>${shippingCost}</span>
                        </div>
                        <div className="OrderDetail-boxes">
                            <span className="OrderDetail-label">TOTAL</span>
                            <span>${amount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail;
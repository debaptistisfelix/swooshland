import "./OrderCompleted.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { OrderContext } from "../Context/OrderContext";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";



function OrderCompleted() {
    const { user, setUser } = useContext(UserContext);
    /* const { completeOrder } = useContext(OrderContext); */
    const [completedOrder, setCompletedOrder] = useState([])
    const [cookies] = useCookies(['client']);




    async function fetchUser() {
        const userData = cookies.client._id
        const res = await axios.get(`http://localhost:3000/api/users/${userData}`)
        const userInfos = res.data;
        setUser(userInfos)
    }


    useEffect(() => {
        const orderLS = JSON.parse(localStorage.getItem("order"))
        setCompletedOrder(orderLS);
    }, [])

    console.log(completedOrder);


    async function completeOrder(ord) {
        const id = user._id;
        const orders = user.orders
        await axios.patch(`http://localhost:3000/api/users/${id}`, {
            orders: [{ ...ord, date: new Date().toLocaleDateString("en-es") }],
            cart: []
        })
        const updatedUser = await axios.get(`http://localhost:3000/api/users/${user._id}`)
        setUser(updatedUser.data);
        localStorage.removeItem("order");
    }





    return (
        <div className="OrderCompleted">
            <div className="OrderCompleted-card">
                <span className="OrderCompleted-title">ORDER COMPLETED</span>
                <div className="OrderCompleted-parags">
                    <p>Your order was <b>completed succesfully!</b></p>
                    <p>You will receive an email as soon as we ship your order.</p>
                    <p>You can check this order or the previous ones on your <b>User's Order Page</b> anytime you want. </p>
                </div>
                <div className="OrderCompleted-links">
                    <Link to="/orders" className="OrderCompleted-link">Orders Page</Link>
                    <Link to="/" className="OrderCompleted-link">Continue Shopping</Link>
                </div>
            </div>
            {/* <div className="OrderCompleted-pic-card">
                <div className="OrderCompleted-pic"></div>
                <div className="OrderCompleted-text">
                    <span className="OrderCompleted-titlepic">ORDER COMPLETED</span>
                    <div className="OrderCompleted-parags-pic">
                        <p>Your order was completed succesfully!</p>
                        <p>You will receive an email as soon as we ship your order.</p>
                        <p>You can check this order or the previous ones on your User's Order Page anytime you want. </p>
                    </div>
                    <div className="OrderCompleted-links-pic">
                        <Link to="/orders" className="OrderCompleted-link-pic">Orders Page</Link>
                        <Link to="/" className="OrderCompleted-link-pic">Continue Shopping</Link>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default OrderCompleted;
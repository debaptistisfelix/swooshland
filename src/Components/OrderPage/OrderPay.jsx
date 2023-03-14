import "../OrderPage/OrderPay.css";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { OrderContext } from "../Context/OrderContext";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function OrderPay() {
    const { user, setUser } = useContext(UserContext);
    const { order } = useContext(OrderContext);
    const navigate = useNavigate();
    const [cookies] = useCookies(['client']);


    async function fetchUser() {
        const userData = cookies.client._id
        const res = await axios.get(`http://localhost:3000/api/users/${userData}`)
        const userInfos = res.data;
        setUser(userInfos)
    }





    async function completeOrder(ord) {
        const id = user._id;
        await axios.patch(`http://localhost:3000/api/users/${id}`, {
            orders: [...user.orders, { ...ord, date: new Date().toLocaleDateString("en-es") }],
            cart: []
        })
        const updatedUser = await axios.get(`http://localhost:3000/api/users/${user._id}`)
        setUser(updatedUser.data);
        navigate("/");
    }



    return (
        <div className="OrderPay">
            <button
                onClick={() => { completeOrder(order) }}
                className="OrderPay-btn">PAY</button>
        </div>
    )
}

export default OrderPay;
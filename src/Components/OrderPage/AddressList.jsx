import "../OrderPage/AddressList.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import { useCookies } from "react-cookie";
/* import AddressBlock from "../ProfilePage/AddressBlock"; */
import AddressBlock from "./AddressBlock";

function AddressList({ selectAddress }) {
    const { user, setUser } = useContext(UserContext);
    const [addressList, setAddressList] = useState([])
    const [cookies] = useCookies(['client']);

    useEffect(() => {
        setAddressList(user.addresses);
    }, [user])


    /* async function fetchUser() {
        const userData = cookies.client._id
        const res = await axios.get(`http://localhost:3000/api/users/${userData}`)
        const userInfos = res.data;
        setUser(userInfos)
    } */


    let list;
    list = addressList.map(item => {
        return <AddressBlock
            key={item.id}
            id={item.id}
            item={item}
            selectAddress={selectAddress}

        />
    })
    return (

        <div className="AddressList">
            <span className="AddressList-title">Choose from your Shipping Addresses or add a New Address.</span>
            <div className="AddressList-list">
                {user.addresses.length === 0
                    ? <span className="empty-address-list">No Addresses submitted yet.</span>
                    : list
                }

            </div>
        </div>

    )
}

export default AddressList;
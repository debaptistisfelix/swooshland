import "../ProfilePage/ProfileList.css";
import AddressBlock from "./AddressBlock";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import { useCookies } from "react-cookie";


function ProfileList() {
    const { user, setUser } = useContext(UserContext);
    const [addressList, setAddressList] = useState([])
    const [cookies] = useCookies(['client']);

    useEffect(() => {
        setAddressList(user.addresses);
    }, [user])

    async function fetchUser() {
        const userData = cookies.client._id
        const res = await axios.get(`http://localhost:3000/api/users/${userData}`)
        const userInfos = res.data;
        setUser(userInfos)
    }

    async function deleteAddress(id) {
        let filteredItems = addressList.filter(item => {
            return item.id !== id;
        })
        await axios.patch(`http://localhost:3000/api/users/${user._id}`, {
            addresses: [...filteredItems]
        })
        fetchUser();
        console.log("address removed and user updated")
    }

    let list;
    list = addressList.map(item => {
        return <AddressBlock
            key={item.id}
            id={item.id}
            item={item}
            deleteAddress={deleteAddress}
        />
    })



    return (
        <div className="ProfileList">
            <span className="ProfileList-title">YOUR SHIPPING ADDRESSES <i className="fa-solid fa-truck-fast"></i></span>
            <div className="ProfileList-list">
                {user.addresses.length === 0
                    ? <span className="empty-address-list">No Addresses submitted yet.</span>
                    : list
                }
            </div>
        </div>
    )
}

export default ProfileList;
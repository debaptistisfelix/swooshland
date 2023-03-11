import "../ProfilePage/ProfileCard.css";
import AddressBlock from "./AddressBlock";

function ProfileCard() {
    return (
        <div className="ProfileCard">
            <span className="ProfileCard-title">YOUR SHIPPING INFOS <i className="fa-solid fa-truck-fast"></i></span>
            <div className="ProfileCard-ship-list">
                <AddressBlock />
            </div>
        </div>
    )
}

export default ProfileCard;
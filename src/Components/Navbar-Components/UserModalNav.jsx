import "./UserModalNav.css"
import { Link } from "react-router-dom";

function UserModalNav({ openedUserModal, toggleUserModal }) {
    let userModalStatus;
    openedUserModal === true ? userModalStatus = "showUserModal" : userModalStatus = undefined;
    return (
        <div

            className={`UserModalNav ${userModalStatus}`}>
            <div className="UserModalNav-link UserModalNav-user">
                <i className="fa-regular fa-user nav-icons"></i>
                <span
                    onClick={toggleUserModal}
                >
                    <Link to="/user-log" className="UserModalNav-linktag">Log in / Sign up</Link>
                </span>
            </div>
            <div className="UserModalNav-link">
                <Link className="UserModalNav-linktag">Orders</Link>
            </div>
            <div className="UserModalNav-link">
                <Link className="UserModalNav-linktag">Whishlist</Link>
            </div>
            <div className="UserModalNav-link">
                <Link className="UserModalNav-linktag">Settings</Link>
            </div>
        </div>
    )
}

export default UserModalNav;
import "./UserModalNav.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedContext } from "../Context/LoggedContext";

function UserModalNav({ openedUserModal, toggleUserModal }) {
    const { logged, logOut } = useContext(LoggedContext);
    let userModalStatus;
    openedUserModal === true ? userModalStatus = "showUserModal" : userModalStatus = undefined;
    return (
        <div
            onClick={toggleUserModal}
            className={`UserModalNav ${userModalStatus}`}>
            {logged === true
                ? <div className="UserModalNav-content-logged">
                    <div className="UserModalNav-link UserModalNav-user">
                        <i className="fa-regular fa-user nav-icons"></i>
                        <span
                            onClick={toggleUserModal}><span
                                onClick={logOut}
                                className="UserModalNav-linktag">Log Out</span>
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
                : <div className="UserModalNav-content-notLogged">
                    <Link to="/user-log" className="UserModalNav-linktag">
                        Log in / Sign up</Link>
                </div>

            }








        </div>
    )
}

export default UserModalNav;
import "./UserModalNav.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedContext } from "../Context/LoggedContext";
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from "uuid";

function UserModalNav({ openedUserModal, toggleUserModal }) {
  const { logged, logOut } = useContext(LoggedContext);
  const [cookies, setCookie, removeCookie] = useCookies(["U-I"]);

  let userModalStatus;
  openedUserModal === true
    ? (userModalStatus = "showUserModal")
    : (userModalStatus = undefined);
  return (
    <div
      onClick={toggleUserModal}
      className={`UserModalNav ${userModalStatus}`}
    >
      {logged === true ? (
        <div className="UserModalNav-content-logged">
          <div
            onClick={() => {
              logOut();
            }}
            className="UserModalNav-link UserModalNav-user"
          >
            <i className="fa-regular fa-user nav-icons"></i>
            <span onClick={toggleUserModal}>
              <span className="UserModalNav-linktag">Log Out</span>
            </span>
          </div>
          <Link to="/orders" className="UserModalNav-linktag">
            <div className="UserModalNav-link">Orders</div>
          </Link>

          <Link to="/wishlist" className="UserModalNav-linktag">
            <div className="UserModalNav-link UserModalNav-wish">
              Whishlist
              {/* {<span className="wishlist-qty-modal">{user?.wishlist.length}</span>} */}
            </div>
          </Link>
          <Link to="/profile" className="UserModalNav-linktag">
            <div className="UserModalNav-link">Profile</div>
          </Link>
        </div>
      ) : (
        <Link to="/user-log" className="UserModalNav-linktag">
          <div className="UserModalNav-content-notLogged">Log in / Sign up</div>
        </Link>
      )}
    </div>
  );
}

export default UserModalNav;

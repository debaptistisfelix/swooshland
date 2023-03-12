import "../ProfilePage/ProfilePage.css";
import useLoadedState from "../Hooks/useLoadedState";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Error404 from "../Error404/Error404";
import ProfileList from "./ProfileList";
import ProfileForm from "./ProfileForm";

function ProfilePage() {
    const [loadedPage, setLoadedPage, loadPage] = useLoadedState(false);
    const { user } = useContext(UserContext);
    loadPage(600);


    return (
        <div className="ProfilePage">
            {
                (!user.cart)
                    ? <Error404 />
                    : loadedPage === true
                        ? <div className="Profile-container">
                            <ProfileList />
                            <ProfileForm />
                        </div>
                        : <div className="Profile-loader-box">
                            <div className="loader-container">
                                <div className="loader"></div>
                                <span className="loader-text">LOADING</span>
                            </div>
                        </div>
            }
        </div>
    )
}

export default ProfilePage;
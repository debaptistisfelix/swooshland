import "../ProfilePage/Profile.css";
import Error404 from "../Error404/Error404";
import ProfilePage from "./ProfilePage";
import { useContext } from "react";
import { LoggedContext } from "../Context/LoggedContext";


function Profile() {
    const { logged, setLogged } = useContext(LoggedContext);


    return (
        <div className="Profile">
            {(logged === false)
                ? <Error404 />
                : <ProfilePage />
            }
        </div>
    )
}

export default Profile;
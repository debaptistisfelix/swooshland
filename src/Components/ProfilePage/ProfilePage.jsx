import "../ProfilePage/ProfilePage.css";
import useLoadedState from "../Hooks/useLoadedState";
import { useContext } from "react";
import Error404 from "../Error404/Error404";
import ProfileList from "./ProfileList";
import ProfileForm from "./ProfileForm";
import { useCookies } from "react-cookie";
import axios from "axios";
import { AddressContext } from "../Context/AddressContext";

function ProfilePage() {
  const [loadedPage, setLoadedPage, loadPage] = useLoadedState(false);
  const { data, isLoading, error, setUpdateState } = useContext(AddressContext);

  const [cookies] = useCookies(["client"]);
  const token = cookies.client.token;
  const headers = { Authorization: `Bearer ${token}` };

  async function deleteAddress(id) {
    let filteredItems = data.filter((item) => {
      return item.id !== id;
    });
    await axios.delete(`http://localhost:8000/api/addresses/${id}`, {
      headers,
    });
    setUpdateState(true);
  }

  async function addAddress(newAddress) {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/addresses",
        newAddress,
        {
          headers,
        }
      );
      setUpdateState(true);
    } catch (err) {
      console.log(err);
    }
  }

  loadPage(600);

  return (
    <div className="ProfilePage">
      {!cookies.client ? (
        <Error404 />
      ) : loadedPage === true ? (
        <div className="Profile-container">
          <ProfileList
            data={data}
            error={error}
            isLoading={isLoading}
            setUpdateState={setUpdateState}
            deleteAddress={deleteAddress}
          />
          <ProfileForm
            addAddress={addAddress}
            setUpdateState={setUpdateState}
          />
        </div>
      ) : (
        <div className="Profile-loader-box">
          <div className="loader-container">
            <div className="loader"></div>
            <span className="loader-text">LOADING</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;

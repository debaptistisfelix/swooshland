import "../ProfilePage/ProfilePage.css";
import useLoadedState from "../Hooks/useLoadedState";
import { useContext } from "react";
import Error404 from "../Error404/Error404";
import ProfileList from "./ProfileList";
import ProfileForm from "./ProfileForm";
import { useCookies } from "react-cookie";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

function ProfilePage() {
  const [loadedPage, setLoadedPage, loadPage] = useLoadedState(false);
  const { address, addressIsLoading, addressError, setUpdateAddressState } =
    useContext(UserContext);

  const [cookies] = useCookies(["client"]);
  const token = cookies.client.token;
  const headers = { Authorization: `Bearer ${token}` };

  async function deleteAddress(id) {
    let filteredItems = address.filter((item) => {
      return item.id !== id;
    });
    await axios.delete(
      `https://easy-ruby-goose-sari.cyclic.app/api/addresses/${id}`,
      {
        headers,
      }
    );
    setUpdateAddressState(true);
  }

  async function addAddress(newAddress) {
    try {
      const response = await axios.post(
        "https://easy-ruby-goose-sari.cyclic.app/api/addresses",
        newAddress,
        {
          headers,
        }
      );
      setUpdateAddressState(true);
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
            data={address}
            error={addressError}
            isLoading={addressIsLoading}
            setUpdateState={setUpdateAddressState}
            deleteAddress={deleteAddress}
          />
          <ProfileForm
            addAddress={addAddress}
            setUpdateState={setUpdateAddressState}
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

import "../ProfilePage/ProfileList.css";
import AddressBlock from "./AddressBlock";

function ProfileList({ data, isLoading, error, deleteAddress }) {
  return (
    <div className="ProfileList">
      <span className="ProfileList-title">
        YOUR SHIPPING ADDRESSES <i className="fa-solid fa-truck-fast"></i>
      </span>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading ...</div>}
      <div className="ProfileList-list">
        {data &&
          data.map((item) => {
            return (
              <AddressBlock
                key={item._id}
                id={item._id}
                item={item}
                deleteAddress={deleteAddress}
              />
            );
          })}
        {data && data.length === 0 && <p>No addresses submitted yet.</p>}
      </div>
    </div>
  );
}

export default ProfileList;

import "../ProfilePage/ProfileForm.css";
import useInputState from "../Hooks/useInputState";

function ProfileForm({ addAddress, setUpdateState }) {
  const [name, handleName, resetName] = useInputState("");
  const [surname, handleSurname, resetSurname] = useInputState("");
  const [address, handleAddress, resetAddress] = useInputState("");
  const [city, handleCity, resetCity] = useInputState("");
  const [postCode, handlePostCode, resetPostCode] = useInputState("");
  const [region, handleRegion, resetRegion] = useInputState("");
  const [country, handleCountry, resetCountry] = useInputState("");

  const inputs = [name, surname, address, city, postCode, region, country];
  const empty = (element) => element === "";

  const incompleteForm = inputs.some(empty);

  function resetInputs() {
    resetName();
    resetSurname();
    resetAddress();
    resetCity();
    resetPostCode();
    resetRegion();
    resetCountry();
  }

  async function addAddressToUser(event) {
    event.preventDefault();
    if (incompleteForm === true) return;
    else {
      const newAddress = {
        name: name,
        surname: surname,
        address: address,
        city: city,
        postCode: postCode,
        region: region,
        country: country,
      };
      addAddress(newAddress);
      resetInputs();
    }
  }
  return (
    <div className="ProfileForm">
      <span className="ProfileForm-title">ADD ADDRESS</span>
      <form
        onSubmit={() => {
          addAddressToUser(event);
        }}
        className="ProfileForm-form"
      >
        <input
          style={{
            border: incompleteForm === false ? "1px solid #007f5f" : undefined,
          }}
          onChange={handleName}
          type="text"
          name="name"
          id="name"
          className="long-input"
          placeholder="Name"
          value={name}
        />
        <input
          style={{
            border: incompleteForm === false ? "1px solid #007f5f" : undefined,
          }}
          onChange={handleSurname}
          type="text"
          name="surname"
          id="surname"
          className="long-input"
          placeholder="Surname"
          value={surname}
        />
        <input
          style={{
            border: incompleteForm === false ? "1px solid #007f5f" : undefined,
          }}
          onChange={handleAddress}
          type="text"
          name="address"
          id="address"
          className="long-input"
          placeholder="Address"
          value={address}
        />
        <div className="ProfileForm-input-box">
          <input
            style={{
              border:
                incompleteForm === false ? "1px solid #007f5f" : undefined,
            }}
            onChange={handleCity}
            type="text"
            name="city"
            id="city"
            className="short-input"
            placeholder="City"
            value={city}
          />
          <input
            style={{
              border:
                incompleteForm === false ? "1px solid #007f5f" : undefined,
            }}
            onChange={handlePostCode}
            type="text"
            name="postCode"
            id="postCode"
            className="short-input"
            placeholder="Postcode"
            value={postCode}
          />
        </div>
        <div className="ProfileForm-input-box">
          <input
            style={{
              border:
                incompleteForm === false ? "1px solid #007f5f" : undefined,
            }}
            onChange={handleRegion}
            type="text"
            name="region"
            id="region"
            className="short-input"
            placeholder="State/Region"
            value={region}
          />
          <input
            style={{
              border:
                incompleteForm === false ? "1px solid #007f5f" : undefined,
            }}
            onChange={handleCountry}
            type="text"
            name="country"
            id="country"
            className="short-input"
            placeholder="Country"
            value={country}
          />
        </div>
        <button type="submit" className="ProfileForm-btn">
          ADD <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;

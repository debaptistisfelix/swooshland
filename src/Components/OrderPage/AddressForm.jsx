import "../OrderPage/AddressForm.css";
import { useState, useContext, useEffect } from "react";
import useInputState from "../Hooks/useInputState";
import axios from "axios";
import { UserContext } from "../Context/UserContext";
import { v4 as uuidv4 } from 'uuid';

function AddressForm() {
    const [name, handleName, resetName] = useInputState("");
    const [surname, handleSurname, resetSurname] = useInputState("");
    const [address, handleAddress, resetAddress] = useInputState("");
    const [city, handleCity, resetCity] = useInputState("")
    const [postcode, handlePostcode, resetPostcode] = useInputState("")
    const [region, handleRegion, resetRegion] = useInputState("")
    const [country, handleCountry, resetCountry] = useInputState("")

    const { user, setUser } = useContext(UserContext);

    const inputs = [name, surname, address, city, postcode, region, country];
    const empty = (element) => element === "";

    const incompleteForm = (inputs.some(empty));

    function resetInputs() {
        resetName();
        resetSurname();
        resetAddress();
        resetCity();
        resetPostcode();
        resetRegion();
        resetCountry();
    }

    async function addAddress(event) {
        event.preventDefault();
        if (incompleteForm === true) return
        else {
            const newAddress = {
                id: uuidv4(),
                name: name,
                surname: surname,
                address: address,
                city: city,
                postcode: postcode,
                region: region,
                country: country,
            }
            const response = await axios.patch(`http://localhost:3000/api/users/${user._id}`, {
                addresses: [...user.addresses, { ...newAddress }]
            })
            const updatedUser = await axios.get(`http://localhost:3000/api/users/${user._id}`)
            setUser(updatedUser.data);
            resetInputs();
        }
    }

    return (
        <div className="AddressForm">
            <span className="AddressForm-title">ADD ADDRESS</span>
            <form onSubmit={addAddress} className="AddressForm-form">
                <input
                    style={{ border: incompleteForm === false ? "1px solid #007f5f" : undefined }}
                    onChange={handleName}
                    type="text"
                    name="name"
                    id="name"
                    className="long-input"
                    placeholder="Name"
                    value={name}
                />
                <input
                    style={{ border: incompleteForm === false ? "1px solid #007f5f" : undefined }}
                    onChange={handleSurname}
                    type="text"
                    name="surname"
                    id="surname"
                    className="long-input"
                    placeholder="Surname"
                    value={surname}
                />
                <input
                    style={{ border: incompleteForm === false ? "1px solid #007f5f" : undefined }}
                    onChange={handleAddress}
                    type="text"
                    name="address"
                    id="address"
                    className="long-input"
                    placeholder="Address"
                    value={address}
                />
                <div className="AddressForm-input-box">
                    <input
                        style={{ border: incompleteForm === false ? "1px solid #007f5f" : undefined }}
                        onChange={handleCity}
                        type="text"
                        name="city"
                        id="city"
                        className="short-input"
                        placeholder="City"
                        value={city}
                    />
                    <input
                        style={{ border: incompleteForm === false ? "1px solid #007f5f" : undefined }}
                        onChange={handlePostcode}
                        type="text"
                        name="postcode"
                        id="postcode"
                        className="short-input"
                        placeholder="Postcode"
                        value={postcode}
                    />
                </div>
                <div className="AddressForm-input-box">
                    <input
                        style={{ border: incompleteForm === false ? "1px solid #007f5f" : undefined }}
                        onChange={handleRegion}
                        type="text"
                        name="state"
                        id="state"
                        className="short-input"
                        placeholder="State/Region"
                        value={region}
                    />
                    <input
                        style={{ border: incompleteForm === false ? "1px solid #007f5f" : undefined }}
                        onChange={handleCountry}
                        type="text"
                        name="nation"
                        id="nation"
                        className="short-input"
                        placeholder="Country"
                        value={country}
                    />
                </div>
                <button type="submit" className="AddressForm-btn">ADD <i className="fa-solid fa-plus"></i></button>
            </form>

        </div>
    )
}

export default AddressForm;
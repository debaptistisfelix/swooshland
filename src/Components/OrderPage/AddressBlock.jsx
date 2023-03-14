import "../OrderPage/AddressBlock.css";

function AddressBlock({ item, selectAddress }) {
    const { name, surname, address, city, postcode, region, country } = item;
    return (
        <div className="AddressBlock">
            <input
                onClick={() => { selectAddress(event) }}
                className="AddressBlock-input"
                type="radio"
                name="addressChoice"
                value={JSON.stringify(item)} />
            <div className="Address-box">
                <div>{name} {surname}</div>
                <div>{address}</div>
                <div>{city}, {postcode}</div>
                <div>{region}</div>
                <div>{country}</div>
            </div>

        </div>
    )
}

export default AddressBlock;
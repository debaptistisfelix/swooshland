import "../ProfilePage/AddressBlock.css";

function AddressBlock() {
    return (
        <div className="AddressBlock">
            <i className="pin fa-solid fa-location-crosshairs"></i>
            <div className="AddressBlock-infos">
                <span className="AddressBlock-info">Felix De Baptistis</span>
                <span className="AddressBlock-info">Vicolo Bianco 13</span>
                <span className="AddressBlock-info">Bologna, 40139</span>
                <span className="AddressBlock-info">Italy</span>
            </div>
            <input type="radio" />
        </div>
    )
}

export default AddressBlock;
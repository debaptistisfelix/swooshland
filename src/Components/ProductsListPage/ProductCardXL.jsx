import "../ProductsListPage/ProductCardXL.css";

function ProductCardXL({ model, name, imgSrc, price, palette }) {
    return (
        <div className="ProductCardXL">
            <div className="ProductCardXL-img-box">
                <img className="ProductCardXL-img" alt="item" src={imgSrc} />
                <div className="ProductCardXL-text-pin"></div>
            </div>
            <div className="ProductCardXL-text-box">
                <div className="ProductCardXL-text-up">
                    <span className="ProductCardXL-model">{model}</span>
                    <span className="ProductCardXL-price">${price}0</span>
                </div>
                <div className="ProductCardXL-text-down">
                    <span className="ProductCardXL-name">{name}</span>
                    {/* <div className="ProductCardXl-palette">
                        <div
                            style={{ backgroundColor: `${palette[2].hex}` }}
                            className="ProductCardXL-color"></div>
                        <div
                            style={{ backgroundColor: `${palette[1].hex}` }}
                            className="ProductCardXL-color"></div>
                        <div
                            style={{ backgroundColor: `${palette[0].hex}` }}
                            className="ProductCardXL-color"></div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ProductCardXL;
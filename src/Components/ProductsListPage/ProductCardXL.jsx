import "../ProductsListPage/ProductCardXL.css";

function ProductCardXL({ model, name, imgSrc, price }) {
    return (
        <div className="ProductCardXL">
            <div className="ProductCardXL-img-box">
                <img className="ProductCardXL-img" alt="item" src={imgSrc} />
                <div className="ProductCardXL-text-pin"></div>
            </div>
            <div className="ProductCardXL-text-box">
                <div className="ProductCardXL-text-up">
                    <span className="ProductCardXL-model">{model}</span>
                    <span className="ProductCardXL-price">${price}</span>
                </div>
                <div className="ProductCardXL-text-down">
                    <span className="ProductCardXL-name">{name}</span>
                    {/*                     <span className="ProductsCardXL-add-btn"><i className="fa-solid fa-cart-plus"></i></span> */}
                </div>
            </div>
        </div>
    )
}

export default ProductCardXL;
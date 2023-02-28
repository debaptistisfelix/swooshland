import "./ProductCard2.css";

function ProductCard2({ model, name, imgSrc, price }) {
    return (
        <div className="ProductCard2">
            <div className="ProductCard2-img-box">
                <img className="ProductCard2-img" alt="item" src={imgSrc} />
            </div>
            <div className="ProductCard2-text-box">
                <div className="ProductCard2-text-up">
                    <span className="ProductCard2-model">{model}</span>
                    <span className="ProductCard2-price">${price}</span>
                </div>
                <div className="ProductCard2-text-down">
                    <span className="ProductCard2-name">{name}</span>
                    <div className="ProductCard2-palette">
                        {/* <div style={{ backgroundColor: "pink" }} className="ProductCard-palette-color"></div>
                        <div style={{ backgroundColor: "lightblue" }} className="ProductCard-palette-color"></div>
                        <div style={{ backgroundColor: "blue" }} className="ProductCard-palette-color"></div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard2; 
import "./ProductCard.css";

function ProductCard() {
    return (
        <div className="ProductCard">
            <div className="ProductCard-img-box">
                <img className="ProductCard-img" alt="item" src="/af1-sky.jpg" />
            </div>
            <div className="ProductCard-text-box">
                <div className="ProductCard-text-up">
                    <span className="ProductCard-model">NIKE AIR FORCE 1</span>
                    <span className="ProductCard-price">$169</span>
                </div>
                <div className="ProductCard-text-down">
                    <span className="ProductCard-name">SKY CAMU</span>
                    <div className="ProductCard-palette">
                        <div style={{ backgroundColor: "pink" }} className="ProductCard-palette-color"></div>
                        <div style={{ backgroundColor: "lightblue" }} className="ProductCard-palette-color"></div>
                        <div style={{ backgroundColor: "blue" }} className="ProductCard-palette-color"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard; 
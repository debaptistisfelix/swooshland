import "./ProductCard2.css";

function ProductCard2({ item }) {
    return (
        <div className="ProductCard2">
            <div className="ProductCard2-img-box">
                <img className="ProductCard2-img" alt="item" src={item.images[0].imgSrc} />
            </div>
            <div className="ProductCard2-text-box">
                <div className="ProductCard2-text-up">
                    <span className="ProductCard2-model">{item.model}</span>
                    <span className="ProductCard2-price">${item.price}</span>
                </div>
                <div className="ProductCard2-text-down">
                    <span className="ProductCard2-name">{item.name}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard2; 
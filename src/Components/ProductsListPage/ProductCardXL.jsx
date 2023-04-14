import "../ProductsListPage/ProductCardXL.css";
import fullStarsCount from "../Hooks/useDisplayStars";

function ProductCardXL({ model, name, imgSrc, price, ratingsAvg, item }) {
  return (
    <div className="ProductCardXL">
      <div className="ProductCardXL-img-box">
        <img className="ProductCardXL-img" alt="item" src={imgSrc} />
      </div>
      <div className="ProductCardXL-text-box">
        <div className="ProductCardXL-text-up">
          <span className="ProductCardXL-model">{model}</span>
          <span className="ProductCardXL-price">${price}0</span>
        </div>
        <div className="ProductCardXL-text-down">
          <span className="ProductCardXL-name">{name}</span>
          <div className="ProductCardXL-stars-container">
            {item && fullStarsCount(item, ratingsAvg)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardXL;

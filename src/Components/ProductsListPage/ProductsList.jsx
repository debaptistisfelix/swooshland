import "../ProductsListPage/ProductsList.css";
import ProductCard2 from "../ProductCard2";
import ProductCardXL from "./ProductCardXL";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ItemsContext } from "../Context/ItemsContext";
import { memo } from "react";

function ProductsList({ path }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const { filteredItems, error, isLoading } = useContext(ItemsContext);

  let list = filteredItems.map((item) => {
    return (
      <Link
        key={item._id}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="ProductCardXL-container"
        to={`/${path}/${item._id}`}
      >
        <ProductCardXL
          item={item}
          ratingsAvg={item.ratingsAverage}
          ratingsQty={item.ratingsQuantity}
          name={item.name}
          model={item.model}
          imgSrc={item.images[0].imgSrc}
          price={item.price}
          key={item._id}
          palette={item.paletteColors}
        />
      </Link>
    );
  });
  return (
    <div className="ProductsList" data-aos="fade-up">
      <span className="results-amount">
        Generated results: (<b>{filteredItems.length}</b>)
      </span>
      <div className="ProductsList-list-content">{list}</div>
    </div>
  );
}

export default memo(ProductsList);

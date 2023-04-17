import "../ProductsListPage/ProductsDrawer.css";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function ProductsDrawer({
  openDrawer,
  toggleDrawer,
  categories,
  sortByBrand,
  drawerImg,
  filterByRating,
}) {
  const { listedItems } = useContext(AppContext);

  let drawerClass = "no-drawer";
  if (openDrawer === true) {
    drawerClass = "open-drawer";
  } else if (openDrawer === false) {
    drawerClass = "close-drawer";
  } else {
    drawerClass = "no-drawer";
  }

  let list = categories.map((categ) => {
    return (
      <span
        key={uuidv4()}
        onClick={() => sortByBrand(categ.categ)}
        className="ProductsDrawer-category-model"
      >
        {categ.categ}
        <span className="ProductsDrawer-model-qty">({categ.qty})</span>
      </span>
    );
  });
  return (
    <div className={`ProductsDrawer ${drawerClass}`}>
      <div
        style={{ backgroundImage: `url(${drawerImg})` }}
        className="ProductsDrawer-img-box"
      >
        <i
          onClick={toggleDrawer}
          className="drawer-closer fa-solid fa-xmark"
        ></i>
      </div>
      <div className="ProductsDrawer-category-box">
        <span className="ProductsDrawer-category-title">BY MODELS</span>
        <div className="ProductsDrawer-category-list">
          <span
            onClick={() => sortByBrand("")}
            className="ProductsDrawer-category-model"
          >
            ALL
            <span className="ProductsDrawer-model-qty">
              ({listedItems && listedItems.length})
            </span>
          </span>
          {list}
        </div>
      </div>
      <div className="ProductsDrawer-ratings-filter-box">
        <h5 className="ProductsDrawer-ratings-filter-title">BY RATING</h5>
        <div className="ProductsDrawer-ratings-box">
          <span
            onClick={() => {
              filterByRating(5);
            }}
            className="ProductsDrawer-rating-bar"
          >
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <span
            onClick={() => {
              filterByRating(4);
            }}
            className="ProductsDrawer-rating-bar"
          >
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <span
            onClick={() => {
              filterByRating(3);
            }}
            className="ProductsDrawer-rating-bar"
          >
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <span
            onClick={() => {
              filterByRating(2);
            }}
            className="ProductsDrawer-rating-bar"
          >
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <span
            onClick={() => {
              filterByRating(1);
            }}
            className="ProductsDrawer-rating-bar"
          >
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductsDrawer;

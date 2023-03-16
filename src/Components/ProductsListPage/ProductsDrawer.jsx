import "../ProductsListPage/ProductsDrawer.css";
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react";
import { ItemsContext } from "../Context/ItemsContext";
import Slider from "./Slider";

function ProductsDrawer({ openDrawer, toggleDrawer, categories, sortByBrand, drawerImg }) {
    const { listedItems } = useContext(ItemsContext);

    let drawerClass = "no-drawer"
    if (openDrawer === true) {
        drawerClass = "open-drawer"
    } else if (openDrawer === false) {
        drawerClass = "close-drawer"
    } else {
        drawerClass = "no-drawer"
    }

    let list = categories.map(categ => {
        return <span
            key={uuidv4()}
            onClick={() => sortByBrand(categ.categ)}
            className="ProductsDrawer-category-model">
            {categ.categ}
            <span className="ProductsDrawer-model-qty">({categ.qty})</span>
        </span>
    })
    return (
        <div className={`ProductsDrawer ${drawerClass}`}>
            <div
                style={{ backgroundImage: `url(${drawerImg})` }}
                className="ProductsDrawer-img-box">
                <i
                    onClick={toggleDrawer}
                    className="drawer-closer fa-solid fa-xmark"></i>
            </div>
            <div className="ProductsDrawer-category-box">
                <span className="ProductsDrawer-category-title">
                    SNEAKER MODELS
                </span>
                <div className="ProductsDrawer-category-list">
                    <span
                        onClick={() => sortByBrand("")}
                        className="ProductsDrawer-category-model">
                        ALL
                        <span className="ProductsDrawer-model-qty">({listedItems.length})</span>
                    </span>
                    {list}
                </div>
            </div>
            {/* <div className="ProductsDrawer-slider-box">
                <Slider />
            </div> */}
        </div>
    )
}

export default ProductsDrawer;
import "../ProductsListPage/ProductsDisplayer.css"
import ProductsBanner from "./ProductsBanner";
import ProductsList from "./ProductsList";

function ProductsDisplayer({ openDrawer, toggleDrawer, toggleSortModal, sortModal, listedItems, sortByAZ, sortByZA, sortByAsc, sortByDesc, name }) {
    let displayerStatus;
    if (openDrawer === true) {
        displayerStatus = "small-size-width"
    } else if (openDrawer === false) {
        displayerStatus = "max-size-width"
    } else {
        displayerStatus = undefined;
    }
    return (
        <div className={`ProductsDisplayer ${displayerStatus}`}>
            <ProductsBanner
                openDrawer={openDrawer}
                toggleDrawer={toggleDrawer}
                toggleSortModal={toggleSortModal}
                sortModal={sortModal}
                sortByAZ={sortByAZ}
                sortByZA={sortByZA}
                sortByDesc={sortByDesc}
                sortByAsc={sortByAsc}
                name={name}
            />
            <ProductsList
                listedItems={listedItems}
            />
        </div>
    )
}

export default ProductsDisplayer;
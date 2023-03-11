import "../ProductsListPage/ProductsDisplayer.css"
import ProductsBanner from "./ProductsBanner";
import ProductsList from "./ProductsList";

function ProductsDisplayer({ path, openDrawer, toggleDrawer, toggleSortModal, sortModal, name }) {
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
                name={name}
            />
            <ProductsList
                path={path}
            />
        </div>
    )
}

export default ProductsDisplayer;
import "../ProductsListPage/ProductsDrawer.css";

function ProductsDrawer({ items, openDrawer, toggleDrawer, categories, listedItems, sortByBrand, drawerImg }) {
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
            onClick={() => sortByBrand(`${categ.categ}`)}
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
                        <span className="ProductsDrawer-model-qty">({items.length})</span>
                    </span>
                    {list}
                </div>
            </div>
        </div>
    )
}

export default ProductsDrawer;
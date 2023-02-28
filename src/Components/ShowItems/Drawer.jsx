import "../ShowItems/Drawer.css";

function Drawer({ drawerStatus, sortByBrand, toggleDrawer, categories, items }) {
    let drawerClass = "no-drawer"
    if (drawerStatus === true) {
        drawerClass = "open-drawer"
    } else if (drawerStatus === false) {
        drawerClass = "close-drawer"
    } else {
        drawerClass = "no-drawer"
    }



    let categoryList = categories.map((categ, i) => {
        return <span
            onClick={() => sortByBrand(`${categ.categ}`)}
            className="Drawer-category-model">
            {categ.categ}
            <span className="Drawer-model-qty">({categ.qty})</span>
        </span>
    })


    /* drawerStatus === true ? drawerClass = "open-drawer" : drawerClass = "close-drawer" */
    return (
        <div className={`Drawer ${drawerClass}`} /* className="Drawer" */>
            <div className="Drawer-img-box">
                <i
                    onClick={toggleDrawer}
                    className="fa-solid fa-xmark drawer-closer"></i>
                {/* <img src="dior.jpg" /> */}
            </div>
            <div className="Drawer-category-box">
                <span className="Drawer-category-title">
                    SNEAKER MODELS
                </span>
                <div className="Drawer-category-list">
                    <span
                        onClick={() => sortByBrand(" ")}
                        className="Drawer-category-model">
                        ALL
                        <span className="Drawer-model-qty">({items.length})</span>
                    </span>
                    {categoryList}
                </div>
            </div>

        </div >
    )
}

export default Drawer;
import "../ShowItems/Drawer.css";

function Drawer({ drawerStatus, sortByBrand, toggleDrawer }) {
    let drawerClass = "no-drawer"
    if (drawerStatus === true) {
        drawerClass = "open-drawer"
    } else if (drawerStatus === false) {
        drawerClass = "close-drawer"
    } else {
        drawerClass = "no-drawer"
    }


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
                        <span className="Drawer-model-qty">(25)</span>
                    </span>
                    <span
                        onClick={() => sortByBrand("AIR FORCE")}
                        className="Drawer-category-model">
                        NIKE AIR FORCE
                        <span className="Drawer-model-qty">(11)</span>
                    </span>
                    <span className="Drawer-category-model"
                        onClick={() => sortByBrand("JORDAN 1 MID")}>
                        NIKE AIR JORDAN MID
                        <span className="Drawer-model-qty">(8)</span>
                    </span>
                    <span className="Drawer-category-model"
                        onClick={() => sortByBrand("JORDAN 1 LOW")}>
                        NIKE JORDAN 1 LOW
                        <span className="Drawer-model-qty">(2)</span>
                    </span>
                    <span className="Drawer-category-model"
                        onClick={() => sortByBrand("PUMA")}>

                        PUMA
                        <span className="Drawer-model-qty">(1)</span>
                    </span>
                    <span className="Drawer-category-model"
                        onClick={() => sortByBrand("FILA")}>

                        FILA
                        <span className="Drawer-model-qty">(1)</span>
                    </span>
                    <span className="Drawer-category-model"
                        onClick={() => sortByBrand("ADIDAS")}>

                        ADIDAS
                        <span className="Drawer-model-qty">(1)</span>
                    </span>
                </div>
            </div>

        </div >
    )
}

export default Drawer;
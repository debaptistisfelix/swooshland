import "../ShowItems/Drawer.css";

function Drawer({ drawerStatus, toggleDrawer }) {
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

        </div >
    )
}

export default Drawer;
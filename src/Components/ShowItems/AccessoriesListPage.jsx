import "../ShowItems/AccessoriesListPage.css";
import Drawer from "./Drawer";
import { useState, useEffect } from "react";
import ProductCard2 from "../ProductCard2";
import ExpandibleContainer from "./ExpandibleContainer";

const items = [
    { model: "M.H.A. BACKPACK", name: "HIMIKO TOGA", imgSrc: "/list/toga.jpg", price: "89.90" },
    { model: "LAMU' BENTO", name: "LUNCHBOX", imgSrc: "/list/bento.jpg", price: "69.90" },
    { model: "WALLET", name: "NARUTO", imgSrc: "/list/naruto.jpg", price: "49.90" },
    { model: "WALLET", name: "GAARA", imgSrc: "/list/gaara.jpg", price: "49.90" },
    { model: "WALLET", name: "BERSERK", imgSrc: "/list/berserk.jpg", price: "49.90" },
    { model: "WALLET", name: "KAKASHI", imgSrc: "/list/kakashi.jpg", price: "49.90" },
]

const categories = [
    { categ: "BACKPACK", qty: 1 },
    { categ: "LUNCHBOX", qty: 1 },
    { categ: "WALLET", qty: 3 }
]

function AccessoriesListPage() {
    const [listedItems, setListedItems] = useState(items)
    const [openDrawer, setOpenDrawer] = useState("");
    const [openSort, setOpenSort] = useState(false);
    const [loadedPage, setLoadedPage] = useState(false);


    function toggleDrawer() {
        openDrawer === "" && setOpenDrawer(false);
        setOpenDrawer(!openDrawer);
    }

    function toggleSortMOdal(e) {
        e.stopPropagation();
        setOpenSort(!openSort);
    }

    function sortByBrand(brand) {
        let filteredList = items.filter(item => {
            return item.model.includes(brand)
        })
        setListedItems(filteredList);
        window.matchMedia("(max-width:767px)").matches && setOpenDrawer(false);
    }



    function sortByAsc() {
        const numAsc = [...listedItems].sort((a, b) => a.price - b.price)
        setListedItems(numAsc);
    }

    function sortByDesc() {
        const numDesc = [...listedItems].sort((a, b) => b.price - a.price)
        setListedItems(numDesc);
    }

    function sortByAZ() {
        const arrAZ = [...listedItems].sort((a, b) => a.name > b.name ? 1 : -1)
        setListedItems(arrAZ);
    }

    function sortByZA() {
        const arrZA = [...listedItems].sort((a, b) => a.name > b.name ? -1 : 1)
        setListedItems(arrZA);
    }



    function loadPage() {
        setTimeout(() => {
            setLoadedPage(true);
        }, 600);
    }
    loadPage();


    let boxStatus;
    if (openDrawer === true) {
        boxStatus = "small-size-width"
    } else if (openDrawer === false) {
        boxStatus = "max-size-width"
    } else {
        boxStatus = undefined;
    }


    let sortModal;
    openSort === true ? sortModal = "show-sort-modal" : sortModal = "hide-sort-modal"



    let displayedItems = listedItems.map(item => {
        return <ProductCard2
            key={item.name}
            imgSrc={item.imgSrc}
            model={item.model}
            name={item.name}
            price={item.price}
        />
    })

    function closeSortModal(e) {
        let usermodal = document.querySelector(".ItemListPage-sort-modal");
        e.target !== usermodal ? setOpenSort(false) : undefined;
    }



    return (
        <div className="AccessoriesListPage-max-container"
            onClick={closeSortModal}
        >
            {loadedPage === true
                ? <div className="AccessoriesListPage">
                    <Drawer
                        toggleDrawer={toggleDrawer}
                        sortByBrand={sortByBrand}
                        drawerStatus={openDrawer}
                        categories={categories}
                        items={listedItems} />
                    <ExpandibleContainer
                        boxStatus={boxStatus}
                        toggleDrawer={toggleDrawer}
                        openDrawer={openDrawer}
                        toggleSortMOdal={toggleSortMOdal}
                        sortModal={sortModal}
                        sortByAZ={sortByAZ}
                        sortByZA={sortByZA}
                        sortByAsc={sortByAsc}
                        sortByDesc={sortByDesc}
                        listedItems={listedItems}
                        displayedItems={displayedItems}
                        category="Accessories"
                    />
                </div>
                : <div className="AccessoriesListPage-loader-box">
                    <div className="loader-container">
                        <div className="loader"></div>
                        <span className="loader-text">LOADING</span>
                    </div>
                </div>}
        </div>
    )
}

export default AccessoriesListPage;
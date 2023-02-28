import "../ShowItems/ItemListPage.css";
import Drawer from "./Drawer";
import { useState, useEffect } from "react";
import ProductCard2 from "../ProductCard2";
import ExpandibleContainer from "./ExpandibleContainer";

const items = [
    { model: "NIKE AIR FORCE 1", name: "DOODLES", imgSrc: "/list/doodles.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "DRAGON V2", imgSrc: "/list/dragonv2.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "DRAGON V1", imgSrc: "/list/dragonv1.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "HEAVEN & HELL", imgSrc: "/list/heaven.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "KRAKEN 1994", imgSrc: "/list/kraken1994.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "L.A. KRAKEN", imgSrc: "/list/krakenla.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "LEO KAWAI", imgSrc: "/list/kawai.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "LEOPARD", imgSrc: "/list/leo.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "PURPLE DRIP", imgSrc: "/list/purple.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "SKY CAMU", imgSrc: "/list/sky.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "JOLLY", imgSrc: "/list/jolly.jpg", price: "189.90" },

    { model: "JORDAN 1 MID", name: "PINK DIOR", imgSrc: "/list/dior.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "LEMON", imgSrc: "/list/lemon.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "OG-ORANGE", imgSrc: "/list/og.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "SIN OF RAGE", imgSrc: "/list/ira.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "SIN OF PRIDE", imgSrc: "/list/superbia.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "BREEZE", imgSrc: "/list/breeze.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "SUNDAY", imgSrc: "/list/sunday.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "SIN OF LUST", imgSrc: "/list/lust.jpg", price: "249.90" },

    { model: "JORDAN 1 LOW", name: "EAZY", imgSrc: "/list/eazy.jpg", price: "249.90" },
    { model: "JORDAN 1 LOW", name: "MIAMI", imgSrc: "/list/miami.jpg", price: "249.90" },

    { model: "ADIDAS STAN SMITH", name: "SPIDEY", imgSrc: "/list/spidey.jpg", price: "159.90" },
    { model: "ADIDAS STAN SMITH", name: "MINIONS", imgSrc: "/list/minions.jpg", price: "159.90" },

    { model: "FILA RAPTOR", name: "SAFARI", imgSrc: "/list/fila.jpg", price: "189.90" },
    { model: "PUMA CALI", name: "CLEOPATRA", imgSrc: "/list/puma.jpg", price: "189.90" },
]

const categories = [
    { categ: "AIR FORCE 1", qty: 11 },
    { categ: "JORDAN 1 MID", qty: 8 },
    { categ: "JORDAN 1 LOW", qty: 2 },
    { categ: "PUMA", qty: 1 },
    { categ: "FILA", qty: 1 },
    { categ: "ADIDAS", qty: 1 },
];



function ItemListPage() {
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
        <div className="ItemListPage-max-container"
            onClick={closeSortModal}
        >
            {loadedPage === true
                ? <div className="ItemListPage">
                    <Drawer
                        toggleDrawer={toggleDrawer}
                        sortByBrand={sortByBrand}
                        drawerStatus={openDrawer}
                        categories={categories}
                        items={listedItems}
                    />

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
                        category="Sneakers"
                    />
                </div>
                : <div className="ItemListPage-loader-box">
                    <div className="loader-container">
                        <div className="loader"></div>
                        <span className="loader-text">LOADING</span>
                    </div>
                </div>}
        </div>
    )
}

export default ItemListPage;
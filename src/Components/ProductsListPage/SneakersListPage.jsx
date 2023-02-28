import "./SneakersListPage.css";
import { useState, useEffect } from "react";
import ProductsDrawer from "./ProductsDrawer";
import ProductsDisplayer from "./ProductsDisplayer";

const items = [
    { model: "NIKE AIR FORCE 1", category: "NIKE AIR FORCE 1", name: "DOODLES", imgSrc: "/list/doodles.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", category: "NIKE AIR FORCE 1", name: "DRAGON V2", imgSrc: "/list/dragonv2.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", category: "NIKE AIR FORCE 1", name: "DRAGON V1", imgSrc: "/list/dragonv1.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", category: "NIKE AIR FORCE 1", name: "HEAVEN & HELL", imgSrc: "/list/heaven.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", category: "NIKE AIR FORCE 1", name: "KRAKEN 1994", imgSrc: "/list/kraken1994.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", category: "NIKE AIR FORCE 1", name: "L.A. KRAKEN", imgSrc: "/list/krakenla.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", category: "NIKE AIR FORCE 1", name: "LEO KAWAI", imgSrc: "/list/kawai.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", category: "NIKE AIR FORCE 1", name: "LEOPARD", imgSrc: "/list/leo.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", category: "NIKE AIR FORCE 1", name: "PURPLE DRIP", imgSrc: "/list/purple.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", category: "NIKE AIR FORCE 1", name: "SKY CAMU", imgSrc: "/list/sky.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", category: "NIKE AIR FORCE 1", name: "JOLLY", imgSrc: "/list/jolly.jpg", price: "189.90" },

    { model: "JORDAN 1 MID", category: "NIKE AIR JORDAN 1 MID", name: "PINK DIOR", imgSrc: "/list/dior.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", category: "NIKE AIR JORDAN 1 MID", name: "LEMON", imgSrc: "/list/lemon.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", category: "NIKE AIR JORDAN 1 MID", name: "OG-ORANGE", imgSrc: "/list/og.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", category: "NIKE AIR JORDAN 1 MID", name: "SIN OF RAGE", imgSrc: "/list/ira.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", category: "NIKE AIR JORDAN 1 MID", name: "SIN OF PRIDE", imgSrc: "/list/superbia.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", category: "NIKE AIR JORDAN 1 MID", name: "BREEZE", imgSrc: "/list/breeze.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", category: "NIKE AIR JORDAN 1 MID", name: "SUNDAY", imgSrc: "/list/sunday.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", category: "NIKE AIR JORDAN 1 MID", name: "SIN OF LUST", imgSrc: "/list/lust.jpg", price: "249.90" },

    { model: "JORDAN 1 LOW", category: "NIKE AIR JORDAN 1 LOW", name: "EAZY", imgSrc: "/list/eazy.jpg", price: "249.90" },
    { model: "JORDAN 1 LOW", category: "NIKE AIR JORDAN 1 LOW", name: "MIAMI", imgSrc: "/list/miami.jpg", price: "249.90" },

    { model: "ADIDAS STAN SMITH", category: "ADIDAS", name: "SPIDEY", imgSrc: "/list/spidey.jpg", price: "159.90" },
    { model: "ADIDAS STAN SMITH", category: "ADIDAS", name: "MINIONS", imgSrc: "/list/minions.jpg", price: "159.90" },

    { model: "FILA RAPTOR", category: "FILA", name: "SAFARI", imgSrc: "/list/fila.jpg", price: "189.90" },
    { model: "PUMA CALI", category: "PUMA", name: "CLEOPATRA", imgSrc: "/list/puma.jpg", price: "189.90" },
]

const categories = [
    { categ: "NIKE AIR FORCE 1", qty: 11 },
    { categ: "NIKE AIR JORDAN 1 MID", qty: 8 },
    { categ: "NIKE AIR JORDAN 1 LOW", qty: 2 },
    { categ: "PUMA", qty: 1 },
    { categ: "FILA", qty: 1 },
    { categ: "ADIDAS", qty: 1 },
];
const drawerImg = "dragon-img.jpg"
const ProductName = "Sneakers"


function ItemListPage() {

    // ITEMS STATE
    const [listedItems, setListedItems] = useState(items)



    // DRAWER OPEN/CLOSE STATE
    const [openDrawer, setOpenDrawer] = useState("");
    function toggleDrawer() {
        openDrawer === "" && setOpenDrawer(false);
        setOpenDrawer(!openDrawer);
    }

    // SORT MODAL OPEN/CLOSE STATE
    const [openSort, setOpenSort] = useState(false);
    let sortModal;
    openSort === true ? sortModal = "show-sort-modal" : sortModal = "hide-sort-modal"
    function toggleSortModal(e) {
        e.stopPropagation();
        setOpenSort(!openSort);
    }

    // SORT PRODUCTS BY BRAND NAME
    function sortByBrand(brand) {
        let filteredList = items.filter(item => {
            return item.category.includes(brand)
        })
        setListedItems(filteredList);
        window.matchMedia("(max-width:767px)").matches && setOpenDrawer(false);
    }

    // SORTING FUNCTION FOR SORT MODAL 
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

    // SHOW LOADER UNTIL EVERYTHING IS READY
    const [loadedPage, setLoadedPage] = useState(false);
    function loadPage() {
        setTimeout(() => {
            setLoadedPage(true);
        }, 600);
    }
    loadPage();


    return (

        <div className="ProductsListPage">
            {loadedPage === true
                ? <div className="ProductsListPage-box">
                    <ProductsDrawer
                        openDrawer={openDrawer}
                        toggleDrawer={toggleDrawer}
                        sortByBrand={sortByBrand}
                        categories={categories}
                        listedItems={listedItems}
                        items={items}
                        drawerImg={drawerImg}
                    />
                    <ProductsDisplayer
                        openDrawer={openDrawer}
                        toggleDrawer={toggleDrawer}
                        toggleSortModal={toggleSortModal}
                        sortModal={sortModal}
                        listedItems={listedItems}
                        sortByAZ={sortByAZ}
                        sortByZA={sortByZA}
                        sortByAsc={sortByAsc}
                        sortByDesc={sortByDesc}
                        name={ProductName}
                    />
                </div>
                : <div className="ProductsListPage-loader-box">
                    <div className="loader-container">
                        <div className="loader"></div>
                        <span className="loader-text">LOADING</span>
                    </div>
                </div>
            }

        </div>
    )
}

export default ItemListPage;



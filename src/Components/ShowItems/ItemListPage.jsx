import "../ShowItems/ItemListPage.css";
import Drawer from "./Drawer";
import { useState, useEffect } from "react";
import ProductCard2 from "../ProductCard2";
import AOS from 'aos';
import 'aos/dist/aos.css';

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



function ItemListPage() {
    const [listedItems, setListedItems] = useState(items)
    const [openDrawer, setOpenDrawer] = useState("");
    const [openSort, setOpenSort] = useState(false);
    const [loadedPage, setLoadedPage] = useState(false);

    useEffect(() => {
        AOS.init();
    }, [])

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
        setOpenDrawer(false);
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

    /*  openDrawer === true ? boxStatus = "small-size-width" : boxStatus = "max-size-width" */
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
                        drawerStatus={openDrawer} />
                    <div className={`ItemListPage-box ${boxStatus}`}>
                        <div className="ItemListPage-banner" data-aos="fade-down">
                            <span className="ItemListPage-title">SNEAKERS</span>
                            <div className="ItemListPage-control-box">
                                <span
                                    onClick={toggleDrawer}
                                    className="ItemListPage-control-tool filter-status">
                                    {openDrawer === true ? "HIDE " : "SHOW "}

                                    FILTERS
                                    <i className="fa-solid fa-sliders"></i>
                                </span>
                                <span onClick={toggleSortMOdal} className="ItemListPage-control-tool sort-status">
                                    SORT BY
                                    <i className="fa-solid fa-sort-down"></i>
                                    <div className={`ItemListPage-sort-modal ${sortModal}`}>
                                        <span
                                            onClick={sortByAZ}
                                            className="sort-modal-option">NAME (A-Z)</span>
                                        <span
                                            onClick={sortByZA}
                                            className="sort-modal-option">NAME (Z-A)</span>
                                        <span
                                            onClick={sortByAsc}
                                            className="sort-modal-option">PRICE (<i className="fa-solid fa-arrow-up"></i>)</span>
                                        <span
                                            onClick={sortByDesc}
                                            className="sort-modal-option">PRICE (<i className="fa-solid fa-arrow-down"></i>)</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="ItemListPage-list-container" data-aos="flip-down">
                            <span className="results-amount">
                                Sneaker results: (<b>{listedItems.length}</b>)
                            </span>
                            <div className="ItemListPage-list-content">
                                {displayedItems}
                            </div>
                        </div>
                    </div>
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
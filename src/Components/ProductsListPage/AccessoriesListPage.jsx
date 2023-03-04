import "../ProductsListPage/AccessoriesListPage.css";
import { useState, useEffect } from "react";
import ProductsDrawer from "./ProductsDrawer";
import ProductsDisplayer from "./ProductsDisplayer";
import axios from "axios";

/* const items = [
    { model: "M.H.A. BACKPACK", category: "BACKPACK", name: "HIMIKO TOGA", imgSrc: "/list/toga.jpg", price: "89.90" },
    { model: "LUNCHBOX", category: "LUNCHBOX", name: "LAMU' BENTO", imgSrc: "/list/bento.jpg", price: "69.90" },
    { model: "WALLET", category: "WALLET", name: "NARUTO", imgSrc: "/list/naruto.jpg", price: "49.90" },
    { model: "WALLET", category: "WALLET", name: "GAARA", imgSrc: "/list/gaara.jpg", price: "49.90" },
    { model: "WALLET", category: "WALLET", name: "BERSERK", imgSrc: "/list/berserk.jpg", price: "49.90" },
    { model: "WALLET", category: "WALLET", name: "KAKASHI", imgSrc: "/list/kakashi.jpg", price: "49.90" },
]; */
const categories = [
    { categ: "BACKPACK", qty: 1 },
    { categ: "LUNCHBOX", qty: 1 },
    { categ: "WALLET", qty: 3 }
];
const drawerImg = "dragon-img.jpg"
const ProductName = "Accessories"
const path = "accessories";

function AccessoriesListPage() {

    useEffect(() => {
        const fetchSneakers = async () => {
            const response = await axios.get("http://localhost:3000/api/accessories");
            const results = response.data;
            console.log(results);
            setListedItems(results);
            setFilteredItems(results);
        }
        fetchSneakers();
    }, []);

    // ITEMS STATE
    const [listedItems, setListedItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([]);



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
        let filteredList = listedItems.filter(item => {
            return item.category.includes(brand)
        })
        console.log(filteredList)
        setFilteredItems(filteredList);
        window.matchMedia("(max-width:767px)").matches && setOpenDrawer(false);
    }

    // SORTING FUNCTION FOR SORT MODAL 
    function sortByAsc() {
        const numAsc = [...filteredItems].sort((a, b) => a.price - b.price)
        setFilteredItems(numAsc);
    }

    function sortByDesc() {
        const numDesc = [...filteredItems].sort((a, b) => b.price - a.price)
        setFilteredItems(numDesc);
    }

    function sortByAZ() {
        const arrAZ = [...filteredItems].sort((a, b) => a.name > b.name ? 1 : -1)
        setFilteredItems(arrAZ);
    }

    function sortByZA() {
        const arrZA = [...filteredItems].sort((a, b) => a.name > b.name ? -1 : 1)
        setFilteredItems(arrZA);
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
                        path={path}
                        filteredItems={filteredItems}
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

export default AccessoriesListPage;
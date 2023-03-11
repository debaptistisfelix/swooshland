import "./SneakersListPage.css";
import { useState, useEffect } from "react";
import ProductsDrawer from "./ProductsDrawer";
import ProductsDisplayer from "./ProductsDisplayer";
import axios from "axios";
import useLoadedState from "../Hooks/useLoadedState";


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
const path = "products"


function ItemListPage() {

    useEffect(() => {
        const fetchSneakers = async () => {
            const response = await axios.get("http://localhost:3000/api/products");
            const results = response.data;
            const sneakerResults = results.filter(item => {
                return item.tag === "sneakers";
            })
            setListedItems(sneakerResults);
            setFilteredItems(sneakerResults);
        }
        fetchSneakers();
    }, []);

    // ITEMS STATE
    const [listedItems, setListedItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([])



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

    const sortModalEl = document.querySelector(".ProductsBanner-sort-modal");
    const body = document.querySelector("body");
    body.addEventListener("click", (e) => {
        e.target !== sortModalEl && setOpenSort(false);
    })

    // SORT PRODUCTS BY BRAND NAME
    function sortByBrand(brand) {
        let filteredList = listedItems.filter(item => {
            return item.category.includes(brand);
        })
        /*  setFilteredItems([...filteredList]); */
        console.log(filteredList)
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
    const [loadedPage, setLoadedPage, loadPage] = useLoadedState(false);
    loadPage(600);


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

export default ItemListPage;



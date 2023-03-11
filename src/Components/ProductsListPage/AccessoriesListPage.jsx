import "../ProductsListPage/AccessoriesListPage.css";
import { useState, useEffect, useContext } from "react";
import { ItemsContext } from "../Context/ItemsContext";
import ProductsDrawer from "./ProductsDrawer";
import ProductsDisplayer from "./ProductsDisplayer";
import axios from "axios";
import useLoadedState from "../Hooks/useLoadedState";


const categories = [
    { categ: "BACKPACK", qty: 1 },
    { categ: "LUNCHBOX", qty: 1 },
    { categ: "WALLET", qty: 3 }
];
const drawerImg = "dragon-img.jpg"
const ProductName = "Accessories"
const path = "products";

function AccessoriesListPage() {

    const { listedItems, setListedItems, filteredItems, setFilteredItems } = useContext(ItemsContext);

    useEffect(() => {
        const fetchSneakers = async () => {
            const response = await axios.get("http://localhost:3000/api/products");
            const results = response.data;
            const accessoriesResults = results.filter(item => {
                return item.tag === "accessories";
            })
            setListedItems(accessoriesResults);
            setFilteredItems(accessoriesResults);
        }
        fetchSneakers();
    }, []);





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
            return item.category.includes(brand)
        })
        console.log(filteredList)
        setFilteredItems(filteredList);
        window.matchMedia("(max-width:767px)").matches && setOpenDrawer(false);
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
                        drawerImg={drawerImg}

                    />
                    <ProductsDisplayer
                        openDrawer={openDrawer}
                        toggleDrawer={toggleDrawer}
                        toggleSortModal={toggleSortModal}
                        sortModal={sortModal}
                        name={ProductName}
                        path={path}

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
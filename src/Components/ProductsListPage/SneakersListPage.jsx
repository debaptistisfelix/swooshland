import "./SneakersListPage.css";
import { useState, useEffect, useContext, useCallback } from "react";
import ProductsDrawer from "./ProductsDrawer";
import ProductsDisplayer from "./ProductsDisplayer";
import axios from "axios";
import useLoadedState from "../Hooks/useLoadedState";
import { ItemsContext } from "../Context/ItemsContext";


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


function SneakersListPage() {


    const [openDrawer, setOpenDrawer] = useState("");
    const [openSort, setOpenSort] = useState(false);
    /*     const [loadedPage, setLoadedPage, loadPage] = useLoadedState(false); */
    const [loadedPage, setLoadedPage] = useState(false);

    const { listedItems, setListedItems, filteredItems, setFilteredItems } = useContext(ItemsContext);

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


    // DRAWER OPEN/CLOSE STATE

    function toggleDrawer() {
        openDrawer === "" && setOpenDrawer(false);
        setOpenDrawer(!openDrawer);
    }

    // SORT MODAL OPEN/CLOSE STATE


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

    // SHOW LOADER UNTIL EVERYTHING IS READY

    function loadPage() {
        setTimeout(() => {
            setLoadedPage(true);
        }, 600);
    }
    loadPage();

    let sortModal;
    openSort === true ? sortModal = "show-sort-modal" : sortModal = "hide-sort-modal"

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

export default SneakersListPage;



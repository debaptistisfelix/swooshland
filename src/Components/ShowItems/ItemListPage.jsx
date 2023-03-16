import "../ShowItems/ItemListPage.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ItemsContext } from "../Context/ItemsContext";
import ProductsDrawer from "../ProductsListPage/ProductsDrawer";
import ProductsDisplayer from "../ProductsListPage/ProductsDisplayer";



const categories = [
    { categ: "AIR FORCE 1", qty: 11 },
    { categ: "JORDAN 1 MID", qty: 8 },
    { categ: "JORDAN 1 LOW", qty: 2 },
    { categ: "PUMA", qty: 1 },
    { categ: "FILA", qty: 1 },
    { categ: "ADIDAS", qty: 1 },
];

const drawerImg = "dragon-img.jpg"
const ProductName = "Sneakers"
const path = "products"

function ItemListPage() {
    /* const [listedItems, setListedItems] = useState(items) */
    const [openDrawer, setOpenDrawer] = useState("");
    const [openSort, setOpenSort] = useState(false);
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



    function toggleDrawer() {
        openDrawer === "" && setOpenDrawer(false);
        setOpenDrawer(!openDrawer);
    }

    function toggleSortModal(e) {
        e.stopPropagation();
        setOpenSort(!openSort);
    }



    function sortByBrand(brand) {
        let filteredList = listedItems.filter(item => {
            return item.category.includes(brand);
        })
        setFilteredItems([...filteredList]);
        console.log(filteredList)
        window.matchMedia("(max-width:767px)").matches && setOpenDrawer(false);
    }



    function loadPage() {
        setTimeout(() => {
            setLoadedPage(true);
        }, 600);
    }
    loadPage();





    let sortModal;
    openSort === true ? sortModal = "show-sort-modal" : sortModal = "hide-sort-modal"





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
                        path={path} />
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
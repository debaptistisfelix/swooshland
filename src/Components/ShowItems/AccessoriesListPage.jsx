
import "../ShowItems/ItemListPage.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ItemsContext } from "../Context/ItemsContext";
import ProductsDrawer from "../ProductsListPage/ProductsDrawer";
import ProductsDisplayer from "../ProductsListPage/ProductsDisplayer";



const categories = [
    { categ: "BACKPACK", qty: 1 },
    { categ: "LUNCHBOX", qty: 1 },
    { categ: "WALLET", qty: 3 }
];
const drawerImg = "dragon-img.jpg"
const ProductName = "Accessories"
const path = "products";

function AccessoriesListPage() {
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
                return item.tag === "accessories";
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

    /*  function sortByBrand(brand) {
         let filteredList = listedItems.filter(item => {
             return item.model.includes(brand)
         })
         setListedItems(filteredList);
         window.matchMedia("(max-width:767px)").matches && setOpenDrawer(false);
     } */

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



    /*  let displayedItems = listedItems.map(item => {
         return <ProductCard2
             key={item.name}
             imgSrc={item.imgSrc}
             model={item.model}
             name={item.name}
             price={item.price}
         />
     }) */

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

export default AccessoriesListPage;
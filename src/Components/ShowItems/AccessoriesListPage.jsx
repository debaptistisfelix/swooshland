import "../ShowItems/ItemListPage.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ProductsDrawer from "../ProductsListPage/ProductsDrawer";
import ProductsDisplayer from "../ProductsListPage/ProductsDisplayer";
import { AppContext } from "../Context/AppContext";

const categories = [
  { categ: "M.H.A. BACKPACK", qty: 1 },
  { categ: "LUNCHBOX BENTO", qty: 1 },
  { categ: "WALLET", qty: 3 },
];
const drawerImg = "dragon-img.jpg";
const ProductName = "Accessories";
const path = "products";

function AccessoriesListPage() {
  const [openDrawer, setOpenDrawer] = useState("");
  const [openSort, setOpenSort] = useState(false);
  const [loadedPage, setLoadedPage] = useState(false);

  const { setListedItems, setFilteredItems, setIsLoading, setError } =
    useContext(AppContext);

  useEffect(() => {
    const fetchSneakers = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/items?tag=accessories&limit=31"
      );
      const results = response.data.data.data;
      setFilteredItems(results);
      setListedItems(results);
    };
    fetchSneakers().catch((err) => {
      setError(err.message);
      setIsLoading(false);
      setListedItems(null);
    });
  }, []);

  function toggleDrawer() {
    openDrawer === "" && setOpenDrawer(false);
    setOpenDrawer(!openDrawer);
  }

  function toggleSortModal(e) {
    e.stopPropagation();
    setOpenSort(!openSort);
  }

  async function sortByBrand(brand) {
    const response = await axios.get(
      `http://localhost:3000/api/products?category=${brand}&tag=accessories&limit=50`
    );
    const results = response.data.data;
    console.log(response);
    setFilteredItems([...results]);
    window.matchMedia("(max-width:767px)").matches && setOpenDrawer(false);
  }

  function loadPage(delay) {
    setTimeout(() => {
      setLoadedPage(true);
    }, delay);
  }
  loadPage(600);

  let sortModal;
  openSort === true
    ? (sortModal = "show-sort-modal")
    : (sortModal = "hide-sort-modal");

  function closeSortModal(e) {
    let usermodal = document.querySelector(".ItemListPage-sort-modal");
    e.target !== usermodal ? setOpenSort(false) : undefined;
  }

  return (
    <div className="ItemListPage-max-container" onClick={closeSortModal}>
      {loadedPage === true ? (
        <div className="ItemListPage">
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
      ) : (
        <div className="ItemListPage-loader-box">
          <div className="loader-container">
            <div className="loader"></div>
            <span className="loader-text">LOADING</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccessoriesListPage;

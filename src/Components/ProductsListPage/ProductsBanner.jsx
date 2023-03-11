import "../ProductsListPage/ProductsBanner.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useContext } from "react";
import { ItemsContext } from "../Context/ItemsContext";

function ProductsBanner({ openDrawer, toggleDrawer, toggleSortModal, sortModal, name }) {
    useEffect(() => {
        AOS.init();
    }, [])

    const { sortByAZ, sortByZA, sortByAsc, sortByDesc } = useContext(ItemsContext);

    return (
        <div className="ProductsBanner" data-aos="fade-down" >
            <span className="ProductsBanner-title">{name.toUpperCase()}</span>
            <div className="ProductsBanner-control-box">
                <span
                    onClick={toggleDrawer}
                    className="ProductsBanner-control-tool filter-status">
                    {openDrawer === true ? "HIDE " : "SHOW "}

                    FILTERS
                    <i className="fa-solid fa-sliders"></i>
                </span>
                <span className="ProductsBanner-control-tool sort-status"
                    onClick={toggleSortModal}>
                    SORT BY
                    <i
                        className="fa-solid fa-sort-down"></i>
                    <div className={`ProductsBanner-sort-modal ${sortModal}`}>
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
    )
}

export default ProductsBanner;
import "../ShowItems/ExpandibleContainer.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";

function ExpandibleContainer({ category, boxStatus, toggleDrawer, openDrawer, toggleSortMOdal, sortModal, sortByAZ, sortByZA, sortByAsc, sortByDesc, listedItems, displayedItems }) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={`ItemListPage-box ${boxStatus}`}>
            <div className="ItemListPage-banner" data-aos="fade-down">
                <span className="ItemListPage-title">{category.toUpperCase()}</span>
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

            </div>
        </div>
    )
}

export default ExpandibleContainer;
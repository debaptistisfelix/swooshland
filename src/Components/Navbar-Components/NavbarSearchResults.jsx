import "./NavbarSearchResults.css"
import { Link } from "react-router-dom";
import useLoadedState from "../Hooks/useLoadedState";

import ProductCard2 from "../ProductCard2";

function NavbarSearchResults({ openedSearchResults, searchValue, filteredItem, toggleNavStatus }) {

    let SearchResultsStatus;
    openedSearchResults === true ? SearchResultsStatus = "showSearchResults" : SearchResultsStatus = undefined;

    let foundResults = filteredItem.map(item => {
        return <Link key={item._id}
            onClick={(e) => {
                window.matchMedia('(max-width: 767px)').matches && e.stopPropagation();
                toggleNavStatus()
            }}
            to={`/products/${item._id}`} className="ProductCard2-container">
            <ProductCard2
                key={item._id}
                item={item}
            />
        </Link>

    })
    return (
        <div className={`NavbarSearchResults ${SearchResultsStatus}`}>
            <div className="NavbarSearchResults-intro">
                <span className="NavbarSearchResults-intro-span">Your Search for</span>
                <span className="NavbarSearchResults-intro-span"><b>"{searchValue}"</b></span>
                <span className="NavbarSearchResults-intro-span">generated <b>({filteredItem.length})</b> results</span>
            </div>
            <div className="NavbarSearchResults-results">
                {foundResults}

            </div>
        </div>
    )
}

export default NavbarSearchResults;
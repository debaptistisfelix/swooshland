import "./NavbarSearchResults.css"
import { Link } from "react-router-dom";

import ProductCard2 from "../ProductCard2";

function NavbarSearchResults({ openedSearchResults, searchValue, filteredItem }) {
    let SearchResultsStatus;
    openedSearchResults === true ? SearchResultsStatus = "showSearchResults" : SearchResultsStatus = undefined;

    let foundResults = filteredItem.map(item => {
        return <Link className="ProductCard2-container">
            <ProductCard2
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
                {/* <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 /> */}
            </div>
        </div>
    )
}

export default NavbarSearchResults;
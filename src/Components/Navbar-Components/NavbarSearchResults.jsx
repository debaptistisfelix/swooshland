import "./NavbarSearchResults.css"

import ProductCard2 from "../ProductCard2";

function NavbarSearchResults({ openedSearchResults, searchValue, filteredItem }) {
    let SearchResultsStatus;
    openedSearchResults === true ? SearchResultsStatus = "showSearchResults" : SearchResultsStatus = undefined;

    let foundResults = filteredItem.map(item => {
        return <ProductCard2
            name={item.name}
            model={item.model}
            price={item.price}
            imgSrc={item.imgSrc}
        />
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
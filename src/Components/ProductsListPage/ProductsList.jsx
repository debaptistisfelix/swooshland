import "../ProductsListPage/ProductsList.css";
import ProductCard2 from "../ProductCard2";
import ProductCardXL from "./ProductCardXL";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ProductsList({ path, listedItems, filteredItems }) {
    useEffect(() => {
        AOS.init();
    }, [])

    let list = filteredItems.map(item => {
        return <Link
            onClick={() => { window.scrollTo(0, 0); }}
            className="ProductCardXL-container" to={`/${path}/${item._id}`}>
            <ProductCardXL
                name={item.name}
                model={item.model}
                imgSrc={item.images[0].imgSrc}
                price={item.price}
                key={item._id}
            />
        </Link>

    })
    return (
        <div className="ProductsList" data-aos="fade-up" >
            <span className="results-amount">
                Generated results: (<b>{filteredItems.length}</b>)
            </span>
            <div className="ProductsList-list-content">
                {list}
            </div>
        </div>
    )
}

export default ProductsList;
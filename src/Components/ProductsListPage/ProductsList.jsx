import "../ProductsListPage/ProductsList.css";
import ProductCard2 from "../ProductCard2";
import ProductCardXL from "./ProductCardXL";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function ProductsList({ listedItems }) {

    useEffect(() => {
        AOS.init();
    }, [])

    let list = listedItems.map(item => {
        return <ProductCardXL
            name={item.name}
            model={item.model}
            imgSrc={item.imgSrc}
            price={item.price}
            key={item.name}
        />
    })
    return (
        <div className="ProductsList" data-aos="fade-up" >
            <span className="results-amount">
                Generated results: (<b>{listedItems.length}</b>)
            </span>
            <div className="ProductsList-list-content">
                {list}
            </div>
        </div>
    )
}

export default ProductsList;
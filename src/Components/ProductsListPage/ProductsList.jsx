import "../ProductsListPage/ProductsList.css";
import ProductCard2 from "../ProductCard2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function ProductsList({ listedItems }) {

    useEffect(() => {
        AOS.init();
    }, [])

    let list = listedItems.map(item => {
        return <ProductCard2
            name={item.name}
            model={item.model}
            imgSrc={item.imgSrc}
            price={item.price}
            key={item.name}
        />
    })
    return (
        <div className="ProductsList" data-aos="flip-down" >
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
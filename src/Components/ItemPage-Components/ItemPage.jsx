import "../ItemPage-Components/ItemPage.css"
import ImageSlider from "./ImageSlider";
import ItemPageText from "./ItemPageText";
import ProductCard2 from "../ProductCard2";
import axios from "axios";
import { useState, useEffect } from "react";
import SizeBlock from "./SizeBlock";

function ItemPage() {
    const [product, setProduct] = useState("")
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("http://localhost:3000/api/sneakers");
            const sneaker = res.data[0];
            setProduct(sneaker)
        }
        fetchData();
    }, [])


    return (
        <div className="ItemPage">
            <div className="ItemPage-container">
                <div className="ItemPage-img-container">
                    <ImageSlider product={product} />
                </div>
                <ItemPageText product={product} />
            </div>
            <div className="ItemPage-bottom">
                <span className="ItemPage-related-list">
                    MORE CUSTOMS
                </span>
                <div className="ItemPage-bottom-container">
                    <ProductCard2 />
                    <ProductCard2 />
                    <ProductCard2 />
                    <ProductCard2 />
                    <ProductCard2 />
                    <ProductCard2 />

                    <ProductCard2 />
                    <ProductCard2 />
                    <ProductCard2 />
                    <ProductCard2 />
                </div>

            </div>
        </div>
    )
}

export default ItemPage;
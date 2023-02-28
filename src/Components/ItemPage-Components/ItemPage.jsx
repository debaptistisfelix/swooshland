import "../ItemPage-Components/ItemPage.css"
import ImageSlider from "./ImageSlider";
import ItemPageText from "./ItemPageText";
import ProductCard2 from "../ProductCard2";

function ItemPage() {
    return (
        <div className="ItemPage">
            <div className="ItemPage-container">
                <div className="ItemPage-img-container">
                    <ImageSlider />
                </div>
                <ItemPageText />
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
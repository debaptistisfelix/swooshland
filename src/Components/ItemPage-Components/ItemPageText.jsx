import "./ItemPageText.css";
import SizeBlock from "./SizeBlock";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



function ItemPageText({ product }) {

    useEffect(() => {
        AOS.init();
        return () => { AOS.refresh() }
    }, [])

    const sizes = product.availableSizes
    let sizeTable = sizes.map(size => {
        return <SizeBlock
            key={size._id}
            id={size._id}
            size={size.EUSize}

        />
    })
    return (
        <div className="ItemPageText">

            <div className="ItemPageText-title-box">
                <div className="ItemPageText-title-price">
                    <span
                        data-aos="fade-down" data-aos-delay={500}
                        className="ItemPageText-model">{product.model}</span>

                    <span
                        data-aos="fade-left" data-aos-delay={500}
                        className="ItemPageText-price">${product.price}0</span>

                </div>
                <div className="ItemPageText-name-palette" data-aos="fade-left" data-aos-delay={750}>
                    <span
                        data-aos="flip-down" data-aos-delay={750}
                        className="ItemPageText-name">{product.name}</span>
                    <div className="ItemPageText-palette">
                        <div style={{ backgroundColor: `${product.paletteColors[0].hex}` }} className="ItemPageText-palette-color"></div>
                        <div style={{ backgroundColor: `${product.paletteColors[1].hex}` }} className="ItemPageText-palette-color"></div>
                        <div style={{ backgroundColor: `${product.paletteColors[2].hex}` }} className="ItemPageText-palette-color"></div>
                    </div>
                </div>
                <span className="ItemPageText-price price-mobile-vers">${product.price}0</span>
            </div>

            <div data-aos="flip-up" data-aos-delay={750} className="ItemPageText-description">
                <p>{product.description}</p>
            </div>

            <div className="ItemPageText-choose-size-box">
                <span>Please Select a size.</span>
                <div className="ItemPageText-size-table" data-aos="flip-up" data-aos-delay={500}>
                    {sizeTable}
                </div>
                <div className="ItemPageText-btns">

                    <button className="ItemPageText-add-to-wish">ADD TO WHISHLIST <i className="fa-solid fa-star"></i></button>
                    <button className="ItemPageText-add-to-cart">ADD TO CART <i className="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>

        </div>
    )
}

export default ItemPageText;
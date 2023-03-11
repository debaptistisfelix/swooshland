import "./ItemPageText.css";
import SizeBlock from "./SizeBlock";
import { useEffect, useContext, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LoggedContext } from "../Context/LoggedContext";
import { useNavigate } from "react-router-dom";
import { AnimationContext } from "../Context/AnimationContext";



function ItemPageText({ product, selectSize, addToCart, addToWish, chosenSize }) {

    useEffect(() => {
        AOS.init();
        return () => { AOS.refresh() }
    }, [])

    const { logged, setLogged } = useContext(LoggedContext);
    const navigate = useNavigate();


    const { cartAnim, setCartAnim, wishAnim, setWishAnim } = useContext(AnimationContext);

    const [noGo, setNoGo] = useState(false);

    const sizes = product.availableSizes
    let sizeTable = sizes.map(size => {
        return <SizeBlock
            selectSize={selectSize}
            key={size._id}
            id={size._id}
            size={size.EUSize}
            sizes={product.availableSizes}
            qty={size.itemsAvailable}
        />
    })



    let cartAnimation;
    cartAnim === true ? cartAnimation = "shop-cart-goes" : cartAnimation = "shop-cart-back"

    function activateCartAnim() {
        if (chosenSize === "") {
            setNoGo(true);
            return
        } else {
            setNoGo(false)
            setCartAnim(true);
            addToCart(product);
            setTimeout(() => {
                setCartAnim(false)
            }, 1500);

        }
    }

    let wishAnimation;
    wishAnim === true ? wishAnimation = "star-goes" : wishAnimation = "star-back"

    function activateWishAnim() {
        if (chosenSize === "") {
            setNoGo(true);
            return
        } else {
            setNoGo(false)
            setWishAnim(true);
            addToWish(product);
            setTimeout(() => {
                setWishAnim(false)
            }, 1000);
        }
    }

    const sizesStyleCondition = (window.matchMedia('(max-width: 767px)').matches && product.availableSizes.length === 1)


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

            <div className="ItemPageText-description">
                <p>{product.description}</p>
            </div>

            <form
                style={{ height: !sizesStyleCondition ? undefined : "calc(90vw + 0.12rem)" }}
                onSubmit={(e) => { e.preventDefault(); }} className="ItemPageText-choose-size-box">
                <span
                    style={{ color: noGo === true ? "red" : "#495057" }}
                >Please Select a size.</span>
                <div className="ItemPageText-size-table" >
                    {sizeTable}
                </div>
                <div className="ItemPageText-btns">

                    <button onClick={() => {
                        logged === true
                            ? activateWishAnim()
                            : navigate("/user-log")
                    }} className="ItemPageText-add-to-wish">
                        {wishAnim === false
                            ? "ADD TO WISHLIST"
                            : "ADDED TO WISHLIST"}
                        <i className={`fa-solid fa-star ${wishAnimation}`}></i></button>
                    <button onClick={() => {
                        logged === true
                            ? activateCartAnim()
                            : navigate("/user-log")
                    }} className="ItemPageText-add-to-cart">
                        {cartAnim === false
                            ? "ADD TO CART"
                            : "ADDED TO CART"}
                        <i className={`fa-solid fa-cart-shopping ${cartAnimation}`}> </i></button>
                </div>
            </form>

        </div>
    )
}

export default ItemPageText;
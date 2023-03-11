import "../WishlistPage/WishlistBlock.css"
import { useState } from "react";

function WishlistBlock({ item, removeItem, moveToCart }) {
    const [blockAnim, setBlockAnim] = useState(false);

    let blockStatus;
    blockAnim === true ? blockStatus = "vanish-anim" : "not true"

    const sizeOptions = item.availableSizes.map(size => {
        return <option
            className="WishlistBlock-option"
            key={size._id}
            value={size.EUSize}>{size.EUSize}</option>
    })

    return (
        <div className={`WishlistBlock ${blockStatus}`}>
            <div className="WishlistBlock-img-box">
                <img className="WishlistBlock-img" src={item.images[0].imgSrc} />
            </div>
            <div className="WishlistBlock-text">
                <div className="WishlistBlock-toptext">
                    <span className="WishlistBlock-model">{item.model}</span>
                    <span className="WishlistBlock-price">${item.price}0</span>
                </div>
                <div className="WishlistBlock-subtext">
                    <span className="WishlistBlock-categ">{item.name}</span>
                    <div className="WishlistBlock-palette">

                        <span className="WishlistBlock-color" style={{ backgroundColor: item.paletteColors[0].hex }}></span>
                        <span className="WishlistBlock-color" style={{ backgroundColor: item.paletteColors[1].hex }}></span>
                        <span className="WishlistBlock-color" style={{ backgroundColor: item.paletteColors[2].hex }}></span>
                    </div>
                    <div className="WishlistBlock-size-box">
                        <div className="WishlistBlock-left-bottom">
                            <label className="WishlistBlock-size-label">Size</label>
                            <span>{item.chosenSize}</span>
                        </div>
                        <div className="WishlistBlock-right-bottom">
                            <i
                                onClick={() => {
                                    moveToCart(item.id, item);
                                    setBlockAnim(true);
                                }}
                                className="fa-solid fa-cart-shopping"></i>
                            <i
                                onClick={() => {
                                    removeItem(item.id);
                                    setBlockAnim(true);
                                }}
                                className="fa-solid fa-trash"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WishlistBlock;
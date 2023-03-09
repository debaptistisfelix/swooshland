import "./CartListBlock.css";

function CartListBlock({ item, removeItem }) {


    const sizeOptions = item.availableSizes.map(size => {
        return <option
            className="CartListBlock-option"
            key={size._id}
            value={size.EUSize}>{size.EUSize}</option>
    })

    return (
        <div className="CartListBlock">
            <div className="CartListBlock-img-box">
                <img className="CartListBlock-img" src={item.images[0].imgSrc} />
            </div>
            <div className="CartListBlock-text">
                <div className="CartListBlock-toptext">
                    <span className="CartListBlock-model">{item.model}</span>
                    <span className="CartListBlock-price">${item.price}0</span>
                </div>
                <div className="CartListBlock-subtext">
                    <span className="CartListBlock-categ">{item.name}</span>
                    <div className="CartListBlock-palette">

                        <span className="CartListBlock-color" style={{ backgroundColor: item.paletteColors[0].hex }}></span>
                        <span className="CartListBlock-color" style={{ backgroundColor: item.paletteColors[1].hex }}></span>
                        <span className="CartListBlock-color" style={{ backgroundColor: item.paletteColors[2].hex }}></span>
                    </div>
                    <div className="CartListBlock-size-box">
                        <div className="CartListBlock-left-bottom">
                            <label className="CartListBlock-size-label">Size</label>
                            <select className="CartListBlock-size-select">
                                {sizeOptions}
                            </select>
                        </div>
                        <div className="CartListBlock-right-bottom">
                            <i class="fa-solid fa-star"></i>
                            <i
                                onClick={() => { removeItem(item.id) }}
                                class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartListBlock;
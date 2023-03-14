import "../OrderPage/ItemBlock.css";

function ItemBlock({ item, id }) {
    const { model, name, price, paletteColors, chosenSize } = item;
    const img = item.images[0].imgSrc;
    return (
        <div className="ItemBlock">

            <img className="ItemBlock-img" src={img} />

            <div className="ItemBlock-text">
                <div className="ItemBlock-upper-text">
                    <span className="ItemBlock-model">{model}</span>
                    <span className="ItemBlock-Price">${price}0</span>
                </div>
                <span className="ItemBlock-name">{name}</span>
                <div className="ItemBlock-palette">
                    <span
                        style={{ backgroundColor: `${paletteColors[0].hex}` }}
                        className="ItemBlock-color"></span>
                    <span
                        style={{ backgroundColor: `${paletteColors[1].hex}` }}
                        className="ItemBlock-color"></span>
                    <span
                        style={{ backgroundColor: `${paletteColors[2].hex}` }}
                        className="ItemBlock-color"></span>
                </div>
                <span className="ItemBlock-size">Size: {chosenSize}</span>
            </div>
        </div>
    )
}

export default ItemBlock;
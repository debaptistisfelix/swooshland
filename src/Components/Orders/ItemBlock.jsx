import "../Orders/ItemBlock.css";

function ItemBlock({ item, id }) {
  const { model, name, price, paletteColors, chosenSize } = item;
  const img = item.images;
  return (
    <div className="ItemBlock">
      <img className="ItemBlock-img" src={img} />

      <div className="ItemBlock-text">
        <div className="ItemBlock-upper-text">
          <span className="ItemBlock-model">{model}</span>
          <span className="ItemBlock-Price">${price}0</span>
        </div>
        <span className="ItemBlock-name">{name}</span>
        <span className="ItemBlock-size">Size: {chosenSize}</span>
      </div>
    </div>
  );
}

export default ItemBlock;

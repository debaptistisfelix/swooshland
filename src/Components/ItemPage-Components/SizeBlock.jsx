import "./SizeBlock.css";


function SizeBlock({ size, id, }) {



    return (
        <div className="SizeBlock">
            <input className="SizeBlock-input"
                id={id}
                name="size-btn"
                type="radio"
                value={size}
            />
            <label

                className="SizeBlock-label" htmlFor={id}>{size}</label>
        </div>
    )
}

export default SizeBlock;
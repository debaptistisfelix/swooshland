import "./SizeBlock.css";


function SizeBlock({ size, id, selectSize }) {

    let oneSize;
    (size === "One Size") ? oneSize = "one-size-block" : undefined;

    return (
        <div className="SizeBlock">
            <input className="SizeBlock-input"
                id={id}
                name="size-btn"
                type="radio"
                value={size}
                onChange={() => { selectSize(event) }}

            />
            <label

                className={`SizeBlock-label ${oneSize}`} htmlFor={id}>{size}</label>
        </div>
    )
}

export default SizeBlock;
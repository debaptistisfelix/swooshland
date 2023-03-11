import "./SizeBlock.css";


function SizeBlock({ size, id, selectSize, sizes, qty }) {
    let oneSize;
    (size === "One Size") ? oneSize = "one-size-block" : undefined;

    const styleCondition = (window.matchMedia('(max-width: 767px)').matches && sizes.length === 1)

    return (
        <div
            style={{ width: !styleCondition ? undefined : "70%" }}
            className="SizeBlock">
            <input className="SizeBlock-input"
                id={id}
                name="size-btn"
                type="radio"
                value={size}
                onChange={() => { selectSize(event) }}

            />
            <label
                style={{
                    width: !styleCondition ? undefined : "100%",
                    pointerEvents: qty === 0 ? "none" : undefined,
                    backgroundColor: qty === 0 ? "brown" : undefined,
                    textDecoration: qty === 0 ? "line-through" : "none"
                }}
                className={`SizeBlock-label ${oneSize}`} htmlFor={id}>{size}</label>
        </div>
    )
}

export default SizeBlock;
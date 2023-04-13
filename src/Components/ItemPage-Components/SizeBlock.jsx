import "./SizeBlock.css";

function SizeBlock({ size, id, selectSize, sizes, qty, reserved }) {
  let oneSize;
  size === "One Size" ? (oneSize = "one-size-block") : undefined;

  const styleCondition =
    window.matchMedia("(max-width: 1024px)").matches && sizes.length === 1;

  let noAvailabilityCondition = qty === 0 || qty === reserved;

  return (
    <div
      style={{ width: !styleCondition ? undefined : "70%" }}
      className="SizeBlock"
    >
      <input
        className="SizeBlock-input"
        id={id}
        name="size-btn"
        type="radio"
        value={size}
        onChange={() => {
          selectSize(event);
        }}
      />
      <label
        style={{
          width: !styleCondition ? undefined : "100%",
          pointerEvents: noAvailabilityCondition ? "none" : undefined,
          backgroundColor: noAvailabilityCondition ? "brown" : undefined,
          textDecoration: noAvailabilityCondition ? "line-through" : "none",
        }}
        className={`SizeBlock-label ${oneSize}`}
        htmlFor={id}
      >
        {size}
      </label>
    </div>
  );
}

export default SizeBlock;

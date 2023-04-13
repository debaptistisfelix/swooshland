import "./MiniImg.css";

function MiniImg({ imgSrc, id, changeImg, displayedImg }) {
    return (
        <div
            style={{ filter: displayedImg === imgSrc ? "brightness(50%)" : undefined }}
            onClick={() => { changeImg(id) }}
            className="MiniImg">
            <img src={imgSrc} />

            {/* <div className={displayedImg.id === id ? "MiniImg-displayed-shadow" : undefined}></div> */}
        </div>
    )
}

export default MiniImg;
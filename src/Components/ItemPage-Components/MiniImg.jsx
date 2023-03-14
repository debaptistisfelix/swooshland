import "./MiniImg.css";

function MiniImg({ imgSrc, id, changeImg, displayedImg }) {
    return (
        <div
            style={{ filter: displayedImg === imgSrc ? "brightness(30%)" : undefined }}
            onClick={() => { changeImg(id) }}
            className="MiniImg">
            <img src={imgSrc} />
            {displayedImg === imgSrc && <i className="miniImg-eye fa-solid fa-eye"></i>}
            {/* <div className={displayedImg.id === id ? "MiniImg-displayed-shadow" : undefined}></div> */}
        </div>
    )
}

export default MiniImg;
import "./MiniImg.css";

function MiniImg({ imgSrc, id, changeImg, displayedImg }) {
    return (
        <div
            onClick={() => { changeImg(id) }}
            className="MiniImg">
            <img src={imgSrc} />
            <div className={displayedImg.id === id ? "MiniImg-displayed-shadow" : undefined}></div>
        </div>
    )
}

export default MiniImg;
import "./MiniImg.css";

function MiniImg({ imgSrc, id, changeImg, displayedImg }) {
  return (
    <div
      style={{
        filter: displayedImg === imgSrc ? "brightness(50%)" : undefined,
      }}
      onClick={() => {
        changeImg(id);
      }}
      className="MiniImg"
    >
      <img src={imgSrc} />
    </div>
  );
}

export default MiniImg;

import "./Slider.css";

function Slider() {
    return (
        <div className="Slider">
            <input
                type="range"
                min="0"
                max="1000"
                className="thumb thumb--zindex-3"
            />
            <input
                type="range"
                min="0"
                max="1000"
                className="thumb thumb--zindex-4"
            />

            <div className="slider">
                <div className="slider__track" />
                <div className="slider__range" />
            </div>

        </div>
    )
}

export default Slider;
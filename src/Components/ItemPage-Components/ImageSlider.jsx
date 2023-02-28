import "./ImageSlider.css"
import { useState } from "react"
import MiniImg from "./MiniImg"

const images = [
    { src: "rogue1.jpg", id: 1 },
    { src: "rogue2.jpg", id: 2 },
    { src: "rogue3.jpg", id: 3 },
    { src: "rogue4.jpg", id: 4 },
    { src: "rogue5.jpg", id: 5 },
    { src: "rogue6.jpg", id: 6 },
    { src: "rogue7.jpg", id: 7 },
    { src: "rogue8.jpg", id: 8 },
    { src: "rogue9.jpg", id: 9 },

]

function ImageSlider() {
    const [displayedImg, setDisplayedImg] = useState(images[2])

    function changeDisplayedImg(id) {
        const chosenImg = images.filter(img => {
            return img.id === id;
        })
        setDisplayedImg(chosenImg[0])
    }

    const galleryImages = images.map((img, i) => {
        return <MiniImg
            changeImg={changeDisplayedImg}
            imgSrc={img.src}
            key={img.id}
            id={img.id}
            displayedImg={displayedImg}
        />
    })

    return (
        <div className="ImageSlider">
            <div
                className="ImageSlider-img-box">
                <img className="ImageSlider-img" src={displayedImg.src} />
            </div>
            <div className="ImageSlider-images">
                {galleryImages}
            </div>
        </div>
    )
}

export default ImageSlider;
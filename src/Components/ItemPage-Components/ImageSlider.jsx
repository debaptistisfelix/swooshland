import "./ImageSlider.css"
import { useState, useEffect } from "react"
import MiniImg from "./MiniImg"
import AOS from 'aos';
import 'aos/dist/aos.css';

/* const images = [
    { src: "rogue1.jpg", id: 1 },
    { src: "rogue2.jpg", id: 2 },
    { src: "rogue3.jpg", id: 3 },
    { src: "rogue4.jpg", id: 4 },
    { src: "rogue5.jpg", id: 5 },
    { src: "rogue6.jpg", id: 6 },
    { src: "rogue7.jpg", id: 7 },
    { src: "rogue8.jpg", id: 8 },
    { src: "rogue9.jpg", id: 9 },

] */

function ImageSlider({ product }) {
    const images = product.images;


    const [displayedImg, setDisplayedImg] = useState(images[0].imgSrc)

    function changeDisplayedImg(id) {
        const chosenImg = images.filter(img => {
            return img._id === id;
        })
        setDisplayedImg(chosenImg[0].imgSrc)
    }

    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {

        setDisplayedImg(images[0].imgSrc)

    }, [images[0].imgSrc]);

    const galleryImages = images.map((img, i) => {
        return <MiniImg
            changeImg={changeDisplayedImg}
            imgSrc={img.imgSrc}
            key={img._id}
            id={img._id}
            displayedImg={displayedImg}
        />
    })


    let bigAos;
    let smallAos;
    window.matchMedia("(max-width:767px)").matches ? bigAos = "fade-down" : bigAos = "fade-right"
    window.matchMedia("(max-width:767px)").matches ? smallAos = "fade-right" : smallAos = "fade-down"


    return (
        <div className="ImageSlider">
            <div
                className={`ImageSlider-img-box`}
                data-aos={`${bigAos}`} data-aos-delay={600}>
                <img className="ImageSlider-img" src={displayedImg} />
            </div>
            <div className={`ImageSlider-images`} data-aos={`${smallAos}`} data-aos-delay={600}>
                {galleryImages}
            </div>
        </div>
    )
}

export default ImageSlider;
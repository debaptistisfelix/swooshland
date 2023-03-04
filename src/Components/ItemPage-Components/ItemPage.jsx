import "../ItemPage-Components/ItemPage.css"
import ImageSlider from "./ImageSlider";
import ItemPageText from "./ItemPageText";
import ProductCard2 from "../ProductCard2";
import axios from "axios";
import { useState, useEffect } from "react";
import SizeBlock from "./SizeBlock";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ItemPage({ path }) {
    let { itemId } = useParams();

    const [related, setRelated] = useState([])

    const [product, setProduct] = useState("")
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`http://localhost:3000/api/${path}/${itemId}`);
            const sneaker = res.data;
            setProduct(sneaker);

        }
        fetchData();
    }, [product])

    useEffect(() => {
        async function fetchRelated() {
            const res = await axios.get("http://localhost:3000/api/sneakers");
            const sneakers = res.data;
            let relatedSneakers = [];


            let similarSnekers = sneakers.filter(item => {
                return item.category === product.category
            })
            let preciseSimilarSneakers = similarSnekers.filter(item => {
                return item.name !== product.name;
            })

            relatedSneakers.push(...preciseSimilarSneakers);


            while (relatedSneakers.length <= 10) {

                let randomIndex = Math.floor(Math.random() * sneakers.length);
                let sneakerToAdd = sneakers[randomIndex];
                if (!relatedSneakers.includes(sneakerToAdd)) {
                    relatedSneakers.push(sneakerToAdd)

                }
            }
            setRelated(relatedSneakers)
        }
        fetchRelated();

    }, [product.name])


    const [loadedPage, setLoadedPage] = useState(false);
    function loadPage(delay) {
        setTimeout(() => {
            setLoadedPage(true);
        }, delay);
    }
    loadPage(600);


    return (
        <div className="ItemPage">

            {loadedPage === true
                ? <div className="ItemPage-max-container">
                    <div className="ItemPage-container">
                        <div className="ItemPage-img-container">
                            <ImageSlider product={product}
                            />
                        </div>
                        <ItemPageText product={product} />
                    </div>
                    <div className="ItemPage-bottom">
                        <span className="ItemPage-related-list">
                            MORE CUSTOMS
                        </span>
                        <div className="ItemPage-bottom-container">
                            {related.map(item => {
                                return <Link
                                    onClick={() => {
                                        setLoadedPage(false)
                                        window.scrollTo(0, 0);
                                    }}
                                    to={`/sneakers/${item._id}`} className="ItemPage-card-container">
                                    <ProductCard2
                                        item={item}
                                        key={item._id}

                                    />
                                </Link>
                            })}

                        </div>

                    </div>
                </div>
                : <div className="ItemPage-loader-box">
                    <div className="loader-container">
                        <div className="loader"></div>
                        <span className="loader-text">LOADING</span>
                    </div>
                </div>
            }


        </div>


    )
}

export default ItemPage;
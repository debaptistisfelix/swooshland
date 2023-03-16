import "../ItemPage-Components/ItemPage.css"
import ImageSlider from "./ImageSlider";
import ItemPageText from "./ItemPageText";
import ProductCard2 from "../ProductCard2";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import SizeBlock from "./SizeBlock";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useLoadedState from "../Hooks/useLoadedState";
import { UserContext } from "../Context/UserContext";
import { v4 as uuidv4 } from 'uuid';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";



function ItemPage() {
    const { user, setUser } = useContext(UserContext);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const navigate = useNavigate();


    let { itemId } = useParams();

    const [chosenSize, setChosenSize] = useState("")

    const [related, setRelated] = useState([])

    const [product, setProduct] = useState("")
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`http://localhost:3000/api/products/${itemId}`);
            const sneaker = res.data;
            setProduct(sneaker);


        }
        fetchData();
        loadPage(600)
    }, [product])

    useEffect(() => {
        async function fetchRelated() {
            const res = await axios.get("http://localhost:3000/api/products");
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



    function selectSize(event) {
        let clickedSize = (event.target.value);
        console.log(clickedSize);
        setChosenSize(clickedSize);
    }


    // Funziona e aggiunge effettivamente prodotto al carrello dello user
    async function addToCart(product) {
        const itemToAdd = { ...product, chosenSize: chosenSize, id: uuidv4() }
        const response = await axios.patch(`http://localhost:3000/api/users/${user._id}`, {
            cart: [...user.cart, { ...itemToAdd }]
        });
        const updatedUser = await axios.get(`http://localhost:3000/api/users/${user._id}`)
        setUser(updatedUser.data);

    }

    async function addToWish(product) {
        const itemToAdd = { ...product, chosenSize: chosenSize, id: uuidv4() }
        const response = await axios.patch(`http://localhost:3000/api/users/${user._id}`, {
            wishlist: [...user.wishlist, { ...itemToAdd }]
        });
        const updatedUser = await axios.get(`http://localhost:3000/api/users/${user._id}`)
        setUser(updatedUser.data);
    }




    const [loadedPage, setLoadedPage, loadPage] = useLoadedState(false);
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
                        <ItemPageText product={product} selectSize={selectSize} addToCart={addToCart} addToWish={addToWish} chosenSize={chosenSize} />
                    </div>
                    <div className="ItemPage-bottom">
                        <span className="ItemPage-related-list">
                            MORE CUSTOMS
                        </span>
                        <div className="ItemPage-bottom-container">
                            {related.map(item => {
                                return <Link
                                    key={item._id}
                                    onClick={() => {
                                        setLoadedPage(false)
                                        window.scrollTo(0, 0);
                                    }}
                                    to={`/products/${item._id}`} className="ItemPage-card-container">
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
import "../ItemPage-Components/ItemPage.css";
import ImageSlider from "./ImageSlider";
import ItemPageText from "./ItemPageText";
import ProductCard2 from "../ProductCard2";
import axios from "axios";
import { useState, useEffect, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useLoadedState from "../Hooks/useLoadedState";
import { LoggedContext } from "../Context/LoggedContext";
import ReviewSection from "./ReviewSection";
import { UserContext } from "../Context/UserContext";

function ItemPage() {
  let { itemId } = useParams();
  const { token } = useContext(LoggedContext);
  const headers = { Authorization: `Bearer ${token}` };
  const { setUpdateCartState, updateCartState, setShowReservedNote } =
    useContext(UserContext);
  const { setUpdateWish, updateWish } = useContext(UserContext);
  const [chosenSize, setChosenSize] = useState("");
  const [wasBought, setWasBought] = useState(false);
  const [reviewsUpdate, setReviewsUpdate] = useState(false);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateItemState, setUpdateItemState] = useState(false);

  const handleReviewUpdate = () => {
    setReviewsUpdate(!reviewsUpdate);
  };

  const fetchData = useCallback(async () => {
    const res = await axios.get(`http://localhost:8000/api/items/${itemId}`);
    setData(res.data.data.data);
    setError(null);
    setIsLoading(false);
    setUpdateItemState(false);
  }, [itemId, reviewsUpdate, updateItemState]);

  useEffect(() => {
    fetchData().catch((err) => {
      setError(err.message);
      setIsLoading(false);
      setData(null);
      console.log(err.message);
    });
  }, [fetchData, updateItemState, itemId, reviewsUpdate]);

  // Check if user has ever ordered the item
  const didUserBuy = useCallback(async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/orders/orderDetails/${itemId}`,
        { headers }
      );

      setWasBought(true);
    } catch (err) {
      setWasBought(false);
      console.log(err.response.data.message);
    }
  }, [data]);

  // As soon as you have the product, check if was ever ordered
  useEffect(() => {
    if (token !== null) {
      didUserBuy();
    }
  }, [data]);

  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (data) {
      async function fetchRelated() {
        const res = await axios.get("http://localhost:8000/api/items?limit=50");
        const sneakers = res.data.data.data;
        let relatedSneakers = [];

        let similarSnekers = sneakers.filter((item) => {
          return item.category === data.category;
        });
        let preciseSimilarSneakers = similarSnekers.filter((item) => {
          return item.name !== data.name;
        });

        relatedSneakers.push(...preciseSimilarSneakers);

        while (relatedSneakers.length <= 10) {
          let randomIndex = Math.floor(Math.random() * sneakers.length);
          let sneakerToAdd = sneakers[randomIndex];
          if (!relatedSneakers.includes(sneakerToAdd)) {
            relatedSneakers.push(sneakerToAdd);
          }
        }
        setRelated(relatedSneakers);
      }
      fetchRelated();
    }
  }, [data]);

  // Select a size to add to Cart/wishlist
  function selectSize(event) {
    let clickedSize = event.target.value;
    console.log(clickedSize);
    setChosenSize(clickedSize);
  }

  function makeNotePopUp() {
    setShowReservedNote(true);
    setTimeout(() => {
      setShowReservedNote(false);
    }, 3000);
  }

  // Add Item to Cart
  async function addToCart(data) {
    const itemtoAdd = {
      model: data.model,
      category: data.category,
      name: data.name,
      price: data.price,
      images: data.images[0].imgSrc,
      tag: data.tag,
      paletteColors: data.paletteColors,
      stripe: data.stripe,
      chosenSize: chosenSize,
      itemId: data._id,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/cartItems",
        itemtoAdd,
        {
          headers,
        }
      );
      setUpdateCartState(!updateCartState);
      setUpdateItemState(!updateItemState);
      makeNotePopUp();
    } catch (err) {
      console.log(error);
    }
  }

  // Add Item to wishlist
  async function addToWish(data) {
    const itemtoAdd = {
      model: data.model,
      category: data.category,
      name: data.name,
      price: data.price,
      images: data.images[0].imgSrc,
      tag: data.tag,
      paletteColors: data.paletteColors,
      stripe: data.stripe,
      chosenSize: chosenSize,
      itemId: data._id,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/wishlist",
        itemtoAdd,
        {
          headers,
        }
      );
      setUpdateWish(!updateWish);
    } catch (err) {
      console.log(error);
    }
  }

  const [loadedPage, setLoadedPage, loadPage] = useLoadedState(true);
  loadPage(600);

  return (
    <div className="ItemPage">
      {loadedPage === true ? (
        <div className="ItemPage-max-container">
          <div className="ItemPage-container">
            {error && <>{error}</>}
            {data && (
              <>
                <div className="ItemPage-img-container">
                  <ImageSlider data={data} />
                </div>
                <ItemPageText
                  data={data}
                  selectSize={selectSize}
                  addToCart={addToCart}
                  addToWish={addToWish}
                  chosenSize={chosenSize}
                />
              </>
            )}
          </div>

          <div className="ItemPage-bottom">
            <span className="ItemPage-related-list">MORE CUSTOMS</span>
            <div className="ItemPage-bottom-container">
              {related.map((item) => {
                return (
                  <Link
                    key={item._id}
                    onClick={() => {
                      setLoadedPage(false);
                      window.scrollTo(0, 0);
                    }}
                    to={`/products/${item._id}`}
                    className="ItemPage-card-container"
                  >
                    <ProductCard2 item={item} key={item._id} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="Itempage-reviews">
            <ReviewSection
              data={data}
              token={token}
              wasBought={wasBought}
              handleReviewUpdate={handleReviewUpdate}
              firstReviewsUpdate={reviewsUpdate}
            />
          </div>
        </div>
      ) : (
        <div className="ItemPage-loader-box">
          <div className="loader-container">
            <div className="loader"></div>
            <span className="loader-text">LOADING</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemPage;

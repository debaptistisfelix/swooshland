import "../ItemPage-Components/ReviewSection.css";
import ReviewStats from "./ReviewStats";
import ReviewTotal from "./ReviewTotal";
import ReviewForm from "./ReviewForm";
import ReviewBanner from "./ReviewBanner";
import ReviewList from "./ReviewList";
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ReviewSection({ data, token, wasBought, handleReviewUpdate }) {
  let { itemId } = useParams();
  const headers = { Authorization: `Bearer ${token}` };

  // State to use to request a new get Req of the reviews after a certain action
  const [reviewsUpdate, setReviewsUpdate] = useState(false);
  // State to change a manipulate what reviews are shown
  const [reviews, setReviews] = useState(null);
  // State to get all the reviews
  const [allReviews, setAllReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // State variable to catch error when deleting a review

  // State to get the ratingsQuantity & ratingsAverage of this item
  const [ratingStats, setRatingStats] = useState(null);
  // State to sort reviews and save which sorting filter we are using
  const [sortFilter, setSortFilter] = useState("");
  // State to know which star rating bar was clicked
  const [filterBar, setFilterBar] = useState("");
  // State to save the count for each rating
  const [starRatingCount, setStarRatingCount] = useState(null);

  // Function to fetch all the reviews for the item of the page
  const fetchReviews = useCallback(async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/items/${itemId}/reviews/specific`
      );
      setError(null);
      setIsLoading(false);
      setReviews(res.data.data.data);
      setAllReviews(res.data.data.data);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      setReviews(null);
      setIsLoading(false);
    }
  }, [data]);

  // Function to delete a review (only author can do it)
  const deleteReview = useCallback(
    async (id) => {
      try {
        await axios.delete(
          `http://localhost:8000/api/items/${itemId}/reviews/${id}`,
          { headers }
        );
        handleReviewUpdate();
        setReviewsUpdate(!reviewsUpdate);
      } catch (err) {
        console.log(err);
      }
    },
    [itemId]
  );

  // Function to calculate the ratings average and quantity
  const calculateRatingsCountAndAverage = () => {
    if (allReviews) {
      let ratingsArray = allReviews.map((review) => {
        return review.rating;
      });
      const totalRating = ratingsArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      const ratingCount = allReviews.length;
      /*  let ratingAvg;
      ratingCount === 0
        ? (ratingAvg = 0)
        : (ratingAvg = totalRating / ratingCount); */
      const ratingAvg = totalRating / ratingCount;
      setRatingStats({
        ratingsQuantity: ratingCount,
        ratingsAverage: ratingAvg,
      });
    }
  };

  // Function to sort the reviews by different sortFilters
  async function sortBy(sortFilterQuery, sortTag) {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/items/${itemId}/reviews/specific/${sortFilterQuery}`
      );
      setReviews(res.data.data.data);
      setSortFilter(sortTag);
    } catch (err) {
      console.log(err);
    }
  }

  // Function to filter by rating score
  async function filterByRating(starFilterQuery, starTag) {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/items/${itemId}/reviews/specific?rating=${starFilterQuery}`
      );
      setReviews(res.data.data.data);
      setFilterBar(starTag);
    } catch (err) {
      console.log(err);
    }
  }

  // Function to know how many reviews for each star rate
  const getStarsStats = useCallback(() => {
    if (allReviews) {
      let counts = [0, 0, 0, 0, 0];
      for (let i = 0; i < counts.length; i++) {
        counts[i] = allReviews.filter((obj) => obj.rating === i + 1).length;
      }
      setStarRatingCount(counts);
    }
  }, [allReviews, reviewsUpdate]);

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [data, reviewsUpdate]);

  useEffect(() => {
    calculateRatingsCountAndAverage();
  }, [allReviews]);

  useEffect(() => {
    getStarsStats();
  }, [allReviews, reviewsUpdate]);

  return (
    <div className="ReviewSection">
      {isLoading && <>Loading Reviews...</>}
      {reviews && (
        <div className="ReviewSection-reviews-top">
          <ReviewStats
            filterByRating={filterByRating}
            starRatingCount={starRatingCount}
            allReviews={allReviews}
            reviews={reviews}
            reviewsUpdate={reviewsUpdate}
          />
          <ReviewTotal ratingStats={ratingStats} data={data} />
          <ReviewForm
            token={token}
            wasBought={wasBought}
            handleReviewUpdate={handleReviewUpdate}
          />
        </div>
      )}
      {reviews && (
        <div className="ReviewSection-reviews-bottom">
          <ReviewBanner sortBy={sortBy} sortFilter={sortFilter} />
          <div className="Reviews-list">
            <ReviewList
              data={data}
              deleteReview={deleteReview}
              reviewsUpdate={reviewsUpdate}
              fetchReviews={fetchReviews}
              reviews={reviews}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewSection;

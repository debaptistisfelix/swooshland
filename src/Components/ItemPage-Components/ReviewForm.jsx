import "../ItemPage-Components/ReviewForm.css";
import useInputState from "../Hooks/useInputState";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCallback, useState, useContext } from "react";

import { useParams } from "react-router-dom";

function ReviewForm({
  token,
  wasBought,
  handleReviewUpdate,
  postReviewError,
  setPotsReviewError,
}) {
  const [rating, handleRating] = useInputState("3");
  const [review, handleReview, resetReview] = useInputState("");
  const [error, setError] = useState(null);

  let { itemId } = useParams();

  const postReview = useCallback(
    async (event) => {
      event.preventDefault();
      const headers = { Authorization: `Bearer ${token}` };
      try {
        const newReview = await axios.post(
          `https://easy-ruby-goose-sari.cyclic.app/api/items/${itemId}/reviews`,
          {
            reviewText: review,
            rating: rating,
          },
          { headers }
        );
        console.log(newReview);

        resetReview();
        setError(null);
        setPotsReviewError(null);
        handleReviewUpdate();
      } catch (err) {
        console.log(err.response.data.message);
        setError(err.response.data.message);
        setPotsReviewError(err.response.data.message);
      }
    },
    [itemId, rating, review]
  );

  return (
    <div className="ReviewForm">
      {!postReviewError ? (
        <div className="ReviewForm-box">
          <h5 className="ReviewForm-title">Leave a Review</h5>

          <form
            onSubmit={() => {
              postReview(event);
            }}
            className="ReviewForm-form"
          >
            <textarea
              className="ReviewForm-textare"
              onChange={handleReview}
              value={review}
              required
              disabled={!wasBought}
              placeholder={
                !wasBought
                  ? "You must buy the item first to leave a review."
                  : "Enter your review and rating here."
              }
            />
            <div className="ReviewForm-btn-box">
              <div className="ReviewForm-input-box">
                <input
                  name="rating-score"
                  id="rating-score"
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={rating}
                  onInput={handleRating}
                  required
                  disabled={!wasBought}
                />
                <output id="rangevalue">{rating}</output>
              </div>
              <div className="ReviewForm-btn-container">
                <button disabled={!wasBought} type="submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="ReviewForm-error-box">
          <h1 className="ReviewForm-error-text">
            You can only submit one review for every item.{" "}
          </h1>
          <p className="ReviewForm-error-subtext">
            You can always delete the review you already posted and write a new
            one!
          </p>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;

import "../ItemPage-Components/ReviewForm.css";
import useInputState from "../Hooks/useInputState";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCallback, useState, useContext } from "react";

import { useParams } from "react-router-dom";

function ReviewForm({ token, wasBought, handleReviewUpdate }) {
  const [rating, handleRating, resetRating] = useInputState("3");
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
        handleReviewUpdate();
      } catch (err) {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      }
    },
    [itemId, rating, review]
  );

  return (
    <div className="ReviewForm">
      {wasBought &&
        (!error ? (
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
                  />
                  <output id="rangevalue">{rating}</output>
                </div>
                <div className="ReviewForm-btn-container">
                  <button type="submit">SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <p className="already-reviewed-error">
            You can only review an item once!
          </p>
        ))}
    </div>
  );
}

export default ReviewForm;

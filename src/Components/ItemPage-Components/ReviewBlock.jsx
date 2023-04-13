import "../ItemPage-Components/ReviewBlock.css";
import { useState, useContext } from "react";
import { LoggedContext } from "../Context/LoggedContext";
import fullStarsCount from "../Hooks/useDisplayStars";

function ReviewBlock({ review, data, deleteReview }) {
  const { codeUI } = useContext(LoggedContext);

  return (
    <div className="ReviewBlock">
      <div className="ReviewBlock-top">
        {data && (
          <p className="ReviewBlock-top-text">
            <b className="review-user">{review.user.name}</b> rated the{" "}
            {data.model} - {data.name} : <b>{review.rating}</b>{" "}
            {fullStarsCount(review, review.rating)}
          </p>
        )}
      </div>

      <div className="ReviewBlock-bottom">
        <p className="ReviewBlock-text">{review.reviewText}</p>

        {codeUI === review.user.id && (
          <i
            onClick={() => {
              deleteReview(review._id);
            }}
            className="fa-solid fa-trash review-delete-btn"
          ></i>
        )}
      </div>
      <p className="ReviewBlock-date">{review.createdAt.substring(0, 10)}</p>
    </div>
  );
}

export default ReviewBlock;

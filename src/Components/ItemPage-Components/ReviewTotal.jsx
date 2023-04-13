import "../ItemPage-Components/ReviewTotal.css";
import fullStarsCount from "../Hooks/useDisplayStars";

function ReviewTotal({ ratingStats }) {
  return (
    <div className="ReviewTotal">
      <div className="ReviewTotal-box">
        <h5 className="ReviewTotal-title">Total Score</h5>
        <div className="ReviewTotal-score-box">
          <h2 className="ReviewTotal-score">
            {ratingStats &&
              (Number.isNaN(ratingStats.ratingsAverage)
                ? "0"
                : ratingStats.ratingsAverage.toFixed(1))}
          </h2>
          <div className="ReviewTotal-star-box">
            {ratingStats &&
              fullStarsCount(ratingStats, ratingStats.ratingsAverage)}
          </div>
          <h5 className="ReviewTotal-review-count">
            ({ratingStats && ratingStats.ratingsQuantity}{" "}
            {ratingStats && ratingStats.ratingsQuantity === 1
              ? "review"
              : "reviews"}
            )
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ReviewTotal;

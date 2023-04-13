import "../ItemPage-Components/ReviewStats.css";
import RatingBar from "./RatingBar";

function ReviewStats({ filterByRating, starRatingCount, allReviews }) {
  const starArray = [1, 2, 3, 4, 5];
  console.log(starRatingCount);
  return (
    <div className="ReviewStats">
      <h3 className="ReviewStats-title">REVIEWS</h3>
      <div className="ReviewStats-recap-box">
        <h5 className="ReviewStats-recap-box-title">Ratings summary</h5>
        <h6 className="ReviewStats-recap-box-subtitle">
          Select one of the rows to filter the reviews below.
        </h6>
        <div className="ReviewStats-bars-box">
          {starRatingCount &&
            starRatingCount.map((rating, i) => {
              return (
                <RatingBar
                  key={i}
                  id={i}
                  starRating={i + 1}
                  ratingCounts={rating}
                  filterByRating={filterByRating}
                  allReviews={allReviews}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ReviewStats;

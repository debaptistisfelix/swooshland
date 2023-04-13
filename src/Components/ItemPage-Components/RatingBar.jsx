import "../ItemPage-Components/RatingBar.css";
import { useState, useEffect } from "react";

function RatingBar({ starRating, filterByRating, ratingCounts, allReviews }) {
  const [widthPercentage, setWidthPercentage] = useState(0);

  function calculateWidth() {
    let widthPercentageNum = (ratingCounts * 100) / allReviews.length;
    console.log(widthPercentageNum, ratingCounts);
    if (isNaN(widthPercentageNum)) {
      setWidthPercentage(0);
    } else {
      setWidthPercentage(widthPercentageNum);
    }
  }

  useEffect(() => {
    calculateWidth();
  }, []);

  useEffect(() => {
    calculateWidth();
  }, [ratingCounts, allReviews]);

  console.log(
    `widpercentage(${widthPercentage}) = ${ratingCounts} * 100 / ${allReviews.length}`
  );

  return (
    <div
      onClick={() => {
        filterByRating(starRating, starRating);
      }}
      className="RatingBar"
    >
      <p className="RatingBar-star-num">
        {starRating} <i className="fa-sharp fa-solid fa-star"></i>
      </p>
      <div className="RatingBar-bar">
        <div
          style={{
            width: `${widthPercentage}%`,
            borderRadius: widthPercentage === 100 ? "20px" : undefined,
          }}
          className="RatingBar-colored-bar"
        ></div>
      </div>
      <p className="RatingBar-qty">({ratingCounts})</p>
    </div>
  );
}

export default RatingBar;

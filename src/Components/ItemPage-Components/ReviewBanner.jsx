import "../ItemPage-Components/ReviewBanner.css";

function ReviewBanner({ sortFilter, sortBy = { sortBy } }) {
  let sortAll = "";
  let sortBest = "?sort=-rating";
  let sortWorst = "?sort=rating";
  let sortNew = "?sort=-createdAt";
  let sortOld = "?sort=createdAt";

  const activeSort = "selected-sort-btn";
  return (
    <div className="ReviewBanner">
      <h5 className="ReviewBanner-prompt">Sort reviews by:</h5>
      <div className="ReviewBanner-sort-box">
        <button
          onClick={() => {
            sortBy(sortAll, "All");
          }}
          className={`ReviewBanner-sort-btn ${
            sortFilter === "All" && "selected-sort-btn"
          }`}
        >
          ALL
        </button>
        <button
          onClick={() => {
            sortBy(sortBest, "Best");
          }}
          className={`ReviewBanner-sort-btn ${
            sortFilter === "Best" && "selected-sort-btn"
          }`}
        >
          BEST
        </button>
        <button
          onClick={() => {
            sortBy(sortWorst, "Worst");
          }}
          className={`ReviewBanner-sort-btn ${
            sortFilter === "Worst" && "selected-sort-btn"
          }`}
        >
          WORST
        </button>
        <button
          onClick={() => {
            sortBy(sortNew, "Newest");
          }}
          className={`ReviewBanner-sort-btn ${
            sortFilter === "Newest" && "selected-sort-btn"
          }`}
        >
          NEWEST
        </button>
        <button
          onClick={() => {
            sortBy(sortOld, "Oldest");
          }}
          className={`ReviewBanner-sort-btn ${
            sortFilter === "Oldest" && "selected-sort-btn"
          }`}
        >
          OLDEST
        </button>
      </div>
    </div>
  );
}

export default ReviewBanner;

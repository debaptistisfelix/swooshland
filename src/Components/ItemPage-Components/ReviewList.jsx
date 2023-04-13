import "../ItemPage-Components/ReviewList.css";
import ReviewBlock from "./ReviewBlock";

function ReviewList({
  data,
  reviewsUpdate,
  fetchReviews,
  reviews,
  isLoading,
  error,
  deleteReview,
}) {
  return (
    <div className="ReviewList">
      {reviews &&
        (reviews.length === 0 ? (
          <p className="ReviewList-empty">No Reviews yet.</p>
        ) : (
          reviews.map((review) => {
            return (
              <ReviewBlock
                key={review._id}
                review={review}
                data={data}
                deleteReview={deleteReview}
              />
            );
          })
        ))}
      {isLoading && <>Loading reviews ...</>}
      {error && <>{error}</>}
    </div>
  );
}

export default ReviewList;

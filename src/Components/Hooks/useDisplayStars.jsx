function fullStarsCount(mustHave, score) {
  if (mustHave) {
    // First let count how many full, half and empty stars we need
    let fullStars = Math.floor(score);
    let halfStars = score % 1 >= 0.5 ? 1 : 0;
    let emptyStars = 5 - fullStars - halfStars;
    // define empty array in which we will push the star icons
    let stars = [];
    // Lets run 3 loops, each for each star type
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i
          key={`full-${i}`}
          className="fa-solid fa-solid fa-star review-star"
        ></i>
      );
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(
        <i
          key={`half-${i}`}
          className="fa-solid fa-star-half-stroke review-star "
        ></i>
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="fa-regular fa-star review-star"></i>
      );
    }

    return stars;
  }
}

export default fullStarsCount;

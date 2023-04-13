import "../WishlistPage/WishRecap.css";

function WishRecap({ payRecap }) {
  return (
    <div className="WishRecap">
      <span className="WishRecap-title">OVERVIEW</span>
      <div className="WishRecap-subtotal">
        <span className="WishRecap-subtotal-label">SUBTOTAL</span>
        <span className="WishRecap-subtotal-sum">
          ${payRecap && payRecap.subtotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default WishRecap;

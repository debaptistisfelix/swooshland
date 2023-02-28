import "./CartModalNav.css";

function CartModalNav({ openedCartModal }) {
    let CartStatus;
    openedCartModal === true ? CartStatus = "showCartModal" : undefined;
    return (
        <div className={`CartModalNav ${CartStatus}`}>
            <div className="CartModalNav-titlebox">
                <span className="CartModalNav-title"><b>Swoosh</b>Cart <i className="fa-solid fa-cart-shopping"></i></span>
            </div>
            <div className="CartModalNav-cartbox">
                <div className="CartModalNav-itembox">
                    <span className="item-box-qty"><b>1x</b></span>
                    <span className="item-box-name">Jordan 1 Mid - OG Orange</span>
                </div>
                <div className="CartModalNav-itembox">
                    <span className="item-box-qty"><b>1x</b></span>
                    <span className="item-box-name">Jordan 1 Mid - OG Orange</span>
                </div>
                <div className="CartModalNav-itembox">
                    <span className="item-box-qty"><b>1x</b></span>
                    <span className="item-box-name">Jordan 1 Mid - OG Orange</span>
                </div>
                <div className="CartModalNav-itembox">
                    <span className="item-box-qty"><b>1x</b></span>
                    <span className="item-box-name">Jordan 1 Mid - OG Orange</span>
                </div>
                <div className="CartModalNav-itembox">
                    <span className="item-box-qty"><b>1x</b></span>
                    <span className="item-box-name">Jordan 1 Mid - OG Orange</span>
                </div>
                <div className="CartModalNav-itembox">
                    <span className="item-box-qty"><b>1x</b></span>
                    <span className="item-box-name">Jordan 1 Mid - OG Orange</span>
                </div>

            </div>
            <span className="CartModalNav-total">TOTAL: <b>$269.90</b></span>
            <button className="CartModalNav-button">VIEW CART</button>
        </div>
    )
}

export default CartModalNav;
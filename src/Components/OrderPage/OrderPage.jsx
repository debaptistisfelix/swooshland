import "../OrderPage/OrderPage.css";
import { useContext, useState, useEffect } from "react";
import Error404 from "../Error404/Error404";
import OrderShip from "./OrderShip";
import OrderRecap from "./OrderRecap";
import OrderPay from "./OrderPay";
import { useCookies } from "react-cookie";
import { OrderProcessContext } from "../Context/OrderProcessContext";

function OrderPage() {
  const [cookies] = useCookies(["client"]);
  const { displayedPage, setDisplayedPage, setChosenAddress, setUserCart } =
    useContext(OrderProcessContext);

  useEffect(() => {
    setDisplayedPage("OrderShip");
    setChosenAddress("");
    setUserCart(null);
  }, []);

  const [loadedPage, setLoadedPage] = useState(false);
  function loadPage(delay) {
    setTimeout(() => {
      setLoadedPage(true);
    }, delay);
  }
  loadPage(600);

  return (
    <div className="OrderPage">
      {!cookies.client ? (
        <Error404 />
      ) : loadedPage === true ? (
        <div className="OrderPage-container">
          <div className="Order-progressbar">
            <div
              className={`Order-progress-status ${
                displayedPage === "OrderShip" && "active-bar"
              }`}
            >
              {/* {displayedPage === "OrderShip" && "SHIPPING"} */}SHIPPING{" "}
              <i className="fa-solid fa-truck-fast"></i>
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <div
              className={`Order-progress-status ${
                displayedPage === "Recap" && "active-bar"
              }`}
            >
              {/* {displayedPage === "Recap" && "RECAP"} */}RECAP
              <i className="fa-solid fa-eye"></i>
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <div
              className={`Order-progress-status ${
                displayedPage === "Payment" && "active-bar"
              }`}
            >
              PAYMENT {/* {displayedPage === "Payment" && "PAYMENT"} */}
              <i className="fa-solid fa-credit-card"></i>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className="Order-displayer">
            {displayedPage === "OrderShip" && <OrderShip />}
            {displayedPage === "Recap" && <OrderRecap />}
            {displayedPage === "Payment" && <OrderPay />}
          </div>
        </div>
      ) : (
        <div className="OrderPage-loader-box">
          <div className="loader-container">
            <div className="loader"></div>
            <span className="loader-text">LOADING</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPage;

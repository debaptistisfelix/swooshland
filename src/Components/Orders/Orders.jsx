import "../Orders/Orders.css";
import { useState } from "react";
import Error404 from "../Error404/Error404";
import OrdersList from "../Orders/OrdersList";
import { useCookies } from "react-cookie";
import { OrderProvider } from "../Context/OrderContext";

function Orders() {
  const [cookies] = useCookies(["client"]);
  const [loadedPage, setLoadedPage] = useState(false);
  function loadPage(delay) {
    setTimeout(() => {
      setLoadedPage(true);
    }, delay);
  }
  loadPage(600);

  return (
    <div className="Orders">
      {!cookies.client ? (
        <Error404 />
      ) : loadedPage === true ? (
        <div className="Orders-container">
          <OrderProvider>
            <OrdersList />
          </OrderProvider>
        </div>
      ) : (
        <div className="Orders-loader-box">
          <div className="loader-container">
            <div className="loader"></div>
            <span className="loader-text">LOADING</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;

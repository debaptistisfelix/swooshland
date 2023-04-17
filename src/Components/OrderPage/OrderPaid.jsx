import OrderCompleted from "./OrderCompleted";
import OrderFailed from "./OrderFailed";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function OrderPaid() {
  const location = useLocation();
  const [displayedOrderStatus, setDisplayedOrderStatus] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paymentStatus = searchParams.get("payment_status");

    if (paymentStatus === "success") {
      setDisplayedOrderStatus(<OrderCompleted />);
    } else if (paymentStatus === "failed") {
      setDisplayedOrderStatus(<OrderFailed />);
    }
  }, [location]);

  return {
    displayedOrderStatus,
  };
}

export default OrderPaid;

import { useState, useContext } from "react";

function useCartState() {
  const [cart, setCart] = useState([]);
  return [cart, setCart];
}

export default useCartState;

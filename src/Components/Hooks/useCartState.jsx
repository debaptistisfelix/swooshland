import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

function useCartState() {


    const [cart, setCart] = useState([]);
    return [cart, setCart];
}

export default useCartState;
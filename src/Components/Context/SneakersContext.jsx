import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SneakersContext = createContext();

export function SneakersProvider(props) {
    const [sneakers, setSneakers] = useState([]);

    const fetchSneakers = async () => {
        const response = await axios.get("http://localhost:3000/api/sneakers");
        const product = response.data;
        setSneakers(product);
    }



    return (
        <SneakersContext.Provider value={{ sneakers, fetchSneakers }}>
            {props.children}
        </SneakersContext.Provider>
    )
}


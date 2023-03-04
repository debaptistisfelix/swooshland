import { useState, useEffect } from "react";
import axios from "axios";

function UseSneakersState(initialValue) {
    const [sneakers, setSneakers] = useState(initialValue);

    async function fetchSneakers() {
        const response = await axios.get("http://localhost:3000/api/sneakers")
        const items = response.data;
        setSneakers(items);
    }

    useEffect(() => {
        fetchSneakers();
    }, [])

    return [sneakers, fetchSneakers];
}

export default UseSneakersState;
import { useState } from "react";

function useLoadedState() {
    const [loadedPage, setLoadedPage] = useState(false);

    const loadPage = function (delay) {
        setTimeout(() => {
            setLoadedPage(true);
        }, delay);
    }

    return [loadedPage, setLoadedPage, loadPage]
}

export default useLoadedState;
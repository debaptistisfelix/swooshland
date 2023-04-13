import { useState, createContext, useEffect, useContext } from "react";
import useFetchAllItem from "../Hooks/useFetchAllItems";

export const ItemsContext = createContext();

export function ItemsProvider(props) {
  const [listedItems, setListedItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function sortByAsc() {
    const numAsc = [...filteredItems].sort((a, b) => a.price - b.price);
    setFilteredItems(numAsc);
  }
  function sortByDesc() {
    const numDesc = [...filteredItems].sort((a, b) => b.price - a.price);
    setFilteredItems(numDesc);
  }

  function sortByAZ() {
    const arrAZ = [...filteredItems].sort((a, b) => (a.name > b.name ? 1 : -1));
    setFilteredItems(arrAZ);
  }

  function sortByZA() {
    const arrZA = [...filteredItems].sort((a, b) => (a.name > b.name ? -1 : 1));
    setFilteredItems(arrZA);
  }

  return (
    <ItemsContext.Provider
      value={{
        listedItems,
        setListedItems,
        filteredItems,
        setFilteredItems,
        sortByAsc,
        sortByDesc,
        sortByAZ,
        sortByZA,
        isLoading,
        error,
        setIsLoading,
        setError,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
}

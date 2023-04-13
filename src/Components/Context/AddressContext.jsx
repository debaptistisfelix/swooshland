import { createContext } from "react";

import axios from "axios";
import useFetchAddress from "../Hooks/useFetchAddress";

export const AddressContext = createContext();

export function AddressProvider(props) {
  const { data, isLoading, error, setUpdateState } = useFetchAddress(
    "http://localhost:8000/api/addresses"
  );

  return (
    <AddressContext.Provider
      value={{
        data,
        isLoading,
        error,
        setUpdateState,
      }}
    >
      {props.children}
    </AddressContext.Provider>
  );
}

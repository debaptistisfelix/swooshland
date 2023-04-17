import { useState, useCallback, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { LoggedContext } from "../Context/LoggedContext";

const useFetchAddress = (url) => {
  let { token } = useContext(LoggedContext);

  const [address, setAddress] = useState(null);
  const [addressIsLoading, setAddressIsLoading] = useState(true);
  const [addressError, setAddressError] = useState(null);
  const [updateAddressState, setUpdateAddressState] = useState(false);

  const fetchData = useCallback(async () => {
    const headers = { Authorization: `Bearer ${token}` };
    const res = await axios.get(url, {
      headers,
    });
    setAddress(res.data.data.addresses);
    setAddressError(null);
    setAddressIsLoading(false);
    setUpdateAddressState(false);
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchData().catch((err) => {
        setAddressError(err.message);
        setAddressIsLoading(false);
        setAddress(null);
        console.log(err.message);
      });
    }
  }, [fetchData, updateAddressState, token]);

  return {
    address,
    addressError,
    addressIsLoading,
    setUpdateAddressState,
    updateAddressState,
  };
};

export default useFetchAddress;

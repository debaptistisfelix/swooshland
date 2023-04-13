import { useState, useCallback, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { LoggedContext } from "../Context/LoggedContext";

const useFetchAddress = (url) => {
  let { token } = useContext(LoggedContext);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateState, setUpdateState] = useState(false);

  const fetchData = useCallback(async () => {
    const headers = { Authorization: `Bearer ${token}` };
    const res = await axios.get(url, {
      headers,
    });
    setData(res.data.data.addresses);
    setError(null);
    setIsLoading(false);
    setUpdateState(false);
  }, [token]);

  useEffect(() => {
    if (token !== undefined) {
      fetchData().catch((err) => {
        setError(err.message);
        setIsLoading(false);
        setData(null);
        console.log(err.message);
      });
    }
  }, [fetchData, updateState, token]);

  return { data, error, isLoading, setUpdateState, updateState };
};

export default useFetchAddress;

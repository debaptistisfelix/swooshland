import { useState, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const useFetchItem = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateState, setUpdateState] = useState(false);

  const fetchData = useCallback(async () => {
    const res = await axios.get(url);
    setData(res.data.data.data);
    setError(null);
    setIsLoading(false);
    setUpdateState(false);
  }, []);

  useEffect(() => {
    fetchData().catch((err) => {
      setError(err.message);
      setIsLoading(false);
      setData(null);
      console.log(err.message);
    });
  }, [fetchData, updateState]);

  return { data, error, isLoading, setUpdateState, updateState };
};

export default useFetchItem;

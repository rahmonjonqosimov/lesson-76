import { useState, useEffect } from "react";
import axios from "../api";
export function useFetch(url, ...rest) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [...rest]);
  return { data, loading, error };
}

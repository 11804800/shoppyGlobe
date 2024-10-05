import { useEffect, useState } from "react";

//custom hook for fetching the data from user
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);


  useEffect(() => {
    async function FetchData(url) {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    FetchData(url);
  }, [url]);

  return { data, loading, err };
};

export default useFetch;

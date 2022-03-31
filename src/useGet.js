import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    console.log("useGet sent");
    axios
      .get(url, { signal: abortCont.signal })
      .then((res) => {
        console.log("res", res);
        // return res.data.results;
        return res.data;
      })
      .then((res) => {
        console.log("res.data", res);
        setIsPending(false);
        setData(res);
      })
      .catch((e) => {
        if (e.name === "AbortError" || e.name === "Canceled") {
          console.log("fetch aborted");
        } else {
          console.log("Failure:", e);
          setIsPending(false);
          setError(e.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useGet;

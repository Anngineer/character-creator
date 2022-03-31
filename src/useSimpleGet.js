import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useSimpleGet sent");
    axios
      .get(url)
      .then((res) => {
        console.log("res.data", res.data);
        setData(res.data);
        return res.data;
      })
      .catch((e) => {
        console.log("Failure:", e);
        setError(e);
        return e;
      });
  }, [url]);
  return { data, error };
};

export default useGet;

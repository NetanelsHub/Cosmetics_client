import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:3000";

// Custom hook must start with 'use'
const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const getRequest = async () => {
      try {
        setIsLoading(true);
        const {data} = await axios.get(`${url}/${endPoint}`);
        setData(data);
      } catch (error) {
        console.error(error);
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getRequest();
  }, [endPoint]);

  return {data, isLoading, isError};
};

export default useFetch;




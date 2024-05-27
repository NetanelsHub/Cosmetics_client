import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:3000";

const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const { sendGetRequest } = useContext(AuthContext);


  useEffect(() => {
    const getRequest = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${url}/${endPoint}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
        getRequest();
      }, [sendGetRequest]);
    
      return [data,isLoading,isError];
    
};

export default useFetch;

import { useState, useEffect } from "react";
import axios from "axios";
import { Current_Type, Location_Type } from "@/models";

const useFetch = ({ endpoint, query }: { endpoint: string; query: string }) => {
  const [data, setData] = useState<{
    current: Current_Type;
    location: Location_Type;
  }>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const options = {
    method: "GET",
    url: `https://weatherapi-com.p.rapidapi.com/${endpoint}`,
    params: { q: query },
    headers: {
      "X-RapidAPI-Key": "c5141639a1msha8654e814b0bc91p1f15cbjsn715a3655436f",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;

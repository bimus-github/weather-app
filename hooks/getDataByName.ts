import { Data_Type } from "@/models";
import axios from "axios";

export const getDataByName = async ({ name }: { name: string }) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: name },
    headers: {
      "X-RapidAPI-Key": "c5141639a1msha8654e814b0bc91p1f15cbjsn715a3655436f",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data as Data_Type;

    return {
      location: data.location,
      current: data.current,
    };
  } catch (error) {
    console.log(error);
  }
};

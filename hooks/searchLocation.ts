import { Search_Item_Type } from "@/models";
import axios from "axios";

export const searchLocation = async (value: string) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/search.json",
    params: { q: value },
    headers: {
      "X-RapidAPI-Key": "c5141639a1msha8654e814b0bc91p1f15cbjsn715a3655436f",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data as Search_Item_Type[];
  } catch (error) {
    console.error(error);
  }
};

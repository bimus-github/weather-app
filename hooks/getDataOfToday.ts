import { Current_Type, Location_Type } from "@/models";
import axios from "axios";

export const getDataOfToday = async ({
  lot,
  lon,
}: {
  lot: number;
  lon: number;
}) => {
  const today = new Date().valueOf();

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/history.json",
    params: {
      q: `${lot},${lon}`,
      lang: "en",
      dt: new Date(today).toLocaleString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
      end_dt: new Date(today).toLocaleString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
    },
    headers: {
      "X-RapidAPI-Key": "c5141639a1msha8654e814b0bc91p1f15cbjsn715a3655436f",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data as {
      location: Location_Type;
      forecast: {
        forecastday: {
          hour: Current_Type[];
        }[];
      };
    };

    return {
      today: data.forecast.forecastday[0].hour,
    };
  } catch (error) {
    console.log(error);
  }
};

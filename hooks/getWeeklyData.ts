import { Location_Type, Weekly_Data_Type } from "@/models";
import axios from "axios";

export const getWeeklyDataByLocation = async ({
  lot,
  lon,
}: {
  lot: number;
  lon: number;
}) => {
  const today = new Date().valueOf();

  const yesterday = today - 86400000;
  const sevendaybefore = today - 86400000 * 8;

  const yesterdayDate = new Date(yesterday).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const sevendaybeforeDate = new Date(sevendaybefore).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
  );

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/history.json",
    params: {
      q: `${lot},${lon}`,
      lang: "en",
      dt: sevendaybeforeDate,
      end_dt: yesterdayDate,
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
        forecastday: Weekly_Data_Type[];
      };
    };

    return {
      location: data.location,
      week: data.forecast.forecastday,
    };
  } catch (error) {
    console.log(error);
  }
};

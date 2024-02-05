import { Current_Type, Location_Type } from "@/models";
import axios from "axios";
import * as Location from "expo-location";

export const getCurrentLocation = async () => {
  return Location.requestForegroundPermissionsAsync().then(({ status }) => {
    if (status !== "granted") {
      return null;
    }
    return Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
  });
};

export const getDataFromApi = async ({
  lot,
  lon,
}: {
  lot: number;
  lon: number;
}) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: `${lot},${lon}` },
    headers: {
      "X-RapidAPI-Key": "c5141639a1msha8654e814b0bc91p1f15cbjsn715a3655436f",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data as {
      current: Current_Type;
      location: Location_Type;
    };

    return {
      location: data.location,
      current: data.current,
    };
  } catch (error) {
    return {
      location: null,
      current: null,
    };
  }
};

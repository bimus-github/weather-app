import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Location_Type } from "@/models";

export const useGetLocation = () => {
  const [data, setData] = useState<Location_Type>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const getLocation = () => {
    Location.requestForegroundPermissionsAsync()
      .then(async ({ status }) => {
        if (status === "granted") {
          setIsLoading(true);
          const { coords } = await Location.getCurrentPositionAsync({});
          const { latitude, longitude } = coords;
          setData({
            name: "",
            country: "",
            lat: latitude,
            lon: longitude,
            region: "",
          });
        } else {
          setError("Permission to access location was denied");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getLocation();
  }, []);

  const refetch = () => {
    getLocation();
  };

  return { data, isLoading, error, refetch };
};

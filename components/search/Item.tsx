import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { Data_Type, Search_Item_Type } from "@/models";
import { getDataByName } from "@/hooks/getDataByName";
import { useRouter } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { locationActions } from "@/store/slices/currentLocation";
import { getWeeklyDataByLocation } from "@/hooks/getWeeklyData";
import { currentActions } from "@/store/slices/currentWeather";
import { weekActions } from "@/store/slices/week";
import { getDataOfToday } from "@/hooks/getDataOfToday";
import { todayActions } from "@/store/slices/today";

const Item = ({ item }: { item: Search_Item_Type }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { temperatureUnit } = useAppSelector((state) => state.settings);
  const [result, setResult] = useState<Data_Type>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getDataByName({ name: item.name })
      .then((result) => {
        if (result) {
          setResult(result);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleChangeLocation = (city: Search_Item_Type) => {
    if (city) {
      getDataByName({ name: city.name }).then((result) => {
        if (result) {
          const waitFunc = async () => {
            dispatch(locationActions.setCurrentLocation(result.location));
            dispatch(currentActions.setCurrent(result.current));
            getWeeklyDataByLocation({
              lot: result.location.lat,
              lon: result.location.lon,
            }).then((data) => {
              if (data) {
                dispatch(weekActions.setWeek(data.week));
              }
            });

            getDataOfToday({
              lot: result.location.lat,
              lon: result.location.lon,
            }).then((data) => {
              if (data) {
                dispatch(todayActions.setToday(data.today));
              }
            });
          };

          waitFunc().finally(() => {
            router.push("/");
          });
        }
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handleChangeLocation(item)}
      style={styles.item}
      activeOpacity={0.7}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.text.secondary} />
      ) : (
        <>
          <View>
            <Text style={styles.coutryText}>
              {result?.location.name}, {result?.location.region}
            </Text>
            <Text style={styles.extraText}>
              {temperatureUnit === "Celsius" &&
                `${result?.current.temp_c}°C/${result?.current.feelslike_c}°C`}
              {temperatureUnit === "Fahrenheit" &&
                `${result?.current.temp_f}°C/${result?.current.feelslike_f}°C`}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: `https:${result?.current.condition.icon}` }}
              style={styles.icon}
            />
            <Text style={styles.extraText}>
              {result?.current.condition.text}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: "100%",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
    backgroundColor: Colors.bgColor.main,
    borderRadius: 20,
    paddingVertical: 10,
  },
  coutryText: {
    fontSize: 16,
    color: Colors.text.secondary,
    maxWidth: 230,
  },
  extraText: { fontSize: 12, color: "#545B70" },
  icon: { width: 32, height: 32 },
});

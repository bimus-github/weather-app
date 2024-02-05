import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { heavyRain } from "@/constants/Icons";
import Colors from "@/constants/Colors";
import { Data_Type } from "@/models";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { locationActions } from "@/store/slices/currentLocation";
import { currentActions } from "@/store/slices/currentWeather";
import { useRouter } from "expo-router";
import { getWeeklyDataByLocation } from "@/hooks/getWeeklyData";
import { weekActions } from "@/store/slices/week";

const ResultList = ({ result }: { result: Data_Type | undefined }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { temperatureUnit } = useAppSelector((state) => state.settings);

  const handleChangeLocation = () => {
    if (result) {
      const waitFunc = async () => {
        dispatch(locationActions.setCurrentLocation(result.location));
        dispatch(currentActions.setCurrent(result.current));
      };

      waitFunc().then(() => {
        getWeeklyDataByLocation({
          lot: result.location.lat,
          lon: result.location.lon,
        })
          .then((data) => {
            if (data) {
              dispatch(weekActions.setWeek(data.week));
            }
          })
          .finally(() => {
            router.push("/");
          });
      });
    }
  };
  return (
    <View style={styles.container}>
      {result && (
        <TouchableOpacity
          onPress={handleChangeLocation}
          style={styles.item}
          activeOpacity={0.7}
        >
          <View>
            <Text style={styles.coutryText}>
              {result.location.name}, {result.location.region}
            </Text>
            <Text style={styles.extraText}>
              {temperatureUnit === "Celsius" &&
                `${result.current.temp_c}°C/${result.current.feelslike_c}°C`}
              {temperatureUnit === "Fahrenheit" &&
                `${result.current.temp_f}°C/${result.current.feelslike_f}°C`}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: `https:${result.current.condition.icon}` }}
              style={styles.icon}
            />
            <Text style={styles.extraText}>
              {result.current.condition.text}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ResultList;

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

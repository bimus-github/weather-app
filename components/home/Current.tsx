import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import {
  heavyRain,
  humidity,
  locationCurrent,
  pressure,
} from "@/constants/Icons";
import Colors from "@/constants/Colors";
import Divider from "../Divider";
import Header from "./Header";
import { LinearGradient } from "expo-linear-gradient";
import Dimentions from "@/constants/Dimentions";
import useGetCurrent from "@/hooks/useGetCurrent";
import { useGetLocation } from "@/hooks/useGetLocation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { locationActions } from "@/store/slices/currentLocation";

const Current = ({ heightOfMainCard }: { heightOfMainCard: number }) => {
  const { data, error, isLoading, refetch } = useGetLocation();
  const dispatch = useAppDispatch();
  const currentLocation = useAppSelector((state) => state.location);
  const {
    data: current,
    error: currentError,
    isLoading: currentIsLoading,
  } = useGetCurrent({
    endpoint: "current.json",
    query:
      currentLocation.name || `${currentLocation.lat},${currentLocation.lon}`,
  });

  useEffect(() => {
    if (!currentLocation.lat || !currentLocation.lon) {
      if (!data) {
        refetch();
      } else {
        dispatch(locationActions.setCurrentLocation(data));
      }
    }
  }, [currentLocation.lat, currentLocation.lon, data, refetch, dispatch]);

  console.log(current?.current.condition.icon.slice(2));

  return (
    <LinearGradient
      colors={[Colors.bgColor["card-from"], Colors.bgColor["card-to"]]}
      start={[0, 0]}
      end={[0, 1]}
      style={[styles.mainCard, { height: heightOfMainCard }]}
    >
      {isLoading ? (
        <ActivityIndicator color={Colors.text.main} />
      ) : error ? (
        <Text>Samething went wrong!</Text>
      ) : (
        <>
          <Header />
          <Animated.View
            style={[
              { flexDirection: +heightOfMainCard < 400 ? "row" : "column" },
              { alignItems: "center", justifyContent: "center" },
            ]}
          >
            {currentIsLoading ? (
              <ActivityIndicator color={Colors.text.main} />
            ) : (
              <Image
                source={{ uri: `https:${current?.current.condition.icon}` }}
                style={[sizeOfIcon(+heightOfMainCard)]}
              />
            )}
            {currentIsLoading ? (
              <ActivityIndicator color={Colors.text.main} />
            ) : (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: Colors.text.main, fontSize: 16 }}>
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
                <Text style={{ color: Colors.text.main, fontSize: 72 }}>
                  {current?.current.temp_c}°
                </Text>
                <Text style={{ color: Colors.text.main, fontSize: 16 }}>
                  {current?.current.condition.text}
                </Text>
              </View>
            )}
          </Animated.View>
          <Divider />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingVertical: 7,
            }}
          >
            {/* WIND */}
            {currentIsLoading ? (
              <ActivityIndicator color={Colors.text.main} />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={locationCurrent}
                  style={{ width: 32, height: 32, tintColor: Colors.text.main }}
                />
                <View>
                  <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                    {current?.current.wind_kph} kph
                  </Text>
                  <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                    Wind
                  </Text>
                </View>
              </View>
            )}

            {/* CLOUD */}
            {currentIsLoading ? (
              <ActivityIndicator color={Colors.text.main} />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: `https:${current?.current.condition.icon}`,
                  }}
                  style={{ width: 32, height: 32 }}
                />
                <View style={{ alignItems: "center" }}>
                  <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                    {current?.current.cloud}
                  </Text>
                  <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                    Chance of rain
                  </Text>
                </View>
              </View>
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingVertical: 7,
            }}
          >
            {/* PRESSURE */}
            {currentIsLoading ? (
              <ActivityIndicator color={Colors.text.main} />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={pressure}
                  style={{ width: 32, height: 32, tintColor: Colors.text.main }}
                />
                <View style={{ alignItems: "center" }}>
                  <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                    {current?.current.pressure_mb} mb
                  </Text>
                  <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                    Pressure
                  </Text>
                </View>
              </View>
            )}

            {/* HUMIDITY */}
            {currentIsLoading ? (
              <ActivityIndicator color={Colors.text.main} />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={humidity}
                  style={{ width: 32, height: 32, tintColor: Colors.text.main }}
                />
                <View>
                  <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                    {current?.current.humidity}%
                  </Text>
                  <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                    Humidity
                  </Text>
                </View>
              </View>
            )}
          </View>
        </>
      )}
    </LinearGradient>
  );
};

export default Current;

const styles = StyleSheet.create({
  mainCard: {
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 30,
    gap: 5,
  },
});

const sizeOfIcon = (heightOfMainCard: number) => {
  const maxSize = 200; // if heightOfMainCard = Dimentions.height * 0.8
  const minSize = 100; // if heightOfMainCard = Dimentions.height * 0.5

  const size =
    (maxSize - minSize) * (heightOfMainCard / Dimentions.height) + minSize;

  return {
    width: size,
    height: size,
  };
};

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  NativeModules,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
  ScrollViewComponent,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Current, Today, Week } from "@/components/home";
import Dimentions from "@/constants/Dimentions";
import { getCurrentLocation, getDataFromApi } from "@/hooks/getCurrentLocation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { currentActions } from "@/store/slices/currentWeather";
import { locationActions } from "@/store/slices/currentLocation";
import Colors from "@/constants/Colors";
import { getWeeklyDataByLocation } from "@/hooks/getWeeklyData";
import { weekActions } from "@/store/slices/week";
import { getDataOfToday } from "@/hooks/getDataOfToday";
import { todayActions } from "@/store/slices/today";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentLocation = useAppSelector((state) => state.location);
  const [isLodaing, setIsLodaing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [heightOfMainCard, setHeightOfMainCard] = useState(
    Dimentions.height * 0.5
  );

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = e.nativeEvent.contentOffset.y;
    if (scrollY > 0 && heightOfMainCard > Dimentions.height * 0.5) {
      setHeightOfMainCard((p) => p - 20);
    }

    if (scrollY < 0 && heightOfMainCard < Dimentions.height * 0.7) {
      setHeightOfMainCard((p) => p + 20);
    }
  };

  useEffect(() => {
    if (!currentLocation.name.length) {
      setIsLodaing(true);
      getCurrentLocation()
        .then((location) => {
          if (location) {
            const { latitude, longitude } = location.coords;

            getDataFromApi({ lot: latitude, lon: longitude }).then((data) => {
              const { location, current } = data;

              if (current) {
                dispatch(currentActions.setCurrent(current));
              }

              if (location) {
                dispatch(locationActions.setCurrentLocation(location));
              }
            });

            getWeeklyDataByLocation({
              lot: latitude,
              lon: longitude,
            }).then((data) => {
              if (data) {
                dispatch(weekActions.setWeek(data.week));
              }
            });

            getDataOfToday({
              lot: latitude,
              lon: longitude,
            }).then((data) => {
              if (data) {
                dispatch(todayActions.setToday(data.today));
              }
            });
          } else {
            setIsLodaing(false);
            setIsError(true);
          }
        })
        .finally(() => setIsLodaing(false));
    }
  }, [dispatch, currentLocation]);

  return (
    <SafeAreaView style={styles.container}>
      {isLodaing ? (
        <ActivityIndicator size="large" color={Colors.text.main} />
      ) : isError ? (
        <Text>Something went wrong</Text>
      ) : (
        <>
          <Current heightOfMainCard={heightOfMainCard} />
          <Today />
          <Week />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 3,
  },
});

export default Home;

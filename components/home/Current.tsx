import { View, StyleSheet } from "react-native";
import React from "react";
import { humidity, locationCurrent, pressure } from "@/constants/Icons";
import Colors from "@/constants/Colors";
import Divider from "../Divider";
import Header from "./Header";
import { LinearGradient } from "expo-linear-gradient";
import MainAnimatedCard from "./MainAnimatedCard";
import Item from "./Item";
import { useAppSelector } from "@/store/hooks";

const Current = ({ heightOfMainCard }: { heightOfMainCard: number }) => {
  const { current } = useAppSelector((state) => state.current);
  const { pressureUnit, windSpeedUnit } = useAppSelector(
    (state) => state.settings
  );
  return (
    <LinearGradient
      colors={[Colors.bgColor["card-from"], Colors.bgColor["card-to"]]}
      start={[0, 0]}
      end={[0, 1]}
      style={[styles.mainCard, { height: heightOfMainCard }]}
    >
      <>
        <Header />
        <MainAnimatedCard heightOfMainCard={heightOfMainCard} />
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
          <Item
            sourceIcon={locationCurrent}
            name="Wind"
            value={
              windSpeedUnit === "km/h"
                ? `${current?.wind_kph} km/h`
                : windSpeedUnit === "m/s"
                ? `${current?.wind_kph || 0 * 3.6} m/s`
                : windSpeedUnit === "mi/h"
                ? `${current?.wind_mph || 0 * 2.24} mi/h`
                : windSpeedUnit === "ft/s"
                ? `${current?.wind_mph || 0 * 3.281} ft/s`
                : `${current?.wind_kph || 0 * 3.6} kn`
            }
          />

          {/* CLOUD */}
          <Item
            sourceIcon={{ uri: `https:${current?.condition.icon}` }}
            name="Chance of rain"
            value={`${current?.cloud}%`}
          />
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
          <Item
            sourceIcon={pressure}
            name="Pressure"
            value={
              pressureUnit === "mbar"
                ? `${current?.pressure_mb} mbar`
                : pressureUnit === "inHg"
                ? `${current?.pressure_mb || 0 * 0.02953} inHg`
                : pressureUnit === "hPa"
                ? `${current?.pressure_mb || 0 * 0.01} hPa`
                : pressureUnit === "atm"
                ? `${current?.pressure_mb || 0 * 0.009869} atm`
                : `${current?.pressure_mb || 0 * 0.01} mmHg`
            }
          />

          {/* HUMIDITY */}
          <Item
            sourceIcon={humidity}
            name="Humidity"
            value={`${current?.humidity}%`}
          />
        </View>
      </>
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

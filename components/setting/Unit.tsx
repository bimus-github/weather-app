import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import TempUnit from "./TempUnit";
import WindSpeedUnit from "./WindSpeedUnit";
import PressureUnit from "./PressureUnit";

const Unit = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.text.main,
          fontWeight: "500",
          fontSize: 12,
        }}
      >
        UNIT
      </Text>
      <View style={styles.list}>
        <TempUnit />
        <WindSpeedUnit />
        <PressureUnit />
      </View>
    </View>
  );
};

export default Unit;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
  },
  list: {
    gap: 20,
    marginTop: 30,
  },
});

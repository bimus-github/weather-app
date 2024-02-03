import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MenuModal from "../MenuModal";
import Colors from "@/constants/Colors";
import { MenuItem } from "react-native-material-menu";

const WindSpeedUnit = () => {
  const [visibleWindSpeedUnit, setVisibleWindSpeedUnit] =
    useState<boolean>(false);
  const [currentWindSpeedUnit, setCurrentWindSpeedUnit] =
    useState<string>("km/h");

  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>Wind speed unit</Text>
      <MenuModal
        anchor={
          <TouchableOpacity onPress={() => setVisibleWindSpeedUnit(true)}>
            <Text style={[styles.itemText, { color: Colors.text.unit }]}>
              {currentWindSpeedUnit}
            </Text>
          </TouchableOpacity>
        }
        visible={visibleWindSpeedUnit}
        setVisible={setVisibleWindSpeedUnit}
        children={
          <>
            {["km/h", "m/s", "mi/h", "ft/s", "kn"].map((item, index) => (
              <MenuItem
                key={index}
                onPress={() => {
                  setVisibleWindSpeedUnit(false);
                  setCurrentWindSpeedUnit(item);
                }}
              >
                {item}
              </MenuItem>
            ))}
          </>
        }
      />
    </View>
  );
};

export default WindSpeedUnit;

const styles = StyleSheet.create({
  item: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    color: Colors.text.main,
    fontSize: 16,
  },
});

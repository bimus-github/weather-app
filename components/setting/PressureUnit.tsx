import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MenuModal from "../MenuModal";
import Colors from "@/constants/Colors";
import { MenuItem } from "react-native-material-menu";

const PressureUnit = () => {
  const [visiblePressureUnit, setVisiblePressureUnit] =
    useState<boolean>(false);
  const [currentPressureUnit, setCurrentPressureUnit] =
    useState<string>("mbar");

  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>Temperature unit</Text>
      <MenuModal
        anchor={
          <TouchableOpacity onPress={() => setVisiblePressureUnit(true)}>
            <Text style={[styles.itemText, { color: Colors.text.unit }]}>
              {currentPressureUnit}
            </Text>
          </TouchableOpacity>
        }
        visible={visiblePressureUnit}
        setVisible={setVisiblePressureUnit}
        children={
          <>
            {["mbar", "mmHg", "inHg", "atm", "hPa"].map((item, index) => (
              <MenuItem
                key={index}
                onPress={() => {
                  setVisiblePressureUnit(false);
                  setCurrentPressureUnit(item);
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

export default PressureUnit;

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

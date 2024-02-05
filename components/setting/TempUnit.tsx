import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MenuModal from "../MenuModal";
import Colors from "@/constants/Colors";
import { MenuItem } from "react-native-material-menu";
import { TemperatureUnit } from "@/models";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { settingsActions } from "@/store/slices/settings";

const TempUnit = () => {
  const dispatch = useAppDispatch();
  const [visibleTempUnit, setVisibleTempUnit] = useState<boolean>(false);
  const { temperatureUnit } = useAppSelector((state) => state.settings);

  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>Temperature unit</Text>
      <MenuModal
        anchor={
          <TouchableOpacity onPress={() => setVisibleTempUnit(true)}>
            <Text style={[styles.itemText, { color: Colors.text.unit }]}>
              {temperatureUnit}
            </Text>
          </TouchableOpacity>
        }
        visible={visibleTempUnit}
        setVisible={setVisibleTempUnit}
        children={
          <>
            {["Celsius", "Fahrenheit"].map((item, index) => (
              <MenuItem
                key={index}
                onPress={() => {
                  setVisibleTempUnit(false);
                  dispatch(
                    settingsActions.setTemperatureUnit(item as TemperatureUnit)
                  );
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

export default TempUnit;

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

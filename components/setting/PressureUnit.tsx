import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MenuModal from "../MenuModal";
import Colors from "@/constants/Colors";
import { MenuItem } from "react-native-material-menu";
import { PressureUnit } from "@/models";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { settingsActions } from "@/store/slices/settings";

const Pressure = () => {
  const dispatch = useAppDispatch();
  const [visiblePressureUnit, setVisiblePressureUnit] =
    useState<boolean>(false);
  const { pressureUnit } = useAppSelector((state) => state.settings);

  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>Pressure unit</Text>
      <MenuModal
        anchor={
          <TouchableOpacity onPress={() => setVisiblePressureUnit(true)}>
            <Text style={[styles.itemText, { color: Colors.text.unit }]}>
              {pressureUnit}
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
                  dispatch(
                    settingsActions.setPressureUnit(item as PressureUnit)
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

export default Pressure;

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

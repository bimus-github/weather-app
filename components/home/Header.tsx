import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { menu, plus } from "@/constants/Icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={plus} style={styles.headIcon} />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: Colors.text.main,
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Tashkent
        </Text>
      </View>
      <TouchableOpacity>
        <Image source={menu} style={styles.headIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headIcon: { width: 32, height: 32, tintColor: "#fff" },
});

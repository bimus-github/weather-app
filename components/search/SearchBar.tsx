import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { search } from "@/constants/Icons";

const SearchBar = () => {
  return (
    <View style={styles.bar}>
      <Image
        source={search}
        style={{ width: 16, height: 16, tintColor: "#4f4f4f" }}
      />
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={Colors.text.placeholder}
        placeholder="Search Your City"
        keyboardType="twitter"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  bar: {
    marginVertical: 10,
    width: 326,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.bgColor.placeholder,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});

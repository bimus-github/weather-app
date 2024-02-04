import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { search } from "@/constants/Icons";

const SearchBar = () => {
  const [city, setCity] = useState<string>("");
  const handleSearch = () => {};
  return (
    <View style={styles.bar}>
      <TouchableOpacity onPress={handleSearch}>
        <Image
          source={search}
          style={{ width: 20, height: 20, tintColor: "#4f4f4f" }}
        />
      </TouchableOpacity>
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={Colors.text.placeholder}
        placeholder="Search Your City"
        keyboardType="twitter"
        value={city}
        onChangeText={setCity}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  bar: {
    marginVertical: 10,
    width: 326,
    height: 44,
    borderRadius: 8,
    backgroundColor: Colors.bgColor.placeholder,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});

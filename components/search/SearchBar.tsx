import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { search } from "@/constants/Icons";
import { Data_Type } from "@/models";
import { getDataByName } from "@/hooks/getDataByName";

const SearchBar = ({
  result,
  setResult,
}: {
  result: Data_Type | undefined;
  setResult: (result: Data_Type) => void;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");

  const handleSearch = () => {
    if (city) {
      setIsLoading(true);
      getDataByName({ name: city })
        .then((data) => {
          if (data) {
            setResult(data);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <View style={styles.bar}>
      {isLoading ? (
        <ActivityIndicator color={Colors.text.secondary} />
      ) : (
        <TouchableOpacity onPress={handleSearch}>
          <Image
            source={search}
            style={{ width: 20, height: 20, tintColor: "#4f4f4f" }}
          />
        </TouchableOpacity>
      )}
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

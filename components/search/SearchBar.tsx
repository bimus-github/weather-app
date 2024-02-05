import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { search } from "@/constants/Icons";
import { Search_Item_Type } from "@/models";
import { searchLocation } from "@/hooks/searchLocation";

const SearchBar = ({
  setResult,
}: {
  setResult: (result: Search_Item_Type[]) => void;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <View style={styles.bar}>
      {isLoading ? (
        <ActivityIndicator color={Colors.text.secondary} />
      ) : (
        <TouchableOpacity>
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
        onChangeText={(text) => {
          if (text) {
            setIsLoading(true);
            searchLocation(text)
              .then((result) => {
                if (result) {
                  setResult(result);
                }
              })
              .finally(() => setIsLoading(false));
          }
        }}
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

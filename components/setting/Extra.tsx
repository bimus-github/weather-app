import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Extra = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.text.main,
          fontWeight: "500",
          fontSize: 12,
        }}
      >
        EXTRA
      </Text>
      <View style={styles.list}>
        <TouchableOpacity>
          <Text style={styles.itemText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.itemText}>Privacy policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Extra;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
  },
  list: {
    gap: 20,
    marginTop: 30,
  },
  itemText: {
    fontSize: 16,
    color: Colors.text.main,
  },
});

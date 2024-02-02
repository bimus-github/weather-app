import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React from "react";
import { heavyRain } from "@/constants/Icons";
import Colors from "@/constants/Colors";

const Today = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sunday | Nov 14</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text
              style={{
                color: Colors.text.main,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Now
            </Text>
            <Image
              source={heavyRain}
              style={{ width: 24, height: 24, tintColor: Colors.text.main }}
            />
            <Text
              style={{
                color: Colors.text.main,
                fontSize: 12,
                fontWeight: "400",
              }}
            >
              20C/24C
            </Text>
            <Text
              style={{
                color: Colors.text.main,
                fontSize: 12,
                fontWeight: "400",
              }}
            >
              74% Humidity
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 140,
    backgroundColor: Colors.bgColor.card,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
  },
  title: { color: Colors.text.main, fontSize: 16, fontWeight: "600" },
  card: {
    width: 80,
    height: 140,
    alignItems: "center",
    marginHorizontal: 5,
    gap: 5,
  },
});

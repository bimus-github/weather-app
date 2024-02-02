import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { heavyRain } from "@/constants/Icons";

const Week = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forcats for 7 Days</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text
              style={{
                color: Colors.text.main,
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              Sun
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                style={{ width: 24, height: 24, tintColor: Colors.text.main }}
                source={heavyRain}
              />
              <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                20% rain
              </Text>
            </View>
            <Text style={{ color: Colors.text.main, fontSize: 12 }}>
              20C/10C
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
};

export default Week;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: Colors.bgColor.card,
    paddingVertical: 10,
    gap: 10,
  },
  title: {
    color: Colors.text.main,
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 20,
  },
  card: {
    height: 48,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

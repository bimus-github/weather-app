import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { useAppSelector } from "@/store/hooks";

const Week = () => {
  const { week } = useAppSelector((state) => state.week);
  const { temperatureUnit } = useAppSelector((state) => state.settings);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forecasts for 7 Days</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={week}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text
              style={{
                color: Colors.text.main,
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              {new Date(item.date).toLocaleDateString("en-GB", {
                weekday: "short",
              })}
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={{
                  uri: `https:${item.day.condition.icon}`,
                }}
              />
              <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                {item.day.daily_chance_of_rain}% Cloud
              </Text>
            </View>
            <Text style={{ color: Colors.text.main, fontSize: 12 }}>
              {temperatureUnit === "Celsius" &&
                `${item.day.maxtemp_c}°/${item.day.mintemp_c}°`}
              {temperatureUnit === "Fahrenheit" &&
                `${item.day.maxtemp_f}°/${item.day.mintemp_c}°`}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.date}
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

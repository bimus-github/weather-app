import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { useAppSelector } from "@/store/hooks";

const Today = () => {
  const { today } = useAppSelector((state) => state.today);
  const tempUnit = useAppSelector((state) => state.settings.temperatureUnit);
  const currentDate = useAppSelector(
    (state) => state.current.current?.last_updated
  );
  const currentHour = +(currentDate || "2022-11-14 00:00").slice(-5, -3);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sunday | Nov 14</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={today.slice(currentHour)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text
              style={{
                color: Colors.text.main,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              {item.time.slice(-5)}
            </Text>
            <Image
              source={{
                uri: `https:${item.condition.icon}`,
              }}
              style={{ width: 24, height: 24 }}
            />
            <Text
              style={{
                color: Colors.text.main,
                fontSize: 12,
                fontWeight: "400",
              }}
            >
              {tempUnit === "Celsius" && `${item.temp_c}°/${item.feelslike_c}°`}
              {tempUnit === "Fahrenheit" &&
                `${item.temp_f}°/${item.feelslike_f}°`}
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
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
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

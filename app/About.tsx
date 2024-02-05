import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/Colors";
import { Header } from "@/components/about";

const About = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[Colors.bgColor["card-from"], Colors.bgColor["card-to"]]}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.container}
      >
        <Header />
        <View style={{ width: "100%", gap: 20 }}>
          <Text style={{ color: Colors.text.main, fontWeight: "700" }}>
            Goal: Show off my skills in React Native.
          </Text>
          <Text style={{ color: Colors.text.main, fontWeight: "700" }}>
            Created by: Muhammad Amin
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 30,
    padding: 16,
    gap: 40,
  },
});

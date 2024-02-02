import { View, Text, Image, Animated, StyleSheet } from "react-native";
import React from "react";
import { heavyRain, locationCurrent } from "@/constants/Icons";
import Colors from "@/constants/Colors";
import Divider from "../Divider";
import Header from "./Header";
import { LinearGradient } from "expo-linear-gradient";
import Dimentions from "@/constants/Dimentions";

const Current = ({ heightOfMainCard }: { heightOfMainCard: number }) => {
  const sizeOfIcon = () => {
    const maxSize = 200; // if heightOfMainCard = Dimentions.height * 0.8
    const minSize = 100; // if heightOfMainCard = Dimentions.height * 0.5

    const size =
      (maxSize - minSize) * (+heightOfMainCard / Dimentions.height) + minSize;

    return {
      width: size,
      height: size,
    };
  };
  return (
    <LinearGradient
      colors={[Colors.bgColor["card-from"], Colors.bgColor["card-to"]]}
      start={[0, 0]}
      end={[0, 1]}
      style={[styles.mainCard, { height: heightOfMainCard }]}
    >
      <Header />
      <Animated.View
        style={[
          { flexDirection: +heightOfMainCard < 400 ? "row" : "column" },
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Animated.Image
          source={heavyRain}
          style={[sizeOfIcon(), { tintColor: "#fff" }]}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: Colors.text.main, fontSize: 16 }}>
            Sunday | Nov 14
          </Text>
          <Text style={{ color: Colors.text.main, fontSize: 72 }}>24C</Text>
          <Text style={{ color: Colors.text.main, fontSize: 16 }}>
            Heavy rain
          </Text>
        </View>
      </Animated.View>
      <Divider />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 7,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={locationCurrent}
            style={{ width: 32, height: 32, tintColor: Colors.text.main }}
          />
          <View>
            <Text style={{ color: Colors.text.main, fontSize: 12 }}>
              3.7 km/h
            </Text>
            <Text style={{ color: Colors.text.main, fontSize: 12 }}>Wind</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={locationCurrent}
            style={{ width: 32, height: 32, tintColor: Colors.text.main }}
          />
          <View>
            <Text style={{ color: Colors.text.main, fontSize: 12 }}>
              3.7 km/h
            </Text>
            <Text style={{ color: Colors.text.main, fontSize: 12 }}>Wind</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 7,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={locationCurrent}
            style={{ width: 32, height: 32, tintColor: Colors.text.main }}
          />
          <View>
            <Text style={{ color: Colors.text.main, fontSize: 12 }}>
              3.7 km/h
            </Text>
            <Text style={{ color: Colors.text.main, fontSize: 12 }}>Wind</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={locationCurrent}
            style={{ width: 32, height: 32, tintColor: Colors.text.main }}
          />
          <View>
            <Text style={{ color: Colors.text.main, fontSize: 12 }}>
              3.7 km/h
            </Text>
            <Text style={{ color: Colors.text.main, fontSize: 12 }}>Wind</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Current;

const styles = StyleSheet.create({
  mainCard: {
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 30,
    gap: 5,
  },
});

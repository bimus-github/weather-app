import { View, Text, Animated, Image } from "react-native";
import React from "react";
import Dimentions from "@/constants/Dimentions";
import Colors from "@/constants/Colors";
import { heavyRain } from "@/constants/Icons";
import { useAppSelector } from "@/store/hooks";

const MainAnimatedCard = ({
  heightOfMainCard,
}: {
  heightOfMainCard: number;
}) => {
  const { current } = useAppSelector((state) => state.current);
  const { temperatureUnit } = useAppSelector((state) => state.settings);
  return (
    <Animated.View
      style={[
        { flexDirection: +heightOfMainCard < 400 ? "row" : "column" },
        { alignItems: "center", justifyContent: "center" },
        { marginBottom: 10 },
      ]}
    >
      <Image
        source={{
          uri: `https:${current?.condition.icon}`,
        }}
        style={[sizeOfIcon(+heightOfMainCard)]}
      />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: Colors.text.main, fontSize: 16 }}>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </Text>
        <Text style={{ color: Colors.text.main, fontSize: 72 }}>
          {(temperatureUnit === "Celsius" && `${current?.temp_c}°`) ||
            (temperatureUnit === "Fahrenheit" && `${current?.temp_f}°`)}
        </Text>
        <Text style={{ color: Colors.text.main, fontSize: 16 }}>
          {current?.condition.text}
        </Text>
      </View>
    </Animated.View>
  );
};

export default MainAnimatedCard;

const sizeOfIcon = (heightOfMainCard: number) => {
  const maxSize = 200; // if heightOfMainCard = Dimentions.height * 0.8
  const minSize = 100; // if heightOfMainCard = Dimentions.height * 0.5

  const size =
    (maxSize - minSize) * (heightOfMainCard / Dimentions.height) + minSize;

  return {
    width: size,
    height: size,
  };
};

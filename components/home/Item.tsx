import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Item = ({
  name,
  value,
  sourceIcon,
}: {
  name?: string;
  value?: string;
  sourceIcon?: ImageSourcePropType;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Image
        source={sourceIcon}
        style={{ width: 32, height: 32, tintColor: Colors.text.main }}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: Colors.text.main, fontSize: 12 }}>{value}</Text>
        <Text style={{ color: Colors.text.main, fontSize: 12 }}>{name}</Text>
      </View>
    </View>
  );
};

export default Item;

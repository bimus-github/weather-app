import { View, Text } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Divider = ({ horizontal = true }: { horizontal?: boolean }) => {
  return (
    <View
      style={[
        { height: horizontal ? 1 : "100%", width: !horizontal ? 1 : "100%" },
        { backgroundColor: Colors.text.main },
      ]}
    ></View>
  );
};

export default Divider;

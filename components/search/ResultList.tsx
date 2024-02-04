import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { heavyRain } from "@/constants/Icons";
import Colors from "@/constants/Colors";

const ResultList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2]}
        renderItem={() => (
          <TouchableOpacity style={styles.item}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.coutryText}>Tashkent</Text>
              <Text style={styles.extraText}>20C/24C</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image source={heavyRain} style={styles.icon} />
              <Text style={styles.extraText}>Heavy Rain</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: "100%",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
    backgroundColor: Colors.bgColor.main,
    borderRadius: 20,
    paddingVertical: 10,
  },
  coutryText: { fontSize: 16, color: Colors.text.secondary },
  extraText: { fontSize: 12, color: "#545B70" },
  icon: { width: 32, height: 32, tintColor: Colors.text.secondary },
});

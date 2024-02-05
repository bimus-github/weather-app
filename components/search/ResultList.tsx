import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Search_Item_Type } from "@/models";
import Item from "./Item";

const ResultList = ({ result }: { result: Search_Item_Type[] | undefined }) => {
  return (
    <View style={styles.container}>
      {result && (
        <FlatList
          showsVerticalScrollIndicator
          data={result}
          renderItem={({ item }) => <Item item={item} />}
        />
      )}
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
  coutryText: {
    fontSize: 16,
    color: Colors.text.secondary,
    maxWidth: 230,
  },
  extraText: { fontSize: 12, color: "#545B70" },
  icon: { width: 32, height: 32 },
});

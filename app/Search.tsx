import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/Colors";
import { Header, ResultList, SearchBar } from "@/components/search";
import useFetch from "@/hooks/useGetCurrent";

const Search = () => {
  // const { data, error, isLoading, refetch } = useFetch({
  //   endpoint: "current.json",
  //   query: "Tashkent",
  // });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[Colors.bgColor["card-from"], Colors.bgColor["card-to"]]}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.container}
      >
        <Header />
        <SearchBar />
        <ResultList />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 30,
    padding: 16,
  },
});

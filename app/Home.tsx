import Colors from "@/constants/Colors";
import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  NativeModules,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
  SectionList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Dimentions from "@/constants/Dimentions";
import Today from "@/components/home/Today";
import Current from "@/components/home/Current";
import Week from "@/components/home/Week";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const Home: React.FC = () => {
  const [heightOfMainCard, setHeightOfMainCard] = useState(
    Dimentions.height * 0.7
  );

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = e.nativeEvent.contentOffset.y;
    if (scrollY > 0 && heightOfMainCard > Dimentions.height * 0.5) {
      setHeightOfMainCard((p) => p - 10);
    }

    if (scrollY < 0 && heightOfMainCard < Dimentions.height * 0.7) {
      setHeightOfMainCard((p) => p + 10);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onScroll={onScroll}
        scrollEventThrottle={1}
        data={[
          <Current heightOfMainCard={heightOfMainCard} />,
          <Today />,
          <Week />,
        ]}
        renderItem={({ item }) => item}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  mainCard: {
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 30,
    gap: 7,
  },
});

export default Home;

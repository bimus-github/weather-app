import React, { useState } from "react";
import {
  StyleSheet,
  NativeModules,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
  ScrollViewComponent,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Current, Today, Week } from "@/components/home";
import Dimentions from "@/constants/Dimentions";

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
      setHeightOfMainCard((p) => p - 20);
    }

    if (scrollY < 0 && heightOfMainCard < Dimentions.height * 0.7) {
      setHeightOfMainCard((p) => p + 20);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onScroll={onScroll} scrollEventThrottle={10}>
        <Current heightOfMainCard={heightOfMainCard} />
        <Today />
        <Week />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default Home;

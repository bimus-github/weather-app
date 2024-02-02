import Colors from "@/constants/Colors";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Easing,
  TouchableOpacity,
  NativeModules,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { heavyRain, locationCurrent, menu, plus } from "@/constants/Icons";
import Header from "@/components/home/Header";
import Dimentions from "@/constants/Dimentions";
import Divider from "@/components/Divider";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const Home: React.FC = () => {
  const [heightOfMainCard, setHeightOfMainCard] = useState(
    Dimentions.height * 0.75
  );

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = e.nativeEvent.contentOffset.y;
    if (scrollY > 0 && heightOfMainCard > Dimentions.height * 0.5) {
      setHeightOfMainCard((p) => p - 10);
    }

    if (scrollY < 0 && heightOfMainCard < Dimentions.height * 0.75) {
      setHeightOfMainCard((p) => p + 10);
    }
  };

  const sizeOfIcon = () => {
    const maxSize = 220; // if heightOfMainCard = Dimentions.height * 0.8
    const minSize = 110; // if heightOfMainCard = Dimentions.height * 0.5

    const size =
      (maxSize - minSize) * (heightOfMainCard / Dimentions.height) + minSize;

    return {
      width: size,
      height: size,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        onScroll={onScroll}
        scrollEventThrottle={1}
      >
        <Animated.View style={[styles.mainCard, { height: heightOfMainCard }]}>
          <Header />
          <Animated.View
            style={[
              { flexDirection: heightOfMainCard < 400 ? "row" : "column" },
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
                <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                  Wind
                </Text>
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
                <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                  Wind
                </Text>
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
                <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                  Wind
                </Text>
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
                <Text style={{ color: Colors.text.main, fontSize: 12 }}>
                  Wind
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>

        <View style={{}}>
          <Text>Scroll down to see the header height change!</Text>
          {/* Your scrollable content goes here */}
        </View>
      </ScrollView>
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
    backgroundColor: Colors.bgColor["card-from"],
    gap: 7,
  },
});

export default Home;

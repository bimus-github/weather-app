import Colors from "@/constants/Colors";
import { backArrow } from "@/constants/Icons";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Header = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={backArrow} style={styles.headIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>Manage location</Text>
      <View></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headIcon: { width: 32, height: 32, tintColor: "#fff" },
  title: { color: Colors.text.main, fontWeight: "600", fontSize: 16 },
});

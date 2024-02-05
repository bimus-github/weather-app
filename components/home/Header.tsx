import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { menu, plus } from "@/constants/Icons";
import { useRouter } from "expo-router";
import MenuModal from "../MenuModal";
import { MenuItem } from "react-native-material-menu";
import { useAppSelector } from "@/store/hooks";

const Header = () => {
  const router = useRouter();
  const { name } = useAppSelector((state) => state.location);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.push("/Search")}>
        <Image source={plus} style={styles.headIcon} />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: Colors.text.main,
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          {name ? name : "Current Location"}
        </Text>
      </View>
      <MenuModal
        visible={isMenuOpened}
        setVisible={setIsMenuOpened}
        anchor={
          <TouchableOpacity onPress={() => setIsMenuOpened(!isMenuOpened)}>
            <Image source={menu} style={styles.headIcon} />
          </TouchableOpacity>
        }
        children={
          <>
            {[
              { name: "Share", path: "/" },
              { name: "Setting", path: "/Setting" },
            ].map((item, index) => (
              <MenuItem
                key={index}
                onPress={() => {
                  router.push(item.path as any);
                  setIsMenuOpened(false);
                }}
              >
                <Text>{item.name}</Text>
              </MenuItem>
            ))}
          </>
        }
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headIcon: { width: 32, height: 32, tintColor: "#fff" },
});

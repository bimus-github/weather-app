import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { menu, plus } from "@/constants/Icons";
import { useRouter } from "expo-router";
import MenuModal from "../MenuModal";
import { MenuItem } from "react-native-material-menu";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import useGetCurrent from "@/hooks/useGetCurrent";
import { locationActions } from "@/store/slices/currentLocation";

const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const currentLocation = useAppSelector((state) => state.location);
  const { data, error, isLoading, refetch } = useGetCurrent({
    endpoint: "current.json",
    query:
      currentLocation.name || `${currentLocation.lat},${currentLocation.lon}`,
  });

  useEffect(() => {
    if (!currentLocation.name) {
      if (!data) {
        refetch();
      } else {
        dispatch(locationActions.setCurrentLocation(data.location));
      }
    }
  }, []);

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
        {isLoading ? (
          <ActivityIndicator color={Colors.text.main} />
        ) : error ? (
          <Text>Not found</Text>
        ) : (
          <Text
            style={{
              color: Colors.text.main,
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            {data?.location.name}
          </Text>
        )}
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

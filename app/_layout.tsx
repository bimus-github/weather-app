import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import Colors from "@/constants/Colors";
import { Provider } from "react-redux";
import store from "@/store";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "Home",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/Poppins-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Provider store={store}>
      <Stack
        initialRouteName="/"
        screenOptions={{
          contentStyle: { backgroundColor: Colors.bgColor.main },
          header: () => null,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="Search" />
        <Stack.Screen name="Setting" />
        <Stack.Screen name="About" />
      </Stack>
    </Provider>
  );
}

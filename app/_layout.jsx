import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/poppins/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/poppins/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/poppins/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/poppins/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/poppins/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/poppins/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/poppins/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/poppins/Poppins-Thin.ttf"),
    "Poppins-ThinItalic": require("../assets/poppins/Poppins-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(pages)" options={{ headerShown: false }} />
      <Stack.Screen name="(match)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

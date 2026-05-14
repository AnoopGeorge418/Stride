import { SplashScreen, Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from 'expo-status-bar'

import { useFonts } from "expo-font";
import { useEffect } from "react";
import { customFonts } from "@/hooks/useCustomFonts";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {

  const [loaded, error] = useFonts( customFonts );

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null;
  }
  
  return (
    <View style= {{ flex: 1 }}>
      <Stack screenOptions={{ 
        headerShown: false,
        statusBarHidden: true,
        statusBarAnimation: 'fade',
      }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="auto" hidden />
    </View>
  );
}

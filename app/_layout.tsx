// app/_layout.tsx
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import GradientBackground from "../components/GradientBackground";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={MyTheme}>
      <GradientBackground>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        >
          {/* Load the Tab Bar group first */}
          <Stack.Screen name="(tabs)" />

          {/* Load PlayerProfile outside the tabs so it covers the whole screen when opened */}
          <Stack.Screen name="PlayerProfile" />
        </Stack>
      </GradientBackground>
    </ThemeProvider>
  );
}

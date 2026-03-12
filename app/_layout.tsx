import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native"; // Import these
import GradientBackground from "../components/GradientBackground";

// Create a custom theme with a transparent background
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
        />
      </GradientBackground>
    </ThemeProvider>
  );
}

import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function GradientBackground({ children }) {
  // Swapping test colors for those Bayern reds!
  const bayernColors = ["#000000", "#8B0000"];

  return (
    <LinearGradient colors={bayernColors} style={styles.absolute}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  absolute: {
    flex: 1, // This is crucial to fill the screen
  },
});

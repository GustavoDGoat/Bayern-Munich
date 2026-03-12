// components/globalStyles.js
import { StyleSheet } from "react-native";

export const colors = {
  bayernRed: "#DC052D", // Bright Bayern red for accents
  bayernRedDark: "#8B0000", // Darker red for depth
  bayernWhite: "#FFFFFF", // Pure white for text
  bayernGrey: "#CCCCCC", // Light grey for secondary text
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // Remove backgroundColor since gradient provides it
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.bayernWhite, // White text on dark background
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: colors.bayernGrey, // Light grey for better readability
  },
  profileContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  profileCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.bayernWhite,
    borderWidth: 2,
    borderColor: colors.bayernWhite,
    justifyContent: "center",
    alignItems: "center",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },

  officialText: {
    color: "#DC052D",
    frontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  welcomeCard: {
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  cardGradieant: {
    padding: 24,
    minHeight: 100,
    justifyContent: "space-between",
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontStyle: "italic",
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 8,
  },

  proBadge: {
    backgroundColor: "#DC052D",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  proBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
  },
  loyaltyText: {
    color: "rgba (255, 255, 255, 0.5)",
    fontSize: 14,
    fontWeight: "500",
  },
  manageButton: {
    backgroundColor: "#0066B2",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 20,
    gap: 8,
  },
  manageText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
    justifyContent: "center",
  },

  mottoText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    fontStyle: "italic",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    resizeMode: "contain",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent card
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    // Subtle border instead of shadow for dark theme
    borderWidth: 1,
    borderColor: "rgba(220, 5, 45, 0.3)", // Bayern red with low opacity
  },
  yourSquad: {
    fontSize: 22,
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: 1,
  },
  ViewAll: {
    color: "#DC052D",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  ViewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#",
  },
});

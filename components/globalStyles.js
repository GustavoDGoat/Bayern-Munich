// components/globalStyles.js
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.75;

export const colors = {
  bayernRed: "#DC052D",
  bayernRedDark: "#8B0000",
  bayernWhite: "#FFFFFF",
  bayernGrey: "#CCCCCC",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.bayernWhite,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: colors.bayernGrey,
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
    fontSize: 12, // Fixed typo from 'frontSize'
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
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
    color: "rgba(255, 255, 255, 0.5)", // Fixed spacing inside rgba
    fontSize: 14,
    fontWeight: "500",
  },
  manageButton: {
    backgroundColor: "#0066B2",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12,
    marginTop: 20,
    gap: 8,
  },
  manageText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
  },
  ViewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 30,
    marginBottom: 10,
  },
  ViewAll: {
    color: "#DC052D",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  // SQUAD CAROUSEL STYLES
  card: {
    width: CARD_WIDTH,
    height: 400,
    borderRadius: 15,
    backgroundColor: "#1a1a1a",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#333",
  },
  playerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  infoContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    zIndex: 2,
  },
  playerNumber: {
    color: "#DC052D",
    fontSize: 40,
    fontWeight: "900",
    fontStyle: "italic",
    opacity: 0.9,
  },
  playerName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: -10,
  },
  details: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 4,
  },
  // --- LIVE MATCH CARD ---
  matchCard: {
    backgroundColor: "#0A0A0A", // Very dark background matching your image
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#222",
  },
  liveHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  liveIndicatorGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#DC052D",
  },
  liveHeaderText: {
    color: "#888",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  liveTime: {
    color: "#DC052D",
    fontSize: 14,
    fontWeight: "900",
    fontStyle: "italic",
  },
  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  teamBlock: {
    alignItems: "center",
    flex: 1,
  },
  teamLogoPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#1A1A1A",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#333",
  },
  teamName: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  scoreInfoCenter: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  scoreText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: 2,
  },
  stadiumText: {
    color: "#555",
    fontSize: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: 4,
  },

  // --- SEASON PERFORMANCE SECTION ---
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    fontStyle: "italic",
    textTransform: "uppercase",
    marginHorizontal: 15,
    marginTop: 35,
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    gap: 12, // Automatically spaces the two cards
  },
  statCard: {
    flex: 1, // Makes sure both cards take up exactly half the space
    backgroundColor: "#0A0A0A",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#222",
  },
  statLabel: {
    color: "#888",
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  statValueRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  statValueText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900",
    fontStyle: "italic",
  },
  statSubTextRed: {
    color: "#DC052D",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 4,
  },
});

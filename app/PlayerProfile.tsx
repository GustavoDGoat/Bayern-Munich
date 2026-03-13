import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated, // <-- IMPORT ANIMATED
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";

// IMPORTANT: Ensure this path correctly points to your SquadData.ts file
import { SQUAD_DATA } from "../components/SquadData";

const { height } = Dimensions.get("window");
const HERO_HEIGHT = height * 0.45;

export default function PlayerProfileScreen() {
  const { id } = useLocalSearchParams();

  const ALL_PLAYERS = SQUAD_DATA.flatMap((section) => section.data);
  const player = ALL_PLAYERS.find((p) => p.id === String(id));

  // --- 1. PARALLAX ANIMATION SETUP ---
  // Create an animated value that tracks the user's vertical scroll position
  const scrollY = useRef(new Animated.Value(0)).current;

  // Calculate the scale of the image based on the scroll position
  // When pulling down (negative scroll), scale smoothly from 1 up to 1.5
  const imageScale = scrollY.interpolate({
    inputRange: [-100, 0],
    outputRange: [1.5, 1],
    extrapolateLeft: "extend", // Keep growing if they pull harder!
    extrapolateRight: "clamp", // Don't shrink the image when scrolling normally
  });

  if (!player) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={{ color: "#FFF", fontSize: 18, marginBottom: 20 }}>
          Player data not found.
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.positionTag}
        >
          <Text style={styles.positionText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const isGoalkeeper = player.position === "Goalkeeper";

  return (
    <View style={styles.container}>
      {/* --- 2. ANIMATED SCROLLVIEW --- */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        bounces={true} // Must be true so iOS/Android allows the "pull down" over-scroll
        scrollEventThrottle={16} // Fires the scroll event every ~16ms for smooth 60fps tracking
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }, // Keeps the animation butter-smooth by running on the native thread
        )}
      >
        <View style={styles.heroContainer}>
          {/* --- 3. ANIMATED IMAGE --- */}
          <Animated.Image
            source={player.image}
            style={[
              styles.heroImage,
              { transform: [{ scale: imageScale }] }, // Apply our zooming math here!
            ]}
            resizeMode="cover"
          />
          <LinearGradient
            colors={["transparent", "rgba(22, 12, 17, 0.8)", "#160C11"]}
            style={styles.gradientOverlay}
          />

          <View style={styles.headerArea}>
            <TouchableOpacity
              style={styles.iconButton}
              activeOpacity={0.7}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Player Profile</Text>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="share-social" size={22} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.heroTextContainer}>
            <View style={styles.tagRow}>
              <View style={styles.positionTag}>
                <Text style={styles.positionText}>
                  {player.position.toUpperCase()}
                </Text>
              </View>
              <Text style={styles.heroNumber}>#{player.number}</Text>
            </View>

            <Text style={styles.playerName}>{player.name}</Text>

            <View style={styles.demographicsRow}>
              <View style={styles.demoItem}>
                <Ionicons name="flag" size={14} color="#DC052D" />
                <Text style={styles.demoText}>{player.country}</Text>
              </View>
              <View style={styles.demoItem}>
                <MaterialCommunityIcons
                  name="cake-variant"
                  size={14}
                  color="#DC052D"
                />
                <Text style={styles.demoText}>{player.age} Years Old</Text>
              </View>
            </View>
          </View>
        </View>

        {/* --- CONTENT SECTION --- */}
        <View style={styles.contentContainer}>
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="bar-chart" size={20} color="#DC052D" />
            <Text style={styles.sectionTitle}>Season Stats</Text>
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>
                {isGoalkeeper ? "Clean Sheets" : "Goals"}
              </Text>
              <View style={styles.statValueRow}>
                <Text style={styles.statValue}>{player.stats.primary}</Text>
                <Text style={styles.statGreenText}>This Season</Text>
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>
                {isGoalkeeper ? "Saves" : "Assists"}
              </Text>
              <View style={styles.statValueRow}>
                <Text style={styles.statValue}>{player.stats.secondary}</Text>
                <Text style={styles.statGreenText}>This Season</Text>
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Pass Accuracy</Text>
              <View style={styles.statValueRow}>
                <Text style={styles.statValue}>{player.stats.passAcc}</Text>
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Key Metric</Text>
              <View style={styles.statValueRow}>
                <Text style={styles.statValue}>{player.stats.keyMetric}</Text>
              </View>
            </View>
          </View>

          <Text
            style={[styles.sectionTitle, { marginTop: 25, marginBottom: 15 }]}
          >
            Biography
          </Text>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>{player.bio}</Text>
          </View>

          <View style={[styles.sectionHeaderRow, { marginTop: 25 }]}>
            <MaterialCommunityIcons name="history" size={22} color="#DC052D" />
            <Text style={styles.sectionTitle}>Recent Form</Text>
          </View>

          <View style={[styles.formCard, { borderLeftColor: "#4ade80" }]}>
            <View>
              <Text style={styles.matchTitle}>VS B. DORTMUND (H)</Text>
              <Text style={styles.matchScore}>3 - 1 Win</Text>
            </View>
            <View style={styles.formRight}>
              <View style={styles.ratingBox}>
                <Text style={styles.ratingLabel}>Rating</Text>
                <Text style={[styles.ratingValue, { color: "#4ade80" }]}>
                  9.2
                </Text>
              </View>
              <View style={styles.eventBadge}>
                <MaterialCommunityIcons name="soccer" size={12} color="#FFF" />
                <Text style={styles.eventText}>x2</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 40 }} />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

// --- STYLES ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#160C11" },
  heroContainer: { height: HERO_HEIGHT, position: "relative" },
  heroImage: { width: "100%", height: "100%", position: "absolute" },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "60%",
  },
  headerArea: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
  heroTextContainer: { position: "absolute", bottom: 20, left: 20, right: 20 },
  tagRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  positionTag: {
    backgroundColor: "#DC052D",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 10,
  },
  positionText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
  },
  heroNumber: {
    color: "#DC052D",
    fontSize: 18,
    fontWeight: "900",
    fontStyle: "italic",
  },
  playerName: {
    color: "#FFF",
    fontSize: 36,
    fontWeight: "900",
    marginBottom: 10,
  },
  demographicsRow: { flexDirection: "row", alignItems: "center" },
  demoItem: { flexDirection: "row", alignItems: "center", marginRight: 15 },
  demoText: { color: "#FFF", fontSize: 12, marginLeft: 6, fontWeight: "600" },
  contentContainer: { paddingHorizontal: 20, paddingTop: 10 },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  statCard: {
    width: "48%",
    backgroundColor: "#201114",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3A1B22",
  },
  statLabel: {
    color: "#aaa",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 8,
  },
  statValueRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  statValue: { color: "#FFF", fontSize: 28, fontWeight: "bold" },
  statGreenText: { color: "#4ade80", fontSize: 10, fontWeight: "bold" },
  bioCard: {
    backgroundColor: "#201114",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3A1B22",
  },
  bioText: { color: "#CCC", fontSize: 14, lineHeight: 22 },
  formCard: {
    backgroundColor: "#201114",
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#3A1B22",
  },
  matchTitle: {
    color: "#888",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 4,
  },
  matchScore: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  formRight: { flexDirection: "row", alignItems: "center" },
  ratingBox: { alignItems: "flex-end", marginRight: 15 },
  ratingLabel: { color: "#888", fontSize: 10 },
  ratingValue: { fontSize: 16, fontWeight: "bold" },
  eventBadge: {
    backgroundColor: "#DC052D",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
  },
  eventText: { color: "#FFF", fontSize: 12, fontWeight: "bold" },
});

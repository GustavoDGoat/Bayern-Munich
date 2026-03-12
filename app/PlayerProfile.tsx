import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");
const HERO_HEIGHT = height * 0.45; // Hero image takes up 45% of screen

export default function PlayerProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {/* --- 1. HERO SECTION --- */}
        <View style={styles.heroContainer}>
          <Image
            source={require("../assets/images/bayern.png")} // Replace with Jamal Musiala action shot
            style={styles.heroImage}
            resizeMode="cover"
          />
          {/* Gradient to fade the image smoothly into the background color */}
          <LinearGradient
            colors={["transparent", "rgba(22, 12, 17, 0.8)", "#160C11"]}
            style={styles.gradientOverlay}
          />

          {/* Custom Header (Overlays the image) */}
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

          {/* Player Info (Bottom of Hero) */}
          <View style={styles.heroTextContainer}>
            <View style={styles.tagRow}>
              <View style={styles.positionTag}>
                <Text style={styles.positionText}>ATTACKING MIDFIELDER</Text>
              </View>
              <Text style={styles.heroNumber}>#42</Text>
            </View>

            <Text style={styles.playerName}>Jamal Musiala</Text>

            <View style={styles.demographicsRow}>
              <View style={styles.demoItem}>
                <Ionicons name="flag" size={14} color="#DC052D" />
                <Text style={styles.demoText}>Germany</Text>
              </View>
              <View style={styles.demoItem}>
                <MaterialCommunityIcons
                  name="cake-variant"
                  size={14}
                  color="#DC052D"
                />
                <Text style={styles.demoText}>21 Years Old</Text>
              </View>
            </View>
          </View>
        </View>

        {/* --- 2. CONTENT SECTION --- */}
        <View style={styles.contentContainer}>
          {/* SEASON STATS */}
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="bar-chart" size={20} color="#DC052D" />
            <Text style={styles.sectionTitle}>Season Stats</Text>
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Goals</Text>
              <View style={styles.statValueRow}>
                <Text style={styles.statValue}>12</Text>
                <Text style={styles.statGreenText}>+2 vs BVB</Text>
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Assists</Text>
              <View style={styles.statValueRow}>
                <Text style={styles.statValue}>8</Text>
                <Text style={styles.statGreenText}>+1 last match</Text>
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Pass Accuracy</Text>
              <View style={styles.statValueRow}>
                <Text style={styles.statValue}>89%</Text>
                <Text style={styles.statGreenText}>Top 5%</Text>
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Dribbles (avg)</Text>
              <View style={styles.statValueRow}>
                <Text style={styles.statValue}>4.2</Text>
                <Text style={styles.statGreenText}>Elite</Text>
              </View>
            </View>
          </View>

          {/* BIOGRAPHY */}
          <Text
            style={[styles.sectionTitle, { marginTop: 25, marginBottom: 15 }]}
          >
            Biography
          </Text>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>
              Jamal Musiala is one of the most exciting young talents in world
              football. Known for his incredible close control and dribbling
              ability, he has become a cornerstone of the FC Bayern and German
              National Team midfield. Since joining the senior squad, "Bambi"
              has consistently delivered match-winning performances on the
              biggest stages.
            </Text>
          </View>

          {/* RECENT FORM */}
          <View style={[styles.sectionHeaderRow, { marginTop: 25 }]}>
            <MaterialCommunityIcons name="history" size={22} color="#DC052D" />
            <Text style={styles.sectionTitle}>Recent Form</Text>
          </View>

          {/* Form Card: Win */}
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

          {/* Form Card: Win (Leverkusen) */}
          <View style={[styles.formCard, { borderLeftColor: "#4ade80" }]}>
            <View>
              <Text style={styles.matchTitle}>VS LEVERKUSEN (A)</Text>
              <Text style={styles.matchScore}>1 - 2 Win</Text>
            </View>
            <View style={styles.formRight}>
              <View style={styles.ratingBox}>
                <Text style={styles.ratingLabel}>Rating</Text>
                <Text style={[styles.ratingValue, { color: "#4ade80" }]}>
                  7.8
                </Text>
              </View>
              <View style={[styles.eventBadge, { backgroundColor: "#3b82f6" }]}>
                {/* Blue badge for assist */}
                <MaterialCommunityIcons
                  name="shoe-cleat"
                  size={12}
                  color="#FFF"
                />
                <Text style={styles.eventText}>x1</Text>
              </View>
            </View>
          </View>

          {/* Form Card: Draw */}
          <View style={[styles.formCard, { borderLeftColor: "#fbbf24" }]}>
            <View>
              <Text style={styles.matchTitle}>VS REAL MADRID (H)</Text>
              <Text style={styles.matchScore}>2 - 2 Draw</Text>
            </View>
            <View style={styles.formRight}>
              <View style={styles.ratingBox}>
                <Text style={styles.ratingLabel}>Rating</Text>
                <Text style={[styles.ratingValue, { color: "#fbbf24" }]}>
                  7.1
                </Text>
              </View>
              <View style={[styles.eventBadge, { backgroundColor: "#555" }]}>
                <Ionicons name="time-outline" size={12} color="#FFF" />
                <Text style={styles.eventText}>82'</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 40 }} />
        </View>
      </ScrollView>
    </View>
  );
}

// --- STYLES ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#160C11", // The deep dark background
  },
  heroContainer: {
    height: HERO_HEIGHT,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "60%",
  },
  headerArea: {
    position: "absolute",
    top: 50, // SafeArea roughly
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
    backgroundColor: "rgba(255,255,255,0.1)", // Semi-transparent circle
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  heroTextContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  tagRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
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
  demographicsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  demoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  demoText: {
    color: "#FFF",
    fontSize: 12,
    marginLeft: 6,
    fontWeight: "600",
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
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
    width: "48%", // Forces 2 columns
    backgroundColor: "#201114", // Dark reddish tint
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
  statValue: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
  },
  statGreenText: {
    color: "#4ade80",
    fontSize: 10,
    fontWeight: "bold",
  },
  bioCard: {
    backgroundColor: "#201114",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3A1B22",
  },
  bioText: {
    color: "#CCC",
    fontSize: 14,
    lineHeight: 22,
  },
  formCard: {
    backgroundColor: "#201114",
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 4, // Dynamic colored border
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
  matchScore: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  formRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingBox: {
    alignItems: "flex-end",
    marginRight: 15,
  },
  ratingLabel: {
    color: "#888",
    fontSize: 10,
  },
  ratingValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventBadge: {
    backgroundColor: "#DC052D", // Red for goals by default
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
  },
  eventText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

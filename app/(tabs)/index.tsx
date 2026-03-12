// app/index.tsx
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import { globalStyles } from "../../components/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
const { width } = Dimensions.get("window");
// Setting the card width to 75% of the screen so the next card peeks in
const CARD_WIDTH = width * 0.75;

interface Player {
  id: string;
  name: string;
  number: string;
  position: string;
  nationality: string;
  image: ImageSourcePropType;
}
// 1. DATA ARRAY
const SQUAD_DATA = [
  {
    id: "1",
    name: "Harry Kane",
    number: "09",
    position: "Center-Forward",
    nationality: "England",
    image: require("../../assets/images/bayern.png"), // Replace with player action shots later!
  },
  {
    id: "2",
    name: "Jamal Musiala",
    number: "10",
    position: "Midfielder",
    nationality: "Germany",
    image: require("../../assets/images/bayern.png"),
  },
  {
    id: "3",
    name: "Manuel Neuer",
    number: "01",
    position: "Goalkeeper",
    nationality: "Germany",
    image: require("../../assets/images/bayern.png"),
  },
];

// 2. PLAYER CARD COMPONENT
const PlayerCard = ({ item }: { item: Player }) => (
  <TouchableOpacity
    style={globalStyles.card}
    activeOpacity={0.9}
    onPress={() => {
      // Pushes the user to the PlayerProfile.tsx file
      router.push("/PlayerProfile");
    }}
  >
    {/* Player Image as Background */}
    <Image source={item.image} style={globalStyles.playerImage} />

    {/* Gradient Overlay to make the white text readable against the image */}
    <LinearGradient
      colors={["transparent", "rgba(0,0,0,0.8)"]}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "60%",
      }}
    />

    <View style={globalStyles.infoContainer}>
      {/* Inline style for the Red number to make it pop */}
      <Text style={[globalStyles.playerNumber, { color: "#DC052D" }]}>
        {item.number}
      </Text>
      <Text style={globalStyles.playerName}>{item.name}</Text>
      <Text style={globalStyles.details}>
        {item.position} | {item.nationality}
      </Text>
    </View>
  </TouchableOpacity>
);

const bayernLogo = require("../../assets/images/bayern.png");

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER SECTION */}
        <View style={globalStyles.headerRow}>
          <View style={globalStyles.profileCircle}>
            <Image source={bayernLogo} style={globalStyles.profileImage} />
          </View>

          <View style={globalStyles.textContainer}>
            <Text style={globalStyles.officialText}>OFFICIAL APP</Text>
            <Text style={globalStyles.mottoText}>Mia San Mia</Text>
          </View>

          <View style={globalStyles.iconContainer}>
            <Ionicons name="search" size={24} color="white" />
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
        </View>

        {/* WELCOME CARD */}
        <View style={globalStyles.welcomeCard}>
          <LinearGradient
            colors={["#1C1C1C", "#0A0A0A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={globalStyles.cardGradieant}
          >
            <View>
              <Text style={globalStyles.welcomeText}>WELCOME, GUS</Text>
              <View style={globalStyles.badgeRow}>
                <View style={globalStyles.proBadge}>
                  <Text style={globalStyles.proBadgeText}>PRO MEMBER</Text>
                </View>
                <Text style={globalStyles.loyaltyText}>
                  #84,291 Loyalty Points
                </Text>
              </View>
            </View>

            <TouchableOpacity style={globalStyles.manageButton}>
              <Text style={globalStyles.manageText}>Manage Membership</Text>
              <Ionicons name="arrow-forward" size={12} color="white" />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* SQUAD SECTION HEADER */}
        <View
          style={[
            globalStyles.ViewHeader,
            { marginTop: 30, paddingHorizontal: 15 },
          ]}
        >
          <Text style={globalStyles.welcomeText}>Your Squad</Text>
          <TouchableOpacity onPress={() => console.log("View All")}>
            <Text style={globalStyles.ViewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* THE HORIZONTAL CAROUSEL */}
        <FlatList
          data={SQUAD_DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          // The magic for smooth snapping:
          snapToInterval={CARD_WIDTH + 20}
          decelerationRate="fast"
          contentContainerStyle={{ paddingLeft: 15, paddingVertical: 15 }}
          renderItem={({ item }) => <PlayerCard item={item} />}
        />

        {/* BOTTOM PADDING */}
        {/* --- LIVE MATCH CARD --- */}
        <View style={globalStyles.matchCard}>
          {/* Top Row: Live Indicator & Time */}
          <View style={globalStyles.liveHeaderRow}>
            <View style={globalStyles.liveIndicatorGroup}>
              <View style={globalStyles.liveDot} />
              <Text style={globalStyles.liveHeaderText}>
                Live Match • Bundesliga
              </Text>
            </View>
            <Text style={globalStyles.liveTime}>72'</Text>
          </View>

          {/* Middle Row: Teams and Score */}
          <View style={globalStyles.scoreRow}>
            {/* Home Team */}
            <View style={globalStyles.teamBlock}>
              <View
                style={[
                  globalStyles.teamLogoPlaceholder,
                  { backgroundColor: "#fff" },
                ]}
              >
                {/* We use your local Bayern logo here */}
                <Image
                  source={bayernLogo}
                  style={{ width: 30, height: 30, resizeMode: "contain" }}
                />
              </View>
              <Text style={globalStyles.teamName}>FC Bayern</Text>
            </View>

            {/* Score Center */}
            <View style={globalStyles.scoreInfoCenter}>
              <Text style={globalStyles.scoreText}>2 - 0</Text>
              <Text style={globalStyles.stadiumText}>Allianz Arena</Text>
            </View>

            {/* Away Team */}
            <View style={globalStyles.teamBlock}>
              <View style={globalStyles.teamLogoPlaceholder}>
                {/* Placeholder for Leverkusen Logo */}
                <Ionicons name="shield-outline" size={24} color="#555" />
              </View>
              <Text style={globalStyles.teamName}>Leverkusen</Text>
            </View>
          </View>
        </View>

        {/* --- SEASON PERFORMANCE --- */}
        <Text style={globalStyles.sectionTitle}>Season Performance</Text>

        <View style={globalStyles.statsContainer}>
          {/* Stat Card 1: League Position */}
          <View style={globalStyles.statCard}>
            <Text style={globalStyles.statLabel}>League Pos</Text>
            <View style={globalStyles.statValueRow}>
              <Text style={globalStyles.statValueText}>1st</Text>
              <Ionicons name="trending-up" size={18} color="#4ade80" />
            </View>
          </View>

          {/* Stat Card 2: Goals Scored */}
          <View style={globalStyles.statCard}>
            <Text style={globalStyles.statLabel}>Goals Scored</Text>
            <View style={globalStyles.statValueRow}>
              <Text style={globalStyles.statValueText}>58</Text>
              <Text style={globalStyles.statSubTextRed}>+3.2/m</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  );
}

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SectionList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SQUAD_DATA, Player, SquadSection } from "../../components/SquadData"; // Adjust path if needed!

export default function SquadScreen() {
  const [activeFilter, setActiveFilter] = useState("All");

  // --- FILTER LOGIC ---
  // This dynamically creates a new list based on the active button
  const filteredSquad = SQUAD_DATA.map((section) => {
    return {
      ...section,
      data: section.data.filter((player) => {
        if (activeFilter === "All") return true;
        if (activeFilter === "Starter") return player.status === "Starter";
        if (activeFilter === "Bench") return player.status === "Bench";
        return true;
      }),
    };
  }).filter((section) => section.data.length > 0); // Hides headers like "Forwards" if no forwards match the filter

  // --- RENDERERS ---
  const renderPlayer = ({ item }: { item: Player }) => (
    <TouchableOpacity
      style={styles.playerRow}
      activeOpacity={0.7}
      onPress={() =>
        router.push({ pathname: "/PlayerProfile", params: { id: item.id } })
      }
    >
      {/* Avatar & Number Badge */}
      <View style={styles.avatarContainer}>
        <Image source={item.image} style={styles.avatar} />
        <View style={styles.numberBadge}>
          <Text style={styles.numberText}>{item.number}</Text>
        </View>
      </View>

      {/* Player Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.playerName}>{item.name}</Text>
        <Text style={styles.countryText}>
          <Text style={styles.countryCode}>{item.countryCode}</Text> •{" "}
          {item.country}
        </Text>
      </View>

      {/* Chevron Icon */}
      <Ionicons name="chevron-forward" size={20} color="#888" />
    </TouchableOpacity>
  );

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: SquadSection;
  }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>First Team</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* FILTER TABS */}
      <View style={styles.filterRow}>
        {["All", "Starter", "Bench"].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterPill,
              activeFilter === filter && styles.filterPillActive,
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.filterTextActive,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* SQUAD LIST */}
      <SectionList
        sections={filteredSquad} // <-- IMPORTANT: Swapped SQUAD_DATA for filteredSquad here!
        keyExtractor={(item) => item.id}
        renderItem={renderPlayer}
        renderSectionHeader={renderSectionHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

// --- STYLES ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#160C11", // Deep dark reddish-black from your design
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  filterRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2A1618",
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#2A1618",
    marginRight: 10,
  },
  filterPillActive: {
    backgroundColor: "#DC052D",
  },
  filterText: {
    color: "#CCC",
    fontWeight: "bold",
    fontSize: 14,
  },
  filterTextActive: {
    color: "#FFF",
  },
  sectionHeader: {
    backgroundColor: "#2A1618", // Slightly lighter for the section band
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  sectionHeaderText: {
    color: "#DC052D",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
  },
  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#2A1618",
  },
  avatarContainer: {
    position: "relative",
    marginRight: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 12, // Slight curve like your design
    backgroundColor: "#2A1618",
  },
  numberBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#DC052D",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#160C11", // Creates the "cutout" effect
  },
  numberText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
  },
  playerName: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  countryText: {
    color: "#888",
    fontSize: 12,
  },
  countryCode: {
    color: "#DC052D",
    fontWeight: "bold",
  },
});

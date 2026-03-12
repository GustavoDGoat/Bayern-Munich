// app/(tabs)/profile.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UserProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle" size={80} color="#DC052D" />
        <Text style={styles.userName}>Gus</Text>
        <Text style={styles.membershipText}>PRO MEMBER • #84,291 Pts</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Digital Membership Card</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Ticket Wallet</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#160C11", padding: 20 },
  header: { alignItems: "center", marginTop: 40, marginBottom: 40 },
  userName: { color: "#FFF", fontSize: 28, fontWeight: "900", marginTop: 10 },
  membershipText: {
    color: "#DC052D",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  menuContainer: {
    backgroundColor: "#201114",
    borderRadius: 12,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#3A1B22",
  },
  menuText: { color: "#FFF", fontSize: 16, fontWeight: "600" },
});

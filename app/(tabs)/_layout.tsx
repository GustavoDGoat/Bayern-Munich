// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hides the default top header
        tabBarStyle: {
          backgroundColor: "#160C11", // Deep dark red/black to match your theme
          borderTopWidth: 1,
          borderTopColor: "#2A1618",
          paddingBottom: 5,
          height: 60,
        },
        tabBarActiveTintColor: "#DC052D", // Bayern Red for active tab
        tabBarInactiveTintColor: "#888888", // Gray for inactive
      }}
    >
      {/* 1. HOME TAB (Points to index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={24} color={color} />
          ),
        }}
      />

      {/* 2. SQUAD TAB (Points to squad.tsx) */}
      <Tabs.Screen
        name="squad"
        options={{
          title: "Squad",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-sharp" size={24} color={color} />
          ),
        }}
      />

      {/* 3. USER PROFILE TAB (Points to profile.tsx) */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        // Make the text labels a bit smaller and bolder for a modern look
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700",
          marginTop: -4,
        },
        tabBarStyle: {
          backgroundColor: "#160C11", // Deep dark red/black
          borderTopWidth: 0, // Removing the hard top border makes it look sleeker
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          // Adjust height slightly based on device so the floating button has room
          height: Platform.OS === "ios" ? 85 : 65,
          paddingBottom: Platform.OS === "ios" ? 25 : 10,
        },
        tabBarActiveTintColor: "#DC052D", // Bayern Red
        tabBarInactiveTintColor: "#888888", // Gray
      }}
    >
      {/* 1. HOME TAB */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            // Switches from outline to filled when tapped
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      {/* 2. SQUAD TAB (Floating Highlight Button) */}
      <Tabs.Screen
        name="squad"
        options={{
          title: "Squad",
          // Hide the label so the floating circle sits perfectly alone
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 56,
                height: 56,
                backgroundColor: focused ? "#DC052D" : "#2A1618",
                borderRadius: 28,
                justifyContent: "center",
                alignItems: "center",
                // Push the button up so it breaks out of the tab bar
                marginBottom: Platform.OS === "ios" ? 20 : 35,
                // The "Cutout" effect: a thick border matching the background
                borderWidth: 4,
                borderColor: "#160C11",
                // The glowing shadow
                shadowColor: focused ? "#DC052D" : "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: focused ? 0.6 : 0.3,
                shadowRadius: 8,
                elevation: 5,
              }}
            >
              <Ionicons
                name={focused ? "people" : "people-outline"}
                size={26}
                color={focused ? "#FFF" : "#CCC"}
              />
            </View>
          ),
        }}
      />

      {/* 3. USER PROFILE TAB */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account-circle" : "account-circle-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

// app/index.tsx
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { globalStyles } from "../components/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.75; 

const SQUAD_DATA=[
  {
    id: '1',
    name= 'Harry Kane',
    number='09',
    position: 'center-forward',
    nationality: 'England',
    image : require('../assets/images/bayern.png')
  },
  {
    id: '2',
    name: 'Jamal Musiala',
    number: '10',
    position: 'Midfielder',
    nationality: 'Germany',
    image: require('../assets/images/bayern.png')
  }
]

const PlayerCard =({ item, onPress}) => (
  <TouchableOpacity>
    <Imge source ={item.image} style
  </TouchableOpacity>
)
const bayernLogo = require("../assets/images/bayern.png");
export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerRow}>
        {/* ITEM 1: LOGO */}
        <View style={globalStyles.profileCircle}>
          <Image source={bayernLogo} style={globalStyles.profileImage} />
        </View>

        {/* ITEM 2: THE TEXT BLOCK */}
        {/* We wrap both lines of text so they stay stacked, but the block stays in the row */}
        <View style={globalStyles.textContainer}>
          <Text style={globalStyles.officialText}>OFFICIAL APP</Text>
          <Text style={globalStyles.mottoText}>Mia San Mia</Text>
        </View>

        {/* ITEM 3: THE ICONS */}
        <View style={globalStyles.iconContainer}>
          <Ionicons name="search" size={24} color="white" />
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>
      </View>
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
            <Text style={globalStyles.manageButton}>Manage Memebership</Text>
            <Ionicons name="arrow-forward" size={10} color="white" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={globalStyles.ViewHeader}>
        <Text style={globalStyles.welcomeText}>Your Squad</Text>
        <TouchableOpacity onPress={() => console.log("View All Pressed")}>
          <Text style={globalStyles.ViewAll}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

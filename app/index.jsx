import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "../components/Banner";
import LiveMatches from "../components/LiveMatches";
import UpcomingMatches from "../components/UpcomingMatches";

export default function App() {
  return (
    <View className="flex-1">
      <View className="pt-8 bg-white">
        <Header />
      </View>
      <ScrollView className="">
        <Banner />
        <View className="mx-4">
          <LiveMatches />
        </View>
        <View className="mx-4">
          <UpcomingMatches />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

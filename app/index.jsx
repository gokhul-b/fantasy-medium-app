import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "../components/Banner";
import LiveMatches from "../components/LiveMatches";
import UpcomingMatches from "../components/UpcomingMatches";
import { useEffect, useState } from "react";
import { getMatches } from "./actions";
import Matches from "../components/Matches";

export default function App() {
  const [matches, setMatches] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMatches();
        setMatches(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const upcoming =
    matches && matches.filter((match) => match.status === "Upcoming");
  const completed =
    matches && matches.filter((match) => match.status === "Completed");

  return (
    <View className="flex-1">
      <View className="pt-8 bg-white">
        <Header />
      </View>

      <ScrollView className="">
        <Banner />
        {isLoading ? (
          <Text className="text-center">Loading matches...</Text>
        ) : (
          <Matches UpMatches={upcoming} CompMatches={completed} />
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

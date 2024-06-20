import { View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import TeamsList from "../../../components/TeamsList";
import GrandLeagueTeams from "../../../components/GrandLeagueTeams";

const GrandLeague = () => {
  const { id } = useGlobalSearchParams();
  return (
    <View className="flex-1 bg-zinc-900">
      <GrandLeagueTeams matchId={id} />
    </View>
  );
};

export default GrandLeague;

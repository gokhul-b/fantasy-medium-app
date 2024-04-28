import { View, Text } from "react-native";
import React from "react";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import TeamsList from "../../../components/TeamsList";

const GrandLeague = () => {
  const { id } = useGlobalSearchParams();
  return (
    <View className="p-4">
      <TeamsList matchId={id} leagueType="Grand" />
    </View>
  );
};

export default GrandLeague;

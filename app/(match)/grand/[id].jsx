import { View, Text } from "react-native";
import React from "react";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import TeamsList from "../../../components/TeamsList";

const GrandLeague = () => {
  const { id } = useGlobalSearchParams();
  let name = "Grand League";
  return (
    <View className="p-4">
      <TeamsList name={name} totalTeams={20} />
    </View>
  );
};

export default GrandLeague;

import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import Prediction from "../../../components/Prediction";
import MatchTips from "../../../components/MatchTips";
import TeamsList from "../../../components/TeamsList";

const SmallLeague = () => {
  const { id } = useGlobalSearchParams();
  let name = "Small League";
  return (
    <ScrollView className="space-y-6">
      <View className="mt-6 mx-4">
        <Prediction />
      </View>
      <View className="mx-4">
        <MatchTips />
      </View>
      <View className="mb-6">
        <TeamsList name={name} totalTeams={4} />
      </View>
    </ScrollView>
  );
};

export default SmallLeague;

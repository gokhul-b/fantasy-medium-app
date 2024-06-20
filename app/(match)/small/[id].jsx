import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useGlobalSearchParams } from "expo-router";
import Prediction from "../../../components/Prediction";
import MatchTips from "../../../components/MatchTips";
import TeamsList from "../../../components/TeamsList";
import { getMatchData } from "../../actions";

const SmallLeague = () => {
  const [matchData, setMatchData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useGlobalSearchParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getMatchData(id);
        setMatchData(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <View className="flex-1 bg-zinc-900">
      {isLoading ? (
        <View className="h-full flex items-center justify-center">
          <Text className="text-center text-white">Loading..</Text>
        </View>
      ) : (
        <ScrollView className="space-y-6">
          <View className="mt-6 mx-4">
            {matchData && <Prediction matchData={matchData} />}
          </View>
          <View className="mx-4">
            {matchData && <MatchTips matchTips={matchData.matchTips} />}
          </View>
          <View className="mb-6">
            {matchData && <TeamsList matchId={id} leagueType="Small" />}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default SmallLeague;

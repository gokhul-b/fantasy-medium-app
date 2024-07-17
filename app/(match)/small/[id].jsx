import { View, ScrollView, Text, RefreshControl } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useGlobalSearchParams } from "expo-router";
import Prediction from "../../../components/Prediction";
import MatchTips from "../../../components/MatchTips";
import TeamsList from "../../../components/TeamsList";
import { getMatchData } from "../../actions";
import Loading from "../../../components/Loading";

const SmallLeague = () => {
  const [matchData, setMatchData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useGlobalSearchParams();
  const [isReload, setIsReload] = useState(false);

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
  }, [isReload]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-zinc-900">
      <ScrollView
        className="space-y-6"
        refreshControl={
          <RefreshControl
            colors={["#eab308"]}
            refreshing={false}
            onRefresh={() => {
              setIsReload((prev) => !prev);
            }}
            progressBackgroundColor="#18181B"
          />
        }
      >
        <View className="mt-6 mx-4">
          {matchData && <Prediction matchData={matchData} />}
        </View>
        <View className="mx-4">
          {matchData && <MatchTips matchTips={matchData.matchTips} />}
        </View>
        <Text className="text-gray-200 text-xs text-center mt-2">
          Swipe down to refresh
        </Text>
        <View className="mb-6">
          {matchData && <TeamsList matchId={id} leagueType="Small" />}
        </View>
      </ScrollView>
    </View>
  );
};

export default SmallLeague;

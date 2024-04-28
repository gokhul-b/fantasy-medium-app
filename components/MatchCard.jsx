import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import CountDown from "./CountDown";

const MatchCard = ({ match }) => {
  const backgroundColor =
    match.investType === "Low Invest." ? "bg-red-600" : "bg-green-600";
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/small/${match.matchId}`);
      }}
      activeOpacity={1}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 2,
      }}
      className=" bg-white rounded-2xl space-y-6 flex-col items-center border border-slate-300 pb-3 mb-5"
    >
      <View className="w-full rounded-t-2xl py-2 pl-2 pr-3 bg-slate-100 flex-row justify-between">
        <Text className="text-sm font-pregular text-gray-700">
          {match.category}
        </Text>
        <Text className="text-sm font-pregular text-gray-700">
          {match.tournament}
        </Text>
      </View>
      <View className="flex-row items-center justify-between w-72">
        <Text className="font-pmedium text-lg">{match.teamA}</Text>

        <View className="items-center rounded-sm px-1">
          {match.status === "Completed" ? (
            <Text className="font-pmedium text-slate-500">Completed</Text>
          ) : (
            <CountDown matchDate={match.matchDate} startsAt={match.matchTime} />
          )}
          <Text className="text-xs text-gray-500 font-pregular">
            {match.matchDay + ", " + match.startsAt}
          </Text>
        </View>

        <Text className="font-pmedium text-lg">{match.teamB}</Text>
      </View>
      <View className="w-full flex items-start">
        <View className={`px-2.5 pt-0.5 rounded-r-md ${backgroundColor}`}>
          <Text className="font-plight text-white">{match.investType}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;

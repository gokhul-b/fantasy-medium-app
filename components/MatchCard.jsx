import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const MatchCard = ({ match }) => {
  const { investmentType, league, startsIn, teamA, teamB, time, id } = match;
  const backgroundColor =
    investmentType === "Low Invest." ? "bg-red-600" : "bg-green-600";
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/small/${id}`);
      }}
      activeOpacity={70}
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
      <View className="w-full rounded-t-2xl py-2 pl-2 bg-slate-200">
        <Text className="text-sm font-pregular text-gray-700">{league}</Text>
      </View>
      <View className="flex-row items-center justify-between w-72">
        <Text className="font-pmedium text-lg">{teamA}</Text>
        {startsIn !== "" ? (
          <View className="justify-center items-center">
            <Text className="text-base">{startsIn}</Text>
            <Text className="text-sm text-gray-400">{time}</Text>
          </View>
        ) : (
          <View className="flex-row">
            <View className="bg-red-500 flex-row items-center rounded-sm px-1">
              <Text className="text-xs text-white">Live</Text>
            </View>
          </View>
        )}
        <Text className="font-pmedium text-lg">{teamB}</Text>
      </View>
      <View className="w-full flex items-start">
        <View className={`px-2.5 pt-0.5 rounded-r-md ${backgroundColor}`}>
          <Text className="font-plight text-white">{investmentType}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;

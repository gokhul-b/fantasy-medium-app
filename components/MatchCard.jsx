import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CountDown from "./CountDown";

const MatchCard = ({ match }) => {
  const textColor =
    match.investType === "Low Invest." ? "text-red-400" : "text-green-400";
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
    >
      <View className="w-full rounded-t-2xl py-2 pl-2 pr-3 bg-yellow-500 border border-zinc-400 flex-row justify-between">
        <Text className="text-sm font-pregular text-zinc-900  ">
          {match.category}
        </Text>
        <Text className="text-sm font-pregular text-zinc-900">
          {match.tournament}
        </Text>
      </View>
      <View className="  rounded-b-2xl space-y-4 flex-col items-center border-x border-b  border-zinc-400 py-3 mb-5">
        <View className="flex-row items-center justify-between w-72  border-white mt-3">
          <Text className="font-pmedium text-lg text-white">{match.teamA}</Text>

          <View className="items-center rounded-sm px-1">
            {match.teamAvailable == true ? (
              <Text className="font-pregular text-zinc-300">Teams Posted</Text>
            ) : (
              <CountDown
                matchDate={match.matchDate}
                startsAt={match.matchTime}
              />
            )}
            <Text className="text-xs text-zinc-400 font-pregular">
              {match.matchDay + ", " + match.startsAt}
            </Text>
          </View>

          <Text className="font-pmedium text-lg text-white">{match.teamB}</Text>
        </View>
        <View className="w-full flex items-start  border-white">
          <View className="px-2.5 pt-0.5">
            <Text className={`font-plight ${textColor}`}>
              {match.investType}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;

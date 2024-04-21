import { View, Text, FlatList } from "react-native";
import React from "react";
import MatchCard from "./MatchCard";

const LiveMatches = () => {
  const LiveMatches = [
    {
      id: 1,
      league: "Indian T20 League",
      startsIn: "",
      time: "10:30 pm",
      investmentType: "High Invest.",
      teamA: "CSK",
      teamB: "MI",
    },
  ];
  return (
    <View className="">
      <Text className="text-lg font-pregular mb-0.5">Live Matches</Text>
      {/* <FlatList
        data={LiveMatches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <MatchCard match={item} />}
      /> */}
      {LiveMatches.map((match, index) => (
        <MatchCard match={match} key={index} />
      ))}
    </View>
  );
};

export default LiveMatches;

import { View, Text, FlatList } from "react-native";
import React from "react";
import MatchCard from "./MatchCard";

const UpcomingMatches = () => {
  const UpcomingMatches = [
    {
      league: "Indian T20 League",
      startsIn: "53m 44s",
      time: "10:30 pm",
      investmentType: "High Invest.",
      teamA: "RCB",
      teamB: "SRH",
    },
    {
      league: "Indian T20 League",
      startsIn: "1day 40m 15s",
      time: "10:30 pm",
      investmentType: "Low Invest.",
      teamA: "MI",
      teamB: "RR",
    },
    {
      league: "Indian T20 League",
      startsIn: "1day 40m 15s",
      time: "10:30 pm",
      investmentType: "Low Invest.",
      teamA: "MI",
      teamB: "RR",
    },
  ];

  return (
    <View className="">
      <Text className="text-lg font-pregular mb-0.5">Upcoming Matches</Text>
      {/* <FlatList
        data={UpcomingMatches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <MatchCard match={item} />}
      /> */}
      {UpcomingMatches.map((match, index) => (
        <MatchCard match={match} key={index} />
      ))}
    </View>
  );
};

export default UpcomingMatches;

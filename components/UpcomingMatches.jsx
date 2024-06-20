import { View, Text } from "react-native";
import React from "react";
import MatchCard from "./MatchCard";
import NoMatches from "./NoMatches";

const UpcomingMatches = ({ UpcomingMatches }) => {
  return (
    <View className="">
      <Text className="text-lg font-pregular mb-2 text-white">
        Upcoming Matches
      </Text>
      {UpcomingMatches.length > 0 ? (
        <View>
          {UpcomingMatches &&
            UpcomingMatches.map((match, index) => (
              <MatchCard match={match} key={index} />
            ))}
        </View>
      ) : (
        <NoMatches />
      )}
    </View>
  );
};

export default UpcomingMatches;

import { View, Text, FlatList } from "react-native";
import React from "react";
import MatchCard from "./MatchCard";
import NoMatches from "./NoMatches";

const UpcomingMatches = ({ UpcomingMatches }) => {
  return (
    <View className="">
      <Text className="text-lg font-pregular mb-0.5 text-slate-800">
        Upcoming Matches
      </Text>
      {/* <FlatList
        data={UpcomingMatches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(match) => <MatchCard match={match.item} />}
      /> */}
      {UpcomingMatches.length > 1 ? (
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

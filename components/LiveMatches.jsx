import { View, Text, FlatList } from "react-native";
import React from "react";
import MatchCard from "./MatchCard";
import NoMatches from "./NoMatches";

const LiveMatches = ({ completedMatches }) => {
  return (
    <View className="w-full">
      <Text className="text-lg font-pregular mb-2 text-white">
        Teams Available
      </Text>
      {/* <FlatList
        data={completedMatches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(match) => <MatchCard match={match.item} />}
      /> */}
      {completedMatches.length > 0 ? (
        <View>
          {completedMatches.map((match, index) => (
            <MatchCard match={match} key={index} />
          ))}
        </View>
      ) : (
        <NoMatches />
      )}
    </View>
  );
};

export default LiveMatches;

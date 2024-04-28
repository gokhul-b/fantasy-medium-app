import { View, Text, FlatList } from "react-native";
import React from "react";
import MatchCard from "./MatchCard";
import NoMatches from "./NoMatches";

const LiveMatches = ({ completedMatches }) => {
  return (
    <View className="w-full">
      <Text className="text-lg font-pregular mb-0.5 text-slate-800">
        Teams Available
      </Text>
      {/* <FlatList
        data={completedMatches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(match) => <MatchCard match={match.item} />}
      /> */}
      {completedMatches.length > 1 ? (
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

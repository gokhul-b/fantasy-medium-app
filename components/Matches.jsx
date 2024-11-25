import { View } from "react-native";
import React from "react";
import UpcomingMatches from "./UpcomingMatches";
import LiveMatches from "./LiveMatches";

const Matches = ({ UpMatches, CompMatches }) => {
  return (
    <View className="px-4">
      <View>
        <LiveMatches completedMatches={CompMatches} />
      </View>
      <View>
        <UpcomingMatches UpcomingMatches={UpMatches} />
      </View>
    </View>
  );
};

export default Matches;

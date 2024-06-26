import { View, Text } from "react-native";
import React, { useState } from "react";
import UpcomingMatches from "./UpcomingMatches";
import LiveMatches from "./LiveMatches";

const Matches = ({ UpMatches, CompMatches }) => {
  const [upcoming, setUpcoming] = useState(UpMatches ?? []);
  const [completed, setCompleted] = useState(CompMatches ?? []);
  return (
    <View className="p-4">
      <View>
        <LiveMatches completedMatches={completed} />
      </View>
      <View>
        <UpcomingMatches UpcomingMatches={upcoming} />
      </View>
    </View>
  );
};

export default Matches;

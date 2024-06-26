import { View, Text } from "react-native";
import React from "react";

const MatchTips = ({ matchTips }) => {
  return (
    <View
      className="rounded-2xl bg-white items-center p-4"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 1,
      }}
    >
      <Text className="text-lg font-pregular">Match Tips</Text>
      <View>
        <Text className="text-sm text-gray-400">#Tip 1</Text>
        <Text className="text-sm font-plight text-justify">{matchTips}</Text>
      </View>
    </View>
  );
};

export default MatchTips;

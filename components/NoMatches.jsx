import { View, Text } from "react-native";
import React from "react";

const NoMatches = () => {
  return (
    <View className="w-full flex-row items-center justify-center pt-4 pb-3 border border-slate-300 rounded-xl bg-white">
      <Text className="font-plight text-slate-600">
        No matches at the moment, sorry!
      </Text>
    </View>
  );
};

export default NoMatches;

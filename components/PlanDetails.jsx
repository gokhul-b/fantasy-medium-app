import { View, Text } from "react-native";
import React from "react";

const PlanDetails = () => {
  return (
    <View className="rounded-t-3xl bg-white px-4 py-6">
      <Text className="text-lg font-pmedium mb-4">Plan</Text>
      <View className="space-y-4">
        <View className="border-b border-gray-300 pb-2">
          <Text className="text-gray-400 text-base">Expires in</Text>
          <Text className="text-base font-pregular">28 days</Text>
        </View>
        <View className="border-b border-gray-300 pb-2">
          <Text className="text-gray-400 text-base">Current Plan</Text>
          <Text className="text-base font-pregular">Monthly Plan</Text>
        </View>
      </View>
    </View>
  );
};

export default PlanDetails;

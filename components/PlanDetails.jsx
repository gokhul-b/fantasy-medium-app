import { View, Text } from "react-native";
import React from "react";

const PlanDetails = ({ userData }) => {
  const planEndsDate = new Date(userData.planEnds);
  const currentDate = new Date();
  const daysLeft = Math.ceil(
    (planEndsDate - currentDate) / (1000 * 60 * 60 * 24)
  );
  return (
    <View className="rounded-t-3xl bg-white px-4 py-6">
      <Text className="text-lg font-pmedium mb-4">Plan</Text>
      <View className="space-y-4">
        <View className="border-b border-gray-300 pb-2">
          <Text className="text-gray-400 text-base">Expires on</Text>
          <Text className="text-base font-pregular">{userData.planEnds}</Text>
        </View>
        <View className="border-b border-gray-300 pb-2">
          <Text className="text-gray-400 text-base">Days left</Text>
          <Text className="text-base font-pregular">{daysLeft}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlanDetails;

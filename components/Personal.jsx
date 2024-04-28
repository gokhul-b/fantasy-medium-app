import { View, Text } from "react-native";
import React from "react";

const Personal = ({ userData }) => {
  return (
    <View className="rounded-t-3xl bg-white px-4 py-6">
      <Text className="text-lg font-pmedium mb-4">Personal</Text>

      <View className="space-y-4">
        <View className="border-b border-gray-300 pb-2">
          <Text className="text-gray-400 text-base">Username</Text>
          <Text className="text-base font-pregular">{userData.userName}</Text>
        </View>
        <View className="border-b border-gray-300 pb-2">
          <Text className="text-gray-400 text-base">Email</Text>
          <Text className="text-base font-pregular">{userData.emailId}</Text>
        </View>
      </View>
    </View>
  );
};

export default Personal;

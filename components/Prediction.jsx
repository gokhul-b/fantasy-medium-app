import { View, Text } from "react-native";
import React from "react";

const Prediction = () => {
  return (
    <View>
      <View
        className="rounded-2xl bg-white p-4 justify-center items-center space-y-2"
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
        <Text className="text-sm font-pregular mb-0.5 text-center">
          Winner Prediction
        </Text>
        <View className="w-72 flex-row justify-between items-center">
          <Text className="text-2xl font-pmedium">CSK</Text>
          <Text className="text-xl text-gray-400 font-pregular">vs</Text>
          <Text className="text-2xl font-pmedium">MI</Text>
        </View>
        <View className="w-48 flex-row justify-between items-center">
          <Text className="text-base font-pregular">80%</Text>
          <Text className="text-sm text-gray-400">-</Text>
          <Text className="text-base font-pregular">20%</Text>
        </View>
      </View>
    </View>
  );
};

export default Prediction;

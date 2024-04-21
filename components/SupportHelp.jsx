import { View, Text } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleQuestion,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";

const SupportHelp = () => {
  return (
    <View className="rounded-t-3xl bg-white px-4 py-6">
      <Text className="text-lg font-pmedium mb-4">Support and Help</Text>
      <View className="space-y-4">
        <View className="border-b border-gray-300 py-2 flex-row items-center space-x-2">
          <FontAwesomeIcon icon={faMessage} style={{ color: "#2d2d2d" }} />
          <Text className="text-base font-pregular">Contact Support</Text>
        </View>
        <View className="border-b border-gray-300 py-2 flex-row items-center space-x-2">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            style={{ color: "#2d2d2d" }}
          />
          <Text className="text-base font-pregular">Help</Text>
        </View>
      </View>
    </View>
  );
};

export default SupportHelp;

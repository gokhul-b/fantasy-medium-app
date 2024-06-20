import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleQuestion,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";

const SupportHelp = () => {
  return (
    <View>
      <Text className="text-lg font-pmedium mb-4 text-yellow-500">
        Support and Help
      </Text>
      <View className="space-y-4">
        <View className="border-b border-gray-300 py-2 flex-row items-center space-x-2">
          <FontAwesomeIcon icon={faMessage} style={{ color: "#EEEEEE" }} />
          <Text className="text-base font-pregular text-zinc-100">
            Contact Support
          </Text>
        </View>
        <View className="border-b border-gray-300 py-2 flex-row items-center space-x-2">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            style={{ color: "#EEEEEE" }}
          />
          <Text className="text-base font-pregular text-zinc-100">Help</Text>
        </View>
      </View>
    </View>
  );
};

export default SupportHelp;

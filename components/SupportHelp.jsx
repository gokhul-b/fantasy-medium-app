import { View, Text, TouchableOpacity, Share, Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleQuestion,
  faMessage,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { router } from "expo-router";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { handleWhatsAppUs } from "./GetPlan";

const SupportHelp = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Fantasy Medium | Install our app now and stand a chance to win 1 Crore! Download it here: https://fantasymedium.com/",
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View>
      <Text className="text-lg font-pmedium mb-4 text-yellow-500">
        Engage and Connect
      </Text>
      <View className="space-y-4">
        <TouchableOpacity
          className="border rounded-md pl-3 border-slate-300 py-3 flex-row items-center space-x-2 "
          onPress={handleWhatsAppUs}
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ color: "#EEEEEE" }}
            size={24}
          />
          <Text className="text-base font-psemibold text-zinc-100">
            Chat with Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="border rounded-md pl-3 border-slate-300 py-3 flex-row items-center space-x-2"
          onPress={onShare}
        >
          <FontAwesomeIcon
            icon={faShareFromSquare}
            style={{ color: "#EEEEEE" }}
            size={24}
          />
          <Text className="text-base font-psemibold text-zinc-100">
            Share with Friends
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SupportHelp;

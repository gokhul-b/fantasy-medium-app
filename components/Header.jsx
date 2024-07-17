import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { router } from "expo-router";

const Header = () => {
  return (
    <View className="py-3 justify-between flex-row items-center px-3">
      <TouchableOpacity
        activeOpacity={1}
        className="p-2 rounded-full"
        onPress={() => {
          router.push("/profile");
        }}
      >
        <FontAwesomeIcon icon={faUser} size={22} style={{ color: "#EEEEEE" }} />
      </TouchableOpacity>
      <Text className="text-2xl font-psemibold text-center text-white">
        Fantasy Medium
      </Text>
      <View>
        <TouchableOpacity
          activeOpacity={1}
          className="p-2 rounded-full"
          onPress={() => {
            router.push("/notices");
          }}
        >
          <FontAwesomeIcon
            icon={faBell}
            size={22}
            style={{ color: "#EEEEEE" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

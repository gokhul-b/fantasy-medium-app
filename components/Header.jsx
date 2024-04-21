import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, router } from "expo-router";

const Header = () => {
  return (
    <View className="h-14 justify-between flex-row items-center px-3">
      <TouchableOpacity
        onPress={() => {
          router.push("/profile");
        }}
      >
        <FontAwesomeIcon icon={faUser} size={22} />
      </TouchableOpacity>
      <Text className="text-2xl font-psemibold text-center">
        Fantasy Medium
      </Text>
      <View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faBell} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

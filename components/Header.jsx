import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, router } from "expo-router";

const Header = () => {
  return (
    <View className="py-3 border-slate-100 justify-between flex-row items-center px-3">
      <TouchableOpacity
        activeOpacity={1}
        className="p-2 bg-slate-100 border border-slate-200 rounded-full"
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
        <TouchableOpacity
          activeOpacity={1}
          className="p-2 bg-slate-100 border border-slate-200 rounded-full"
        >
          <FontAwesomeIcon icon={faBell} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

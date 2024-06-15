import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, router } from "expo-router";

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
      {/* <View className="h-12 w-12 border border-black">
        <Image
          source={require("../assets/icon.png")}
          // resizeMode="contain"
          style={{ width: 56, height: 56, objectFit: "contain" }}
        />
      </View> */}
      <View>
        <TouchableOpacity activeOpacity={1} className="p-2 rounded-full">
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

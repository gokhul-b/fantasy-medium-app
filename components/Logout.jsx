import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "expo-router";

const Logout = () => {
  return (
    <TouchableOpacity className="rounded-t-3xl bg-white px-4 py-6">
      <Text className="text-lg font-pmedium mb-4">User Actions</Text>
      <Link replace href="/sign-in">
        <View className="py-2 flex-row items-center space-x-2">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            style={{ color: "#2d2d2d" }}
          />
          <Text className="text-base font-pregular">Logout</Text>
        </View>
      </Link>
    </TouchableOpacity>
  );
};

export default Logout;

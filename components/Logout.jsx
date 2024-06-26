import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "expo-router";
import { FIREBASE_AUTH } from "../lib/firebase";

const Logout = () => {
  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      console.log("User signed out successfully!");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };
  return (
    <View className="rounded-t-3xl bg-white px-4 py-6">
      <Text className="text-lg font-pmedium mb-4">User Actions</Text>
      <TouchableOpacity
        className="py-2 flex-row items-center space-x-2 "
        onPress={handleSignOut}
      >
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          style={{ color: "#2d2d2d" }}
        />
        <Text className="text-base font-pregular">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

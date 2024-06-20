import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FIREBASE_AUTH } from "../lib/firebase";

const Logout = () => {
  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      console.log("User signed out successfully!");
    } catch (error) {
      console.error("Sign out failed:", error);
      ToastAndroid.show(error.code, ToastAndroid.SHORT);
    }
  };
  return (
    <View>
      <Text className="text-lg font-pmedium mb-4 text-yellow-500">
        User Actions
      </Text>
      <TouchableOpacity
        className="py-2 flex-row items-center space-x-2 "
        onPress={handleSignOut}
      >
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          style={{ color: "#EEEEEE" }}
        />
        <Text className="text-base font-pregular text-zinc-100">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

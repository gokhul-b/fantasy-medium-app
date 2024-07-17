import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FIREBASE_AUTH } from "../lib/firebase";

const Logout = () => {
  const showAlert = () =>
    Alert.alert(
      "Oh no! You're leaving...",
      "Are you sure?",
      [
        {
          text: "Yes",
          onPress: () => {
            handleSignOut();
          },
          style: "cancel",
        },
        {
          text: "No",
          onPress: () => Alert.alert("Good decision!"),
          style: "cancel",
        },
      ]
      // {
      //   cancelable: true,
      //   onDismiss: () =>
      //     Alert.alert(
      //       "This alert was dismissed by tapping outside of the alert dialog."
      //     ),
      // }
    );
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
        className="border rounded-md pl-3 border-slate-300 py-3 flex-row items-center space-x-2"
        onPress={showAlert}
      >
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          style={{ color: "#EEEEEE" }}
          size={24}
        />
        <Text className="text-base font-psemibold text-zinc-100">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

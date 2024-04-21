import {
  View,
  Text,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
const { width } = Dimensions.get("window");

const TeamCard = ({ data }) => {
  const { id, imgUri, joinLink } = data;
  console.log(data);
  const handleJoinTeam = async () => {
    const teamUrl =
      "https://www.dream11.com/team/cricket/84031/4094/f3534ec8878578752cafdea02725340b533715fa/MTgwNDEyNDU=";

    // Extract necessary parameters from the URL
    // For example, you can use regex or URLSearchParams API

    // Here, we'll open the team URL in a browser for demonstration purposes
    try {
      const supported = await Linking.canOpenURL(teamUrl);
      if (supported) {
        await Linking.openURL(teamUrl);
      } else {
        throw new Error("Failed to open the URL");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to open the URL");
    }
  };
  return (
    <View
      className="bg-white h-[596px] items-center w-80 px-6 rounded-2xl ml-4 py-6 mb-4"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 1,
      }}
    >
      <Text className="text-base text-gray-400 font-pregular">#Team{id}</Text>
      <Image
        source={require("../assets/images/team2.jpg")}
        resizeMode="contain"
        className="flex-auto w-full"
      />
      <View className="">
        <TouchableOpacity
          className="px-2.5 py-3 bg-black rounded-lg w-48"
          onPress={handleJoinTeam}
        >
          <Text className="text-white text-xs font-pmedium text-center">
            JOIN TEAM
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamCard;

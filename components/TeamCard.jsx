import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import React, { useState } from "react";

const TeamCard = ({ data, idx }) => {
  const { imgUrl, joinLink } = data;
  const [imagegUrl, setImageUrl] = useState(imgUrl ?? "");
  const [teamLink, setTeamLink] = useState(joinLink ?? "");

  const handleJoinTeam = async () => {
    try {
      const supported = await Linking.canOpenURL(teamLink);
      if (supported) {
        await Linking.openURL(teamLink);
      } else {
        throw new Error("Link Expired");
      }
    } catch (error) {
      Alert.alert("Link Expired", "Failed to open the URL");
    }
  };

  return (
    <View
      className="bg-zinc-50 h-[596px] items-center w-80 px-6 rounded-2xl ml-4 py-6 mb-4 space-y-6"
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
      <Text className="text-base text-gray-400 font-pregular">
        #Team{idx + 1}
      </Text>
      <Image
        source={{ uri: imagegUrl }}
        resizeMode="contain"
        className="flex-1 w-full"
      />
      <View className="">
        <TouchableOpacity
          className="px-2.5 py-3 bg-zinc-900 rounded-lg w-48"
          onPress={handleJoinTeam}
          activeOpacity={0.7}
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

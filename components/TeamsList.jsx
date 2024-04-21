import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import TeamCard from "./TeamCard";
const teams = [
  {
    id: 1,
    imgUri: require("../assets/images/team2.jpg"),
    joinLink: "",
  },
  {
    id: 2,
    imgUri: require("../assets/images/team2.jpg"),
    joinLink: "",
  },
  {
    id: 3,
    imgUri: require("../assets/images/team2.jpg"),
    joinLink: "",
  },
  {
    id: 4,
    imgUri: require("../assets/images/team2.jpg"),
    joinLink: "",
  },
];

const TeamsList = ({ name, totalTeams }) => {
  return (
    <View className="">
      <Text className="text-lg font-pmedium text-center">{name} Teams</Text>
      <Text className="text-xs text-center text-gray-500 font-pmedium mb-4">
        Note: {totalTeams} {name} teams available
      </Text>
      <FlatList
        data={teams}
        renderItem={({ item }) => <TeamCard data={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
};

export default TeamsList;

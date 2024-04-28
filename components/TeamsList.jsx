import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import TeamCard from "./TeamCard";
import { getTeamsData } from "../app/actions";

const TeamsList = ({ matchId, leagueType }) => {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTeamsData(matchId, leagueType);
        setTeams(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);
  return (
    <View className="">
      <Text className="text-lg font-pmedium text-center">
        {leagueType} Teams
      </Text>
      {teams && (
        <Text className="text-xs text-center text-gray-500 font-pmedium mb-4">
          Note: {teams.length} {leagueType} teams available
        </Text>
      )}
      <FlatList
        data={teams}
        renderItem={(item) => (
          <TeamCard key={item.index} data={item.item} idx={item.index} />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
};

export default TeamsList;

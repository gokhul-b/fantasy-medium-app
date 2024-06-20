import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
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
      <Text className="text-lg font-pmedium text-center text-zinc-50">
        {leagueType} League Teams
      </Text>
      {teams && (
        <Text className="text-xs text-center text-zinc-200 font-pmedium mb-4">
          Note: {teams.length} teams available
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

import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getGlTeams } from "../app/actions";
import { Picker } from "@react-native-picker/picker";
import GrandTeamList from "./GrandTeamList";
import SelectVC from "./SelectVC";

const GrandLeagueTeams = ({ matchId }) => {
  const [team, setTeam] = useState("");
  const [choices, setChoices] = useState([]);
  const [glTeams, setGlTeams] = useState({});
  const [genTeams, setGenTeams] = useState([]);
  const [mainTeam, setMainTeam] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGlTeams(matchId);
        setGlTeams(data);
        setChoices(Object.keys(data));
        setGenTeams(data[choices[0]].genTeams);
        setMainTeam(glTeams[choices[0]].mainTeam);
        console.log("genTeams", genTeams);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  const handleTeamChange = (val) => {
    setTeam(val);
    setGenTeams(glTeams[val].genTeams);
    setMainTeam(glTeams[val].mainTeam);
    console.log("genTeams", glTeams[val].genTeams);
  };

  return (
    <View className="h-full space-y-6 mx-3">
      <View className="items-center mt-6">
        <View className="border border-zinc-300 rounded-md focus:border-2 focus:border-zinc-100 w-3/4 bg-white">
          <Picker
            selectedValue={team}
            onValueChange={(itemValue, itemIndex) =>
              handleTeamChange(itemValue)
            }
            className="border border-white text-white"
          >
            {choices.map((teamName, index) => (
              <Picker.Item label={teamName} value={teamName} key={index} />
            ))}
          </Picker>
        </View>
        <Text className="text-xs text-center text-zinc-200 font-pmedium mt-2">
          *Note: Choose the team with the highest chance of winning.
        </Text>
      </View>
      <View>{genTeams.length > 0 && <SelectVC genTeams={genTeams} />}</View>
      <Text className="text-zinc-200 text-center font-pmedium mb-2">
        Total teams: {genTeams.length}
      </Text>
      {genTeams.length > 0 && (
        <GrandTeamList genTeams={genTeams} mainTeam={mainTeam} />
      )}
    </View>
  );
};

export default GrandLeagueTeams;

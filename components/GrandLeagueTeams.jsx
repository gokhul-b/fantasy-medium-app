import { View, Text, ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { getGlTeams } from "../app/actions";
import { Picker } from "@react-native-picker/picker";
import GrandTeamList from "./GrandTeamList";
import SelectVC from "./SelectVC";
import Loading from "./Loading";

const GrandLeagueTeams = ({ matchId }) => {
  const [team, setTeam] = useState("");
  const [choices, setChoices] = useState([]);
  const [glTeams, setGlTeams] = useState({});
  const [genTeams, setGenTeams] = useState([]);
  const [mainTeam, setMainTeam] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getGlTeams(matchId);
        setGlTeams(data);
        setChoices(Object.keys(data));
        setGenTeams(data[choices[0]].genTeams);
        setMainTeam(glTeams[choices[0]].mainTeam);
        // console.log("genTeams", genTeams);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isReload]);

  const handleTeamChange = (val) => {
    if (val !== "") {
      setTeam(val);
      setGenTeams(glTeams[val].genTeams);
      setMainTeam(glTeams[val].mainTeam);
      console.log("genTeams", glTeams[val].genTeams);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView
      className="h-full space-y-6 mx-3"
      refreshControl={
        <RefreshControl
          colors={["#eab308"]}
          refreshing={false}
          onRefresh={() => {
            setIsReload((prev) => !prev);
          }}
          progressBackgroundColor="#18181B"
        />
      }
    >
      <View className="space-y-4 border border-slate-300 rounded-lg mt-6 py-4">
        <Text className="text-slate-100 text-base font-pmedium text-center mx-4">
          Choose Captain & Generate Perfect Vice-Captain Choice
        </Text>
        <View className="items-center mt-6">
          {team.length == "" && (
            <Text className="text-slate-300 text-xs mb-2">
              Please select the team
            </Text>
          )}
          <View className="border border-zinc-300 rounded-md focus:border-2 focus:border-zinc-100 w-3/4 bg-white">
            <Picker
              selectedValue={team}
              onValueChange={(itemValue, itemIndex) =>
                handleTeamChange(itemValue)
              }
              className="border border-white text-white"
            >
              <Picker.Item label="Select Team" value="" />
              {choices.map((teamName, index) => (
                <Picker.Item label={teamName} value={teamName} key={index} />
              ))}
            </Picker>
          </View>
        </View>
        <View>{genTeams !== null && <SelectVC genTeams={genTeams} />}</View>
      </View>
      {team.length > 0 && (
        <Text className="text-zinc-200 text-center font-pmedium mb-3">
          Assuming {team} as winning team, we have {genTeams.length} teams
        </Text>
      )}
      {genTeams.length > 0 && (
        <GrandTeamList genTeams={genTeams} mainTeam={mainTeam} />
      )}
    </ScrollView>
  );
};

export default GrandLeagueTeams;

import { View, Text } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const SelectVC = ({ genTeams }) => {
  const captains = [...new Set(genTeams.map((team) => team.captain))];
  const [selectedCaptain, setSelectedCaptain] = useState("");
  const [viceCaptains, setViceCaptains] = useState([]);
  const getViceCaptains = (selectedCaptain) => {
    const viceCaptains = genTeams
      .filter((team) => team.captain === selectedCaptain)
      .map((team) => team.viceCaptain);
    return [...new Set(viceCaptains)];
  };

  const onCaptainChange = (captain) => {
    setSelectedCaptain(captain);
    setViceCaptains(getViceCaptains(captain));
    console.log("viceCaptains =>", viceCaptains);
  };

  return (
    <View className="border border-slate-200 space-y-2.5 rounded-lg items-center px-2 py-2.5 justify-between">
      <View className="border border-zinc-300 rounded-md focus:border-2 focus:border-zinc-100 w-3/4 bg-white">
        <Picker
          selectedValue={selectedCaptain}
          onValueChange={(itemValue) => onCaptainChange(itemValue)}
        >
          <Picker.Item label="Select Captain" value="" />
          {captains.map((captain) => (
            <Picker.Item key={captain} label={captain} value={captain} />
          ))}
        </Picker>
      </View>
      <View>
        <Text className="text-slate-200 text-center font-psemibold">
          Best vicecaptain choices
        </Text>
        <Text className="text-slate-200 text-center">
          {viceCaptains.join(", ")}
        </Text>
      </View>
    </View>
  );
};

export default SelectVC;

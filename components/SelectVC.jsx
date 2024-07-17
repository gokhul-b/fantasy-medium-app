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
    <View className="space-y-3 items-center justify-between">
      <View className="rounded-md focus:border-2 focus:border-zinc-100 w-3/4 bg-white">
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
        <Text className="text-slate-300 text-xs mb-1 text-center font-psemibold">
          99% Accurate Vice-Captain Choices
        </Text>
        <Text className="text-center text-yellow-400">
          {viceCaptains.join(", ")}
        </Text>
      </View>
    </View>
  );
};

export default SelectVC;

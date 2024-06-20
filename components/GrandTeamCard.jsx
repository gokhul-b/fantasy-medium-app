import { View, Text } from "react-native";

const GrandTeamCard = ({ groupedPlayers, teamPair, index }) => {
  console.log(teamPair);
  const formatPlayerName = (name, teamPair) => {
    if (name === teamPair.captain) {
      return `${name}(c)`;
    } else if (name === teamPair.viceCaptain) {
      return `${name}(vc)`;
    } else {
      return name;
    }
  };
  return (
    <View key={index} className="rounded-lg bg-white ml-2">
      <Text className="text-xs text-slate-300 text-center py-1">
        #Team{index + 1}
      </Text>
      <View className="p-2">
        {Object.entries(groupedPlayers).map(([group, players]) => (
          <View key={group} className="mb-2">
            <Text className="text-xs font-semibold ">{group}</Text>
            <Text className="font-medium text-xs">
              {players
                .map(({ name }) => formatPlayerName(name, teamPair))
                .join(", ")}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default GrandTeamCard;

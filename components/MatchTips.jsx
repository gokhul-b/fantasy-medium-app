import { View, Text } from "react-native";

const MatchTips = ({ matchTips }) => {
  return (
    <View
      className="rounded-2xl bg-zinc-50 items-center p-4"
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
      <Text className="text-lg font-pregular">Match Tips</Text>
      <View className="space-y-2">
        <View>
          <Text className="text-sm text-zinc-400">#Tip 1</Text>
          <Text className="text-sm font-pregular text-justify">
            Visit the Grand League section for automatically generated GL teams
            and captain and vice-captain selections.
          </Text>
        </View>
        <View>
          <Text className="text-sm text-zinc-400">#Tip 2</Text>
          <Text className="text-sm font-pregular  text-justify">
            {matchTips}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MatchTips;

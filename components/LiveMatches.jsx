import { View, Text } from "react-native";
import MatchCard from "./MatchCard";
import NoMatches from "./NoMatches";

const LiveMatches = ({ completedMatches }) => {
  return (
    <View className="w-full">
      <Text className="text-lg font-pregular mb-2 text-white">
        Teams Available
      </Text>
      {completedMatches?.length > 0 ? (
        <View>
          {completedMatches.map((match, index) => (
            <MatchCard match={match} key={index} />
          ))}
        </View>
      ) : (
        <NoMatches />
      )}
    </View>
  );
};

export default LiveMatches;

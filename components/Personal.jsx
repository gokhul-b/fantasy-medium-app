import { View, Text } from "react-native";

const Personal = ({ userData }) => {
  return (
    <View>
      <Text className="text-lg font-pmedium mb-4 text-yellow-500 ">
        Personal
      </Text>

      <View className="space-y-4">
        <View className="border-b border-gray-300 pb-2">
          <Text className="text-zinc-400 text-base">Username</Text>
          <Text className="text-base text-zinc-100 font-pregular">
            {userData.userName}
          </Text>
        </View>
        <View className="border-b border-gray-300 pb-2">
          <Text className="text-zinc-400 text-base">Email</Text>
          <Text className="text-base font-pregular text-zinc-100">
            {userData.emailId}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Personal;

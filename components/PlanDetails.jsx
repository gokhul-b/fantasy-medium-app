import { View, Text } from "react-native";

const PlanDetails = ({ userData }) => {
  const planEndsDate = new Date(userData.planEnds);
  const currentDate = new Date();
  let daysLeft = Math.ceil(
    (planEndsDate - currentDate) / (1000 * 60 * 60 * 24)
  );
  if (daysLeft < 1) {
    daysLeft = 0;
  }
  return (
    <View>
      <Text className="text-lg font-pmedium mb-4 text-yellow-500">Plan</Text>
      <View className="space-y-4">
        <View className="border-b border-gray-300 pb-2">
          <Text className="text-zinc-400 text-base">Expires on</Text>
          <Text className="text-base font-pregular text-zinc-100">
            {userData.planEnds}
          </Text>
        </View>
        <View className="border-b border-gray-300 pb-2">
          <Text className="text-zinc-400 text-base">Days left</Text>
          <Text className="text-base font-pregular text-zinc-100">
            {daysLeft}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PlanDetails;

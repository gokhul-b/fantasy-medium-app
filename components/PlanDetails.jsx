import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const PlanDetails = ({ userData }) => {
  const planEndsDate = new Date(userData.planEnds);
  const currentDate = new Date();
  let daysLeft = 0;
  if (userData.planEnds) {
    daysLeft = Math.ceil((planEndsDate - currentDate) / (1000 * 60 * 60 * 24));
  }
  if (daysLeft < 1) {
    daysLeft = 0;
  }
  return (
    <View>
      <Text className="text-lg font-pmedium mb-4 text-yellow-500">Plan</Text>
      <View className="space-y-4">
        <View className="border-b border-gray-300 pb-2">
          <Text className="text-zinc-400 text-base">Expires on</Text>

          {userData.planEnds ? (
            <Text className="text-base font-pregular text-zinc-100">
              {userData.planEnds}
            </Text>
          ) : (
            <Text className="text-base font-pregular text-zinc-100">
              No Active plan
            </Text>
          )}
        </View>
        <View className="border-b border-gray-300 pb-2">
          <View className="flex-row justify-between items-end">
            <View>
              <Text className="text-zinc-400 text-base">Days left</Text>
              <Text className="text-base font-pregular text-zinc-100">
                {daysLeft}
              </Text>
            </View>
            {daysLeft <= 0 && (
              <TouchableOpacity
                className="border border-slate-300 px-6 py-1.5 rounded-md mr-1"
                onPress={() => router.push("/plans")}
              >
                <Text className="text-zinc-100 font-semibold">Renew</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlanDetails;

import { View, Text, ScrollView } from "react-native";
import React from "react";
import Personal from "../../components/Personal";
import PlanDetails from "../../components/PlanDetails";
import SupportHelp from "../../components/SupportHelp";
import Logout from "../../components/Logout";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="">
          <Text className="text-2xl my-6 ml-4 font-pregular">Profile</Text>
          <View>
            <Personal />
          </View>
          <View className="mt-4">
            <PlanDetails />
          </View>
          <View className="mt-4">
            <SupportHelp />
          </View>
          <View className="mt-4">
            <Logout />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

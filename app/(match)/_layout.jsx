import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GrandLeague from "./grand/[id]";
import SmallLeague from "./small/[id]";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();
const MatchLayout = () => {
  return (
    <SafeAreaView className="flex-1">
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarIndicatorStyle: {
            backgroundColor: "black",
            height: "100%",
          },
          tabBarLabelStyle: { fontWeight: "500" },
          tabBarStyle: { backgroundColor: "white" },
        }}
      >
        <Tab.Screen name="Small" component={SmallLeague} />
        <Tab.Screen name="Grand" component={GrandLeague} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MatchLayout;

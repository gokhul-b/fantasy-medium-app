import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GrandLeague from "./grand/[id]";
import SmallLeague from "./small/[id]";
import { SafeAreaView } from "react-native-safe-area-context";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../../lib/firebase";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import GetStarted from "../../components/GetStarted";
import { getUserData } from "../actions";
import GetPlan from "../../components/GetPlan";
import { useAuth } from "../../context/AuthProvider";
const Tab = createMaterialTopTabNavigator();
const MatchLayout = () => {
  const { user } = useAuth();
  const [isActiveUser, setIsActiveUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const data = await getUserData(user.uid);
        const today = new Date().toISOString().split("T")[0];
        setIsActiveUser(data.planEnds >= today);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    if (user) {
      fetchUser();
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      {isLoading ? (
        <View className="flex items-center justify-center h-full">
          <Text className="text-white">Loading...</Text>
        </View>
      ) : !user ? (
        <GetStarted />
      ) : isActiveUser ? (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "white",
            tabBarIndicatorStyle: {
              backgroundColor: "rgb(234, 179, 8)",
              height: "100%",
            },
            tabBarLabelStyle: { fontWeight: "500" },
            tabBarStyle: { backgroundColor: "#18181B" },
          }}
        >
          <Tab.Screen name="Small" component={SmallLeague} />
          <Tab.Screen name="Grand" component={GrandLeague} />
        </Tab.Navigator>
      ) : (
        <GetPlan />
      )}
    </SafeAreaView>
  );
};

export default MatchLayout;

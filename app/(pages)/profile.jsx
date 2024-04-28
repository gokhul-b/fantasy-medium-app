import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Personal from "../../components/Personal";
import PlanDetails from "../../components/PlanDetails";
import SupportHelp from "../../components/SupportHelp";
import Logout from "../../components/Logout";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInButton from "../../components/SignInButton";
import { getUserData } from "../actions";
import { useAuth } from "../../context/AuthProvider";

const Profile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(user);
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const data = await getUserData(user.uid);
        setUserData(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    if (user) {
      fetchUserData();
    }
  }, [user]);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="">
          <Text className="text-2xl my-6 ml-4 font-pregular">Profile</Text>
          {user && (
            <View>
              {isLoading ? (
                <View>
                  <Text className="text-center">Loading...</Text>
                </View>
              ) : (
                <View classNamre="space-y-4">
                  <View>{userData && <Personal userData={userData} />}</View>
                  <View>{userData && <PlanDetails userData={userData} />}</View>
                </View>
              )}
            </View>
          )}
          <View className="mt-4">
            <SupportHelp />
          </View>
          <View className="my-4">{user ? <Logout /> : <SignInButton />}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

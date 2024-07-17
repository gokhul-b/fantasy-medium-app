import { View, ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import Personal from "../../components/Personal";
import PlanDetails from "../../components/PlanDetails";
import SupportHelp from "../../components/SupportHelp";
import Logout from "../../components/Logout";
import SignInButton from "../../components/SignInButton";
import { getUserData } from "../actions";
import { useAuth } from "../../context/AuthProvider";
import Loading from "../../components/Loading";

const Profile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isReload, setIsReload] = useState(false);

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
  }, [user, isReload]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ScrollView
      className="px-4 bg-zinc-900 flex-1"
      refreshControl={
        <RefreshControl
          colors={["#eab308"]}
          refreshing={false}
          onRefresh={() => {
            setIsReload((prev) => !prev);
          }}
          progressBackgroundColor="#18181B"
        />
      }
    >
      {user && (
        <View>
          <View className="space-y-8">
            <View className="mt-4">
              {userData && <Personal userData={userData} />}
            </View>
            <View className="mt-4">
              {userData && <PlanDetails userData={userData} />}
            </View>
          </View>
        </View>
      )}
      <View className="mt-8">
        <SupportHelp />
      </View>
      <View className="mt-8 mb-4">{user ? <Logout /> : <SignInButton />}</View>
    </ScrollView>
  );
};

export default Profile;

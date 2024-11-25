import { RefreshControl, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { useEffect, useRef, useState, useCallback } from "react";
import { getMatches, registerForPushNotificationsAsync } from "./actions";
import Matches from "../components/Matches";
import * as Notifications from "expo-notifications";
import { useAuth } from "../context/AuthProvider";
import Loading from "../components/Loading";
import Categories from "../components/Categories";
import Announcement from "../components/Announcement";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [matches, setMatches] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(undefined);
  const notificationListener = useRef();
  const [isReload, setIsReload] = useState(false);
  const responseListener = useRef();
  const { user } = useAuth();
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (user) {
      registerForPushNotificationsAsync(user.uid)
        .then((token) => setExpoPushToken(token ?? ""))
        .catch((error) => setExpoPushToken(`${error}`));
    }
    console.log("expoPushToken =>", expoPushToken);

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        getMatches(setMatches);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isReload]);

  const onRefresh = useCallback(() => {
    setIsReload((prev) => !prev);
  }, []);
  console.log(category);
  return (
    <View className="flex-1 bg-zinc-900">
      <View className="">
        <Header />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={["#eab308"]}
            refreshing={false}
            onRefresh={onRefresh}
            progressBackgroundColor="#18181B"
          />
        }
      >
        <Banner />
        {/* <Text className="text-gray-200 text-xs text-center my-2">
          Swipe down to refresh
        </Text> */}
        <View className="">
          <Announcement />
        </View>
        <View className="mt-4 mb-6">
          <Categories category={category} setCategory={setCategory} />
        </View>
        {isLoading ? (
          <Loading />
        ) : (
          <Matches
            UpMatches={matches?.filter(
              (match) =>
                match.teamAvailable == false && match.category == category
            )}
            CompMatches={matches?.filter(
              (match) =>
                match.teamAvailable == true && match.category == category
            )}
          />
        )}
      </ScrollView>
    </View>
  );
}

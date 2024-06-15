import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { useEffect, useRef, useState } from "react";
import { getMatches, registerForPushNotificationsAsync } from "./actions";
import Matches from "../components/Matches";
import * as Notifications from "expo-notifications";
import { useAuth } from "../context/AuthProvider";

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
  const responseListener = useRef();
  const { user } = useAuth();

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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMatches();
        setMatches(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const upcoming =
    matches && matches.filter((match) => match.teamAvailable == false);
  const completed =
    matches && matches.filter((match) => match.teamAvailable == true);

  return (
    <View className="flex-1 bg-zinc-900">
      <View className="">
        <Header />
      </View>
      <ScrollView className="">
        <Banner />
        {isLoading ? (
          <Text className="text-center text-white">Loading matches...</Text>
        ) : (
          <Matches UpMatches={upcoming} CompMatches={completed} />
        )}
      </ScrollView>
    </View>
  );
}

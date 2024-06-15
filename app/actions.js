import { db } from "../lib/firebase";

import { format } from "date-fns";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import * as Device from "expo-device";
import { Platform } from "react-native";

export const getMatches = async () => {
  const matches = [];
  try {
    const querySnapshot = await getDocs(collection(db, "matches"));
    querySnapshot.forEach((doc) => {
      const [hours, minutes] = doc.data().matchTime.split(":");
      const date = new Date();
      date.setHours(parseInt(hours, 10));
      date.setMinutes(parseInt(minutes, 10));
      let match = {
        matchId: doc.id,
        category: doc.data().category,
        teamAvailable: doc.data().teamsAvailable,
        matchDay: format(
          new Date(doc.data().matchDate.seconds * 1000),
          "dd MMMM"
        ),
        date: format(
          new Date(doc.data().matchDate.seconds * 1000),
          "dd MMMM yyyy"
        ),
        matchDate: format(
          new Date(doc.data().matchDate.seconds * 1000),
          "yyyy-MM-dd"
        ),
        startsAt: date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        matchTime: doc.data().matchTime,
        teamA: doc.data().teamA,
        teamB: doc.data().teamB,
        tournament: doc.data().tournament,
        prediction: `${doc.data().teamApercentage}% - ${
          doc.data().teamBpercentage
        }%`,
        investType: doc.data().investType,
        status: "",
      };
      matches.push(match);
    });

    // const currentDateTime = new Date(); // Get current date and time
    matches.forEach((match) => {
      // Convert match start time to Date object
      const matchDateTimeString = `${match.matchDate}T${match.matchTime}:00`;
      // Get current date and time
      const matchDateTime = new Date(matchDateTimeString);
      // console.log(`${match.matchDate}T${match.matchTime}:00`);
      const currentDateTime = new Date();
      // console.log(currentDateTime);
      // Compare match time with current time
      match.status = matchDateTime > currentDateTime ? "Upcoming" : "Completed";
    });
    const sortedMatches = matches.sort((a, b) => {
      // Convert matchDate and startsAt to Date objects
      const dateA = new Date(Date.parse(a.matchDate));
      const dateB = new Date(Date.parse(b.matchDate));
      const startTimeA = new Date(`${a.matchDate} ${a.startsAt}`);
      const startTimeB = new Date(`${b.matchDate} ${b.startsAt}`);

      // Compare match dates first
      if (dateA.getTime() !== dateB.getTime()) {
        return dateA.getTime() - dateB.getTime();
      }

      // If match dates are the same, compare start times
      return startTimeA.getTime() - startTimeB.getTime();
    });

    // console.log("sortedMatches => ", sortedMatches);
    return sortedMatches;
  } catch (e) {
    console.error(e);
    return matches;
  }
};

export const getMatchData = async (matchId) => {
  try {
    const docRef = doc(db, "matches", matchId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const data = docSnap.data();
      let matchData = {
        teamA: data.teamA,
        teamB: data.teamB,
        teamApercentage: data.teamApercentage,
        teamBpercentage: data.teamBpercentage,
        matchTips: data.matchTips,
      };
      return matchData;
    } else {
      console.log("No such document!");
      return {};
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const getTeamsData = async (matchId, leagueType) => {
  console.log(matchId, leagueType);
  try {
    const teamsRef = collection(db, "teams");
    const q1 = query(
      teamsRef,
      where("matchId", "==", matchId),
      where("leagueType", "==", leagueType)
    );
    const querySnapshot = await getDocs(q1);
    let teamsData = [];
    querySnapshot.forEach((doc) => {
      teamsData = doc.data().LeagueTeams;
      console.log(teamsData);
    });
    return teamsData;
  } catch (e) {
    console.log(e.message);
  }
};

export const addUser = async (userId, data) => {
  console.log(userId, data);
  try {
    await setDoc(doc(db, "users", userId), data);
    console.log("User is created ");
  } catch (error) {
    console.log(error);
  }
};

export const getUsername = (email) => {
  const parts = email.split("@");
  return parts[0];
};

export const getUserData = async (uid) => {
  console.log(uid);
  const userRef = doc(db, "users", uid);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    const user = docSnap.data();
    let userData = {
      userName: user.userName,
      emailId: user.emailId,
      devices: user.devices,
      planStarts: user.planStarts,
      planEnds: user.planEnds,
    };
    // console.log("userData =>", userData);
    return userData;
  } else {
    console.log("No such document!");
    return {};
  }
};

function handleRegistrationError(errorMessage) {
  alert(errorMessage);
  throw new Error(errorMessage);
}

export async function registerForPushNotificationsAsync(userId) {
  console.log(userId);
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
      console.log(
        "Permission  granted to get push token for push notification!"
      );
    }
    if (finalStatus !== "granted") {
      handleRegistrationError(
        "Permission not granted to get push token for push notification!"
      );
      console.log(
        "Permission not granted to get push token for push notification!"
      );
      return;
    }
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ??
      Constants?.easConfig?.projectId;
    if (!projectId) {
      handleRegistrationError("Project ID not found");
      console.log("Project ID not found");
    }
    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      await updateUserToken(userId, pushTokenString);
      console.log(pushTokenString);
      return pushTokenString;
    } catch (e) {
      handleRegistrationError(`${e}`);
      console.log(`${e}`);
    }
  } else {
    handleRegistrationError("Must use physical device for push notifications");
    console.log("Must use physical device for push notifications");
  }
}

export const updateUserToken = async (userId, token) => {
  console.log("token =>", token);
  const userRef = doc(collection(db, "users"), userId);
  try {
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      await updateDoc(userRef, {
        notificationToken: token,
      });
      console.log("User token updated successfully!");
    }
  } catch (error) {
    console.error("Error updating token successfully!", error);
  }
};

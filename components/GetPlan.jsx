import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";

export const handleWhatsAppUs = async () => {
  try {
    const supported = await Linking.canOpenURL(
      process.env.EXPO_PUBLIC_WHATSAPP_LINK
    );
    if (supported) {
      await Linking.openURL(process.env.EXPO_PUBLIC_WHATSAPP_LINK);
    } else {
      throw new Error("Link Expired");
    }
  } catch (error) {
    Alert.alert("Link Expired", "Failed to open the URL");
  }
};

const GetPlan = () => {
  return (
    <ScrollView className="flex-1 space-y-6 bg-zinc-900">
      <View className="flex flex-col items-center mt-6">
        <View className="h-24 w-24">
          <Image
            source={require("../assets/logo.png")}
            style={{ flex: 1, width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text className="text-2xl font-pmedium mb-2 text-zinc-100">
          Fantasy Medium
        </Text>
        <Text className="text-sm font-pregular text-justify text-zinc-300">
          Join us to unlock access to our prime teams.
        </Text>
      </View>
      <View className="h-96">
        <Image
          source={require("../assets/images/phImg.png")}
          resizeMode="contain"
          className="flex-1 w-full"
        />
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-pmedium text-zinc-50 ml-4">
          Choose your plan.
        </Text>
        <View className="flex flex-row space-x-4 border-b border-zinc-400 pb-4 pl-4">
          <View className="bg-yellow-500 rounded-md p-2 ">
            <Text className="text-xl font-psemibold">₹249</Text>
            <Text
              className="text-xs
             font-pregular text-zinc-700"
            >
              1 month
            </Text>
          </View>
          <View className="bg-yellow-500 rounded-md p-2">
            <Text className="text-xl font-psemibold">₹499</Text>
            <Text
              className="text-xs
             font-pregular text-zinc-700"
            >
              3 months
            </Text>
          </View>
          <View className="bg-yellow-500 rounded-md p-2">
            <Text className="text-xl font-psemibold">₹899</Text>
            <Text
              className="text-xs
             font-pregular text-zinc-700"
            >
              6 months
            </Text>
          </View>
          <View className="bg-yellow-500 rounded-md p-2">
            <Text className="text-xl font-psemibold">₹1499</Text>
            <Text
              className="text-xs
             font-pregular  text-zinc-700"
            >
              12 months
            </Text>
          </View>
        </View>
        <View className="space-y-4 ml-4">
          <View className="flex-row items-center space-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#09c865" }}
            />
            <Text className="text-zinc-200">
              Coverage of sports - Cricket, Football, Basketball, etc.,
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#09c865" }}
            />
            <Text className="text-zinc-200 text-sm">
              Small league teams for H2H, 3-members, and 4-members contests are
              available
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#09c865" }}
            />
            <Text className="text-zinc-200 text-sm">
              Includes 20 grand league teams
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#09c865" }}
            />
            <Text className="text-zinc-200 text-sm">
              Advanced automatic generation of grand league teams
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#09c865" }}
            />
            <Text className="text-zinc-200 text-sm">
              Captain & Vice-Captain Finder
            </Text>
          </View>
        </View>
      </View>
      <View className="mb-6 mx-4 space-y-4">
        <Text className="text-xl font-pmedium text-zinc-50">
          How to get access to prime teams?
        </Text>
        <Text className="text-justify font-pregular text-zinc-300 text-sm">
          1. Choose the plan above. For example, ₹249 for a one-month plan.
        </Text>
        <Text className="text-justify font-pregular text-zinc-300 text-sm">
          2. Contact the Fantasy Medium App Admin through WhatsApp to make the
          payment.
        </Text>
        <Text className="text-justify font-pregular text-zinc-300 text-sm">
          3. After the payment is done, the admin will activate your prime
          account.
        </Text>
        <View className="flex-col items-center py-4">
          <TouchableOpacity
            className="bg-green-500 items-center justify-center flex-row space-x-2 py-2.5 rounded-lg px-3"
            onPress={handleWhatsAppUs}
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ color: "#ffffff" }}
              size={32}
            />

            <Text className="text-white font-psemibold text-xl">
              WhatsApp Us
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default GetPlan;

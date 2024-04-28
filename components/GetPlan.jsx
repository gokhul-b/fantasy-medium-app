import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const GetPlan = () => {
  return (
    <ScrollView className="space-y-6 border p-4 flex-1">
      <View className="flex flex-col items-center">
        <Text className="text-2xl font-psemibold mb-2">Fantasy Medium</Text>
        <Text className="text-sm font-pmedium text-justify text-gray-500">
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
      <View className="rounded-xl">
        <Text className="text-xl font-pmedium mb-2">
          How to get access to prime teams?
        </Text>
        <Text className="text-justify font-pregular text-slate-600 text-base">
          Please select one of the available plans and proceed with the payment
          using the provided QR code or UPI ID. After making the payment, please
          share a screenshot of the transaction with the admin via WhatsApp.
          Your access will be granted within 5 to 10 minutes.
        </Text>
      </View>
      <View className="rounded-xl space-y-4">
        <Text className="text-xl font-pmedium">Choose your plan.</Text>
        <View className="flex flex-row space-x-4 border-b border-slate-400 pb-4">
          <View className="border rounded-md p-2 ">
            <Text className="text-2xl font-psemibold">₹249</Text>
            <Text className="text-sm font-pregular text-slate-600">
              per month
            </Text>
          </View>
          <View className="border rounded-md p-2">
            <Text className="text-2xl font-psemibold">₹499</Text>
            <Text className="text-sm font-pregular text-slate-600">
              3 month
            </Text>
          </View>
          <View className="border rounded-md p-2">
            <Text className="text-2xl font-psemibold">₹899</Text>
            <Text className="text-sm font-pregular text-slate-600">
              6 month
            </Text>
          </View>
          <View className="border rounded-md p-2">
            <Text className="text-2xl font-psemibold">₹1499</Text>
            <Text className="text-sm font-pregular  text-slate-600">
              12 month
            </Text>
          </View>
        </View>
        <View className="space-y-4 mb-8">
          <View className="flex-row items-center space-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#09c865" }}
            />
            <Text className="text-slate-600">
              Coverage of sports - Cricket, Football, and Basketball
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#09c865" }}
            />
            <Text className="text-slate-600 text-sm">
              Includes one or more small league teams
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#09c865" }}
            />
            <Text className="text-slate-600 text-sm">
              Includes 20 grand league teams
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#09c865" }}
            />
            <Text className="text-slate-600 text-sm">
              Advanced automatic generation of grand league teams
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#09c865" }}
            />
            <Text className="text-slate-600 text-sm">
              Support available through WhatsApp
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default GetPlan;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const GetStarted = () => {
  return (
    <View className="flex-1 items-center justify-center px-12 space-y-12 bg-white">
      <View className="flex flex-col items-center">
        <Text className="text-2xl font-pmedium mb-2">Fantasy Medium</Text>
        <Text className="text-sm font-pregular text-justify text-gray-500">
          Join us to unlock access to our prime teams.
        </Text>
      </View>
      <View className="w-full space-y-4">
        <Link
          href={"/sign-up"}
          className="bg-gray-900  py-3 rounded-md text-white w-full text-center"
        >
          Sign up
        </Link>
        <Link
          href={"/sign-in"}
          className="border border-gray-900  py-3 rounded-md text-gray-900 w-full text-center"
        >
          Sign in
        </Link>
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="w-full items-center py-3"
      >
        <Text className="font-pextralight text-gray-400 text-sm">
          {"<<"} Back to home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;

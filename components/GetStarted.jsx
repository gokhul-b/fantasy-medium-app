import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const GetStarted = () => {
  return (
    <View className="flex-1 items-center justify-center px-12 space-y-12 bg-zinc-900">
      <View className="flex flex-col items-center">
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
      <View className="w-full space-y-4">
        <Link
          href={"/sign-up"}
          className="bg-yellow-500  py-3 rounded-md  w-full text-center"
        >
          Sign up
        </Link>
        <Link
          href={"/sign-in"}
          className="border border-yellow-500  py-3 rounded-md text-zinc-100 w-full text-center"
        >
          Sign in
        </Link>
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="w-full items-center py-3"
      >
        <Text className="font-pextralight text-zinc-100 text-sm">
          {"<<"} back to home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;

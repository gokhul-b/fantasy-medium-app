import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignInButton = () => {
  return (
    <View className="px-12">
      <Link
        href={"/sign-in"}
        className="w-full py-3 bg-gray-900 rounded-md text-white text-center text-base"
      >
        Sign in
      </Link>
    </View>
  );
};

export default SignInButton;

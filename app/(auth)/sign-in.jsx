import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {};
  return (
    <View className="flex-1 justify-center bg-white px-8">
      <Text className="mb-8 text-2xl font-pmedium ">
        Log in to Fantasy Medium
      </Text>
      <View className="space-y-2 mb-4 flex">
        <Text className="">Username</Text>
        <TextInput
          className="border border-gray-300  rounded-md px-4 py-2 w-full focus:border-2 focus:border-gray-900"
          placeholder="Enter username"
        />
      </View>
      <View className="space-y-2">
        <Text className="">Password</Text>
        <View className="border border-gray-300  rounded-md px-4 py-2 w-full focus:border-2 focus:border-gray-900 flex-row items-center justify-between">
          <TextInput
            className=""
            secureTextEntry={!showPassword}
            placeholder="Enter password"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? <Text>Show</Text> : <Text>Hide</Text>}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        className="bg-gray-900 px-4 py-3 rounded-md w-full my-6"
        onPress={handleLogin}
      >
        <Text className="text-white text-center text-base ">Sign in</Text>
      </TouchableOpacity>
      <Text className=" text-slate-500 text-center">
        Don't have an account yet?{" "}
        <Link href="/sign-up" className="text-black">
          Sign Up
        </Link>
      </Text>
    </View>
  );
};

export default SignIn;

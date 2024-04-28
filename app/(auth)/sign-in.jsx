import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { useAuth } from "../../context/AuthProvider";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, signIn } = useAuth();
  const handleSignIn = () => {
    signIn(email, password);
  };
  return (
    <View className="flex-1 justify-center bg-white px-8">
      <Text className="mb-8 text-2xl font-pmedium ">
        Log in to Fantasy Medium
      </Text>
      <View className="space-y-2 mb-4 flex">
        <Text className="">Email</Text>
        <TextInput
          className="border border-gray-300  rounded-md px-4 py-2 w-full focus:border-2 focus:border-gray-900"
          placeholder="Enter email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>
      <View className="space-y-2">
        <Text className="">Password</Text>
        <View className="border border-gray-300  rounded-md px-4 py-2 w-full focus:border-2 focus:border-gray-900 flex-row items-center justify-between">
          <TextInput
            className=""
            secureTextEntry={!showPassword}
            placeholder="Enter password"
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? <Text>Show</Text> : <Text>Hide</Text>}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        className="bg-gray-900 px-4 py-3 rounded-md w-full my-6"
        onPress={handleSignIn}
        activeOpacity={1}
      >
        <Text className="text-white text-center text-base">
          {loading ? "Signing in.." : "Sign in"}
        </Text>
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

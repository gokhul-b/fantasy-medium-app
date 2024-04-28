import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, FIREBASE_AUTH } from "../../lib/firebase";
import { addUser, getUsername } from "../actions";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthProvider";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, signUp } = useAuth();
  const handleSignUp = () => {
    signUp(email, password);
  };

  return (
    <View className="flex-1 justify-center bg-white px-8">
      <Text className="mb-2 text-2xl font-pmedium">Create your account</Text>
      <Text className="mb-8 text-lg font-pregular  text-gray-500">
        to continue to Fantasy Medium
      </Text>

      <View className="space-y-2 mb-4 flex">
        <Text className="">Email</Text>
        <TextInput
          className="border border-gray-300  rounded-md px-4 py-2 w-full focus:border-2 focus:border-gray-900"
          placeholder="Enter Email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View className="space-y-2">
        <Text className="">Password</Text>
        <View className="border border-gray-300  rounded-md px-4 py-2 w-full focus:border-2 focus:border-gray-900 flex-row items-center justify-between">
          <TextInput
            className=""
            secureTextEntry={!showPassword}
            placeholder="Enter password"
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? <Text>Show</Text> : <Text>Hide</Text>}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        className="bg-gray-900 px-4 py-3 rounded-md w-full my-6"
        onPress={handleSignUp}
        activeOpacity={1}
      >
        <Text className="text-white text-center text-base ">
          {loading ? "Signing up.." : "Sign up"}
        </Text>
      </TouchableOpacity>
      <Text className=" text-slate-500 text-center">
        Have an account?{" "}
        <Link href="/sign-in" className="text-black">
          Sign in
        </Link>
      </Text>
    </View>
  );
};

export default SignUp;

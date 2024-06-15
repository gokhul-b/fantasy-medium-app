import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, FIREBASE_AUTH } from "../../lib/firebase";
import { addUser, getUsername } from "../actions";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, signUp, authError } = useAuth();
  const handleSignUp = () => {
    signUp(email, password);
    if (authError) {
      ToastAndroid.show(authError, ToastAndroid.SHORT);
    }
  };

  return (
    <View className="flex-1 justify-center bg-zinc-900 px-8">
      <View className="h-24 w-24">
        <Image
          source={require("../../assets/logo.png")}
          style={{ flex: 1, width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Text className="mb-2 text-zinc-100 text-2xl font-pmedium">
        Create your account
      </Text>
      <Text className="mb-8 text-base font-pregular text-zinc-400">
        to continue to Fantasy Medium
      </Text>

      <View className="space-y-2 mb-4 flex">
        <Text className="text-zinc-100">Email</Text>
        <TextInput
          className="border border-zinc-300  rounded-md px-4 py-2 w-full focus:border-2 focus:border-zinc-100 text-zinc-50"
          placeholder="Enter Email"
          placeholderTextColor={"#E4E4E7"}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View className="space-y-2">
        <Text className="text-zinc-100">Password</Text>
        <View className="border border-zinc-300  rounded-md px-4 py-2 w-full focus:border-2 focus:border-zinc-100 flex-row items-center justify-between">
          <TextInput
            className="text-zinc-100 flex-1"
            secureTextEntry={!showPassword}
            placeholder="Enter password"
            autoCapitalize="none"
            placeholderTextColor={"#E4E4E7"}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            activeOpacity={1}
          >
            {!showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#fafafa" }} />
            ) : (
              <FontAwesomeIcon icon={faEye} style={{ color: "#fafafa" }} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        className="bg-yellow-500 px-4 py-3 rounded-md w-full my-6"
        onPress={handleSignUp}
        activeOpacity={1}
      >
        <Text className="text-zinc-900 text-center text-base ">
          {loading ? "Signing up.." : "Sign up"}
        </Text>
      </TouchableOpacity>
      <Text className=" text-zinc-300 text-center">
        Have an account?{" "}
        <Link href="/sign-in" className="text-zinc-100">
          Sign in
        </Link>
      </Text>
    </View>
  );
};

export default SignUp;

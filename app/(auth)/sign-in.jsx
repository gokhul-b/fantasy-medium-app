import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { useAuth } from "../../context/AuthProvider";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, signIn, authError, resetPassword } = useAuth();

  const handleSignIn = () => {
    signIn(email, password);
    if (authError) {
      ToastAndroid.show(authError, ToastAndroid.SHORT);
    }
  };

  const handleResetPassword = () => {
    resetPassword(email);
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
      <Text className="mb-8 text-2xl text-zinc-100 font-pmedium ">
        Log in to Fantasy Medium
      </Text>
      <View className="space-y-2 mb-4 flex">
        <Text className="text-zinc-100">Email</Text>
        <TextInput
          className="border border-zinc-300  rounded-md px-4 py-2 w-full focus:border-2 focus:border-zinc-100 text-zinc-50"
          placeholder="Enter email"
          autoCapitalize="none"
          placeholderTextColor={"#E4E4E7"}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>
      <View className="space-y-2">
        <Text className="text-zinc-100">Password</Text>
        <View className="border  border-zinc-300  rounded-md px-4 py-2 w-full focus:border-2 focus:border-zinc-100 flex-row items-center justify-between">
          <TextInput
            secureTextEntry={!showPassword}
            className="flex-1 text-zinc-50"
            placeholder="Enter password"
            autoCapitalize="none"
            placeholderTextColor={"#E4E4E7"}
            onChangeText={(text) => {
              setPassword(text);
            }}
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
      <Text
        className="text-zinc-300 text-right mt-4 hover:text-zinc-400"
        onPress={handleResetPassword}
      >
        Forgot password?
      </Text>
      <TouchableOpacity
        className="bg-yellow-500 px-4 py-3 rounded-md w-full my-6"
        onPress={handleSignIn}
        activeOpacity={1}
      >
        <Text className="text-zinc-900 text-center text-base">
          {loading ? "Signing in.." : "Sign in"}
        </Text>
      </TouchableOpacity>
      <Text className=" text-zinc-300 text-center">
        Don't have an account yet?{" "}
        <Link href="/sign-up" className="text-zinc-100">
          Sign Up
        </Link>
      </Text>
    </View>
  );
};

export default SignIn;

// Loading.js
import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center bg-zinc-900">
      <ActivityIndicator animating={true} size="small" color="#eab308" />
    </View>
  );
};

export default Loading;

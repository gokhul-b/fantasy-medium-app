import React from "react";
import { Stack } from "expo-router";

const PageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default PageLayout;

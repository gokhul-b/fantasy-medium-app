import { Stack } from "expo-router";

const PageLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="profile"
        options={{
          headerShown: true,
          title: "Profile",
          headerStyle: { backgroundColor: "rgb(234, 179, 8)" },
        }}
      />
    </Stack>
  );
};

export default PageLayout;

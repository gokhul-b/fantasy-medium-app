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
      <Stack.Screen
        name="notices"
        options={{
          headerShown: true,
          title: "Notices",
          headerStyle: { backgroundColor: "rgb(234, 179, 8)" },
        }}
      />
      <Stack.Screen
        name="help"
        options={{
          headerShown: true,
          title: "Help",
          headerStyle: { backgroundColor: "rgb(234, 179, 8)" },
        }}
      />
      <Stack.Screen
        name="contact"
        options={{
          headerShown: true,
          title: "Contact & Support",
          headerStyle: { backgroundColor: "rgb(234, 179, 8)" },
        }}
      />
      <Stack.Screen
        name="plans"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default PageLayout;

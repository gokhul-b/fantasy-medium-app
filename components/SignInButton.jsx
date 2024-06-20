import { View } from "react-native";
import { Link } from "expo-router";

const SignInButton = () => {
  return (
    <View className="px-12">
      <Link
        href={"/sign-in"}
        className="w-full py-3 rounded-md text-center text-base bg-yellow-500"
      >
        Sign in
      </Link>
    </View>
  );
};

export default SignInButton;

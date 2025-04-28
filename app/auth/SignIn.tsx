import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleSignIn = () => {
    login();
    router.replace("/(tabs)");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 20 }}>Sign In</Text>
      <Button title="Sign In" onPress={handleSignIn} />
      <View style={{ marginTop: 10 }}>
        <Button title="Sign Up" onPress={() => router.push("/auth/SignUp")} />
      </View>
    </View>
  );
};

export default SignIn;

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleSignUp = () => {
    login();
    router.replace('/(tabs)');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20 }}>Sign Up</Text>
      <Button title="Sign Up" onPress={handleSignUp} />
      <View style={{ marginTop: 10 }}>
        <Button title="Sign In" onPress={() => router.push('/auth/SignIn')} />
      </View>
    </View>
  );
};

export default SignUp;
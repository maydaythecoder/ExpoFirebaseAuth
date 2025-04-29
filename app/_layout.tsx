import { Redirect, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { AuthProvider } from './context/AuthContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      setIsAuthenticated(!!user);
    };
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Redirect href="/auth/SignIn" />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
        name="(tabs)"
        />
        <Stack.Screen
        name="auth/SignIn"
        />
        <Stack.Screen
        name="auth/SignUp"
        />
        <Stack.Screen
        name="auth/ForgotPassword"
        />
        <Stack.Screen
        name="auth/ResetPassword"
        />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
}

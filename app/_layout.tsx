import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';

function RootLayoutNav() {
  const segments = useSegments();
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const inAuthGroup = segments[0] === 'auth';
    
    if (!isAuthenticated && !inAuthGroup) {
      router.replace('/auth/SignIn');
    } else if (isAuthenticated && inAuthGroup) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated, segments]);

  return <Slot />;
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
    </ThemeProvider>
  );
}

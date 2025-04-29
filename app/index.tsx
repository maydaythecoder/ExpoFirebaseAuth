import { Redirect } from 'expo-router';
import { useAuth } from './context/AuthContext';

export default function Index() {
  const { isAuthenticated } = useAuth();

  // Redirect to the appropriate route based on authentication state
  return <Redirect href={isAuthenticated ? "/(tabs)" : "/auth/SignIn"} />;
} 
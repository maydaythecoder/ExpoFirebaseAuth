import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useTestUser = () => {
  const [testUser, setTestUserState] = useState<string>("Unverified");

  useEffect(() => {
    // Load initial state from storage
    const loadState = async () => {
      try {
        const stored = await AsyncStorage.getItem('testUser');
        if (stored) {
          setTestUserState(stored);
        }
      } catch (error) {
        console.error('Error loading auth state:', error);
      }
    };
    loadState();
  }, []);

  const setTestUser = async (value: string) => {
    try {
      await AsyncStorage.setItem('testUser', value);
      setTestUserState(value);
    } catch (error) {
      console.error('Error saving auth state:', error);
    }
  };

  return { testUser, setTestUser };
};

export default useTestUser;
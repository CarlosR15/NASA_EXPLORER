import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InitialState, PartialState } from '@react-navigation/native';

export function useNavigationState() {
  const [initialStateNavigation, setInitialStateNavigation] = useState<InitialState | undefined>();
  const [isReady, setIsReady] = useState(false);

  const loadStateNavigation = async () => {
    try {
      const savedStateString = await AsyncStorage.getItem('NAVIGATION_STATE');
      const state = savedStateString ? JSON.parse(savedStateString) : undefined;
      setInitialStateNavigation(state);
    } finally {
      setIsReady(true);
    }
  };

  const saveStateNavigation = async (state: PartialState<InitialState>) => {
    await AsyncStorage.setItem('NAVIGATION_STATE', JSON.stringify(state));
  };

  const clearStateNavigation = async () => {
    await AsyncStorage.removeItem('NAVIGATION_STATE');
  };

  return {
    initialStateNavigation,
    isReady,
    loadStateNavigation,
    saveStateNavigation,
    clearStateNavigation,
  };
}
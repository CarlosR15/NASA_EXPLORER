import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// verificacion de plataforma actual
const isWeb = Platform.OS === 'web';

export const storage = {
  async setItem(key: string, value: string): Promise<void> {
    if (isWeb) {
      // en web se utiliza localStorage
      localStorage.setItem(key, value);
    } else {
      // en mobile se usa AsyncStorage
      await AsyncStorage.setItem(key, value);
    }
  },

  async getItem(key: string): Promise<string | null> {
    if (isWeb) {
      return localStorage.getItem(key);
    } else {
      return await AsyncStorage.getItem(key);
    }
  },

  async removeItem(key: string): Promise<void> {
    if (isWeb) {
      localStorage.removeItem(key);
    } else {
      await AsyncStorage.removeItem(key);
    }
  },
};
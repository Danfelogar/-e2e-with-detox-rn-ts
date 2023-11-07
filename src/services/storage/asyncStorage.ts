import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageService} from './storageService';

export const asyncStorage: StorageService = {
  getItem: async key => {
    const item = await AsyncStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async key => {
    await AsyncStorage.removeItem(key);
  },
};

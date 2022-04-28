import AsyncStorage from '@react-native-async-storage/async-storage'

const superKey = '@zenklub:challange:'

const setItem = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(`${superKey}${key}`, JSON.stringify(value));
  } catch (error) {
    // Error saving data
  }
};

const getItem = async (key: string): Promise<any> => {
  try {
    const value = await AsyncStorage.getItem(`${superKey}${key}`) ?? '';
    return JSON.parse(value)
  } catch (error) {
    return null
  }
};


export default { setItem, getItem }

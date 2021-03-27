import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TabBarContext = createContext();

const TabBarProvider = ({children}) => {
  const [showTabBar, setShowTabBar] = useState(true);
  const [isDark, setIsDark] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const toggleTheme = () => {
    setIsDark(isDark => !isDark);
    AsyncStorage.setItem('themeMode', JSON.stringify(!isDark));
  };

  const findOldTheme = async () => {
    const themeMode = await AsyncStorage.getItem('themeMode');
    if (themeMode === null) {
      setIsDark(true);
      setIsLoading(false);
    } else if (themeMode === 'true') {
      setIsDark(true);
      setIsLoading(false);
    } else {
      setIsDark(false);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    findOldTheme();
  }, []);
  return (
    <TabBarContext.Provider
      value={{
        showTabBar,
        setShowTabBar,
        isDark,
        setIsDark,
        toggleTheme,
        isLoading,
      }}>
      {children}
    </TabBarContext.Provider>
  );
};

export const useTabBar = () => useContext(TabBarContext);

export default TabBarProvider;

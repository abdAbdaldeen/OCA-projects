import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
  const [isDark, setIsDark] = useState();
  const [isLoadingTheme, setIsLoadingTheme] = useState(true);
  const toggleTheme = () => {
    setIsDark(isDark => !isDark);
    AsyncStorage.setItem('themeMode', JSON.stringify(!isDark));
  };
  const findOldTheme = async () => {
    const themeMode = await AsyncStorage.getItem('themeMode');
    if (themeMode === null || themeMode === undefined) {
      setIsDark(true);
      setIsLoadingTheme(false);
    } else if (themeMode === 'true') {
      setIsDark(true);
      setIsLoadingTheme(false);
    } else if (themeMode === 'false') {
      setIsDark(false);
      setIsLoadingTheme(false);
    } else {
      setIsDark(true);
      setIsLoadingTheme(false);
    }
  };
  useEffect(() => {
    findOldTheme();
  }, []);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };

  const theme = isDark ? CustomDarkTheme : CustomDefaultTheme;
  return (
    <ThemeContext.Provider
      value={{
        isDark,
        setIsDark,
        toggleTheme,
        theme,
        isLoadingTheme,
        setIsLoadingTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = () => useContext(ThemeContext);

export default ThemeProvider;

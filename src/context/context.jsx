import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext(null);

const getInitialDarkMode = () => {
  const preferDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  return preferDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTeam] = useState('cat');
  const ToggleDarkTheme = () => {
    const newValue = !isDarkTheme;
    setIsDarkTheme(newValue);
  };

  useEffect(() => {
    const bodyEle = document.querySelector('body');
    bodyEle.classList.toggle('darkTheme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, ToggleDarkTheme, searchTerm, setSearchTeam }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

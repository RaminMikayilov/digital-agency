"use client";

import { THEME_MODE } from "@/constants";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(null);

  const getDevicePreference = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? THEME_MODE.DARK
      : THEME_MODE.LIGHT;

  const toggle = () => {
    setMode((prev) =>
      prev === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT
    );
  };

  useEffect(() => {
    setMode(() => getDevicePreference());
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

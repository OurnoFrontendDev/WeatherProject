import React, { useState, ReactNode, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../themes";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("lightTheme");

  const [manualOverride, setManualOverride] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedManualOverride = localStorage.getItem("manualOverride") === "true";

    if (storedTheme) {
      setTheme(storedTheme);
      setManualOverride(storedManualOverride);
    } else {
      const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = userPrefersDark ? "darkTheme" : "lightTheme";
      setTheme(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }

    if (!storedManualOverride) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = (event: MediaQueryListEvent) => {
        if (!manualOverride) {
          const newTheme = event.matches ? "darkTheme" : "lightTheme";
          setTheme(newTheme);
          localStorage.setItem("theme", newTheme);
        }
      };

      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [manualOverride]);
  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    setManualOverride(true);
    localStorage.setItem("theme", newTheme);
    localStorage.setItem("manualOverride", "true");
  };

  const currentTheme = theme === "lightTheme" ? lightTheme : darkTheme;

  const contextValue: ThemeContextType = {
    theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

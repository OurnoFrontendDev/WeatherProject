import React, { useState, ReactNode, useEffect, useMemo } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../themes";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";
import { MANUAL_OVERRIDE_LOCAL_STORAGE_KEY, THEME_LOCAL_STORAGE_KEY } from "../constants/localStorage";

interface ThemeProviderProps {
  children: ReactNode;
}

export enum ThemeEnum {
  darkTheme = "darkTheme",
  lightTheme = "lightTheme",
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.lightTheme);
  const [manualOverride, setManualOverride] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as ThemeEnum;
    const storedManualOverride = localStorage.getItem(MANUAL_OVERRIDE_LOCAL_STORAGE_KEY) === 'true';

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = userPrefersDark ? ThemeEnum.darkTheme : ThemeEnum.lightTheme;
      setTheme(defaultTheme);
      localStorage.setItem(THEME_LOCAL_STORAGE_KEY, defaultTheme);
    }

    setManualOverride(storedManualOverride);

    if (!storedManualOverride) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = (event: MediaQueryListEvent) => {
        if (!manualOverride) {
          const newTheme = event.matches ? ThemeEnum.darkTheme : ThemeEnum.lightTheme;
          setTheme(newTheme);
          localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [manualOverride]);

  const changeTheme = (newTheme: ThemeEnum) => {
    setTheme(newTheme);
    setManualOverride(true);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
    localStorage.setItem(MANUAL_OVERRIDE_LOCAL_STORAGE_KEY, "true");
  };

  const currentTheme = theme === ThemeEnum.lightTheme ? lightTheme : darkTheme;

  const contextValue = useMemo<ThemeContextType>(
    () => ({
      theme,
      changeTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
// export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//   const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.lightTheme);
//
//   const [manualOverride, setManualOverride] = useState<boolean>(false);
//
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") as ThemeEnum;
//     const storedManualOverride = localStorage.getItem("manualOverride") === "true";
//
//     if (storedTheme) {
//       setTheme(storedTheme);
//       setManualOverride(storedManualOverride);
//     } else {
//       const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       const defaultTheme = userPrefersDark ? ThemeEnum.darkTheme : ThemeEnum.lightTheme;
//       setTheme(defaultTheme);
//       localStorage.setItem("theme", defaultTheme);
//     }
//
//     if (!storedManualOverride) {
//       const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//
//       const handleChange = (event: MediaQueryListEvent) => {
//         if (!manualOverride) {
//           const newTheme = event.matches ? ThemeEnum.darkTheme : ThemeEnum.lightTheme;
//           setTheme(newTheme);
//           localStorage.setItem("theme", newTheme);
//         }
//       };
//
//       mediaQuery.addEventListener("change", handleChange);
//
//       return () => {
//         mediaQuery.removeEventListener("change", handleChange);
//       };
//     }
//   }, [manualOverride]);
//
//   const changeTheme = (newTheme: ThemeEnum) => {
//     setTheme(newTheme);
//     setManualOverride(true);
//     localStorage.setItem("theme", newTheme);
//     localStorage.setItem("manualOverride", "true");
//   };
//
//   const currentTheme = theme === ThemeEnum.lightTheme ? lightTheme : darkTheme;
//
//   const contextValue = useMemo<ThemeContextType>(
//     () => ({
//       theme,
//       changeTheme,
//     }),
//     [theme],
//   );
//
//   return (
//     <ThemeContext.Provider value={contextValue}>
//       <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

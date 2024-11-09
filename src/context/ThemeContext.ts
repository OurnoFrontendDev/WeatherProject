import { createContext } from "react";
import { ThemeEnum } from "../provider";

export interface ThemeContextType {
  theme: ThemeEnum.darkTheme|ThemeEnum.lightTheme;
  changeTheme: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeEnum.lightTheme,
  changeTheme: () => {},
});
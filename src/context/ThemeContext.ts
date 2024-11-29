import { createContext } from "react";
import { ThemeEnum } from '../types/Theme';

export interface ThemeContextType {
  theme: ThemeEnum.darkTheme|ThemeEnum.lightTheme;
  changeTheme: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeEnum.darkTheme,
  changeTheme: () => {},
});
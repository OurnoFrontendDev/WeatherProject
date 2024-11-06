import { createContext } from "react";
import { ThemeEnum } from "../provider";

export interface ThemeContextType {
  theme: ThemeEnum;
  changeTheme: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

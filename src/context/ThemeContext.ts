import { createContext } from 'react';

export interface ThemeContextType {
    theme: string;
    changeTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
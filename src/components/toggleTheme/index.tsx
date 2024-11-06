import React, { useState, useEffect } from "react";
import DarkModeIcon from "../../icons/DarkModeIcon.svg";
import LightModeIcon from "../../icons/LightModeIcon.svg";
import { useTheme } from "../../hooks/useTheme";
import { IconLoader } from "../IconLoader";
import {
  HiddenInputThemeToggle,
  LabelImageThemeToggle,
  SwitchLabelThemeToggle,
  ToggleThumbThemeToggle,
} from "./toggleThemeStyles";
import { ThemeEnum } from "../../provider";

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || ThemeEnum.lightTheme;
};

const setThemeToLocalStorage = (theme: ThemeEnum) => {
  localStorage.setItem("theme", theme);
};

export const ToggleSwitchTheme = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const { changeTheme } = useTheme();

  useEffect(() => {
    setTheme(getThemeFromLocalStorage());
  }, []);

  const isLight = theme === ThemeEnum.lightTheme;

  const toggleTheme = () => {
    const newTheme = theme === ThemeEnum.lightTheme ? ThemeEnum.darkTheme : ThemeEnum.lightTheme;
    changeTheme(newTheme);
    setTheme(newTheme);
    setThemeToLocalStorage(newTheme);
  };

  return (
    <SwitchLabelThemeToggle>
      <HiddenInputThemeToggle type="checkbox" onChange={toggleTheme} checked={!isLight} />
      <ToggleThumbThemeToggle checked={!isLight} />
      <LabelImageThemeToggle $position="left" $isActive={isLight}>
        <IconLoader Svg={LightModeIcon} width={20} height={20}></IconLoader>
      </LabelImageThemeToggle>
      <LabelImageThemeToggle $position="right" $isActive={!isLight}>
        <IconLoader Svg={DarkModeIcon} width={20} height={20}></IconLoader>
      </LabelImageThemeToggle>
    </SwitchLabelThemeToggle>
  );
};
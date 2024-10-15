import React from "react";
import DarkModeIcon from "../../icons/DarkModeIcon.svg";
import LightModeIcon from "../../icons/LightModeIcon.svg";
import { useTheme } from "../../hooks/useTheme";
import { Icon } from "../svg/SvgLoader";
import {
  HiddenInputThemeToggle,
  LabelImageThemeToggle,
  SwitchLabelThemeToggle,
  ToggleThumbThemeToggle,
} from "./toggleThemeStyles";
import { useGetIconSize } from "../../hooks/useGetIconSize";

export const ToggleSwitchTheme = () => {
  const { theme, changeTheme } = useTheme();

  const isLight = theme === "lightTheme";

  const toggleTheme = () => {
    changeTheme(isLight ? "darkTheme" : "lightTheme");
  };

  const { iconToggleThemSize } = useGetIconSize();

  return (
    <SwitchLabelThemeToggle>
      <HiddenInputThemeToggle type="checkbox" onChange={toggleTheme} checked={!isLight} />
      <ToggleThumbThemeToggle checked={!isLight} />
      <LabelImageThemeToggle $position="left" $isActive={isLight}>
        <Icon Svg={LightModeIcon} width={iconToggleThemSize} height={iconToggleThemSize}></Icon>
      </LabelImageThemeToggle>
      <LabelImageThemeToggle $position="right" $isActive={!isLight}>
        <Icon Svg={DarkModeIcon} width={iconToggleThemSize} height={iconToggleThemSize}></Icon>
      </LabelImageThemeToggle>
    </SwitchLabelThemeToggle>
  );
};

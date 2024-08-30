import React from 'react';
import DarkModeIcon from "../../icons/DarkModeIcon.svg";
import LightModeIcon from "../../icons/LightModeIcon.svg";
import {useTheme} from "../../hooks/useTheme";
import {Icon} from "../svg/SvgLoader";
import {
    HiddenInputThemeToggle,
    LabelImageThemeToggle,
    SwitchLabelThemeToggle,
    ToggleThumbThemeToggle
} from "./toggleThemeStyles";

export const ToggleSwitchTheme = () => {
    const {theme, changeTheme} = useTheme();
    const isLight = theme === 'lightTheme';
    const toggleTheme = () => {
        changeTheme(isLight ? 'darkTheme' : 'lightTheme');
    };

    return (
        <SwitchLabelThemeToggle>
            <HiddenInputThemeToggle
                type="checkbox"
                onChange={toggleTheme}
                checked={!isLight}
            />
            <ToggleThumbThemeToggle checked={!isLight}/>
            <LabelImageThemeToggle position="left" active={isLight}>
                <Icon Svg={LightModeIcon} width={15} height={15}></Icon>
            </LabelImageThemeToggle>
            <LabelImageThemeToggle position="right" active={!isLight}>
                <Icon Svg={DarkModeIcon} width={15} height={15}></Icon>
            </LabelImageThemeToggle>
        </SwitchLabelThemeToggle>
    );
};



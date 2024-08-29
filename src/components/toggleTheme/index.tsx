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
    console.log('Current theme:', theme);

    const isLight = theme === 'lightTheme'; // Проверяем, светлая ли тема

    const toggleTheme = () => {
        console.log('Toggle theme clicked');
        changeTheme(isLight ? 'darkTheme' : 'lightTheme'); // Переключаем на противоположную тему
        console.log('New theme:', isLight ? 'darkTheme' : 'lightTheme');
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



import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../features/themeSlice";
import {RootState} from "../../state/store";
import DarkModeIcon from "../../icons/DarkModeIcon.svg";
import LightModeIcon from "../../icons/LightModeIcon.svg";
import {Icon} from "../svg/SvgLoader";
import {
    HiddenInputThemeToggle,
    LabelImageThemeToggle,
    SwitchLabelThemeToggle,
    ToggleThumbThemeToggle
} from "./toggleThemeStyles";

export const ToggleSwitchTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);
    const isLight = theme === 'light';
    useEffect(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        dispatch(setTheme(systemTheme));
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            dispatch(setTheme(e.matches ? 'dark' : 'light'));
        };
        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, [dispatch]);

    const toggleTheme = () => {
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
    };
    return (
        <SwitchLabelThemeToggle>
            <HiddenInputThemeToggle
                type="checkbox"
                onChange={toggleTheme}
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



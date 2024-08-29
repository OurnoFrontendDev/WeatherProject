import React from 'react';
import {TempUnitSwitcher} from "../TempUnitSwitcher";
import {SearchCityWeather} from "../cityWeatherSearch";
import {ToggleSwitchTheme} from "../toggleTheme";
import {
    CityTempThemeSwitchContainer,
    SearchCityWeatherContainer, ToggleSwitchTempUnitContainer, ToggleSwitchThemeContainer
} from "./SearchTogglePanelStyles";

export const SearchTogglePanelContainer = () => {
    return (
        <>
            <CityTempThemeSwitchContainer>
                <SearchCityWeatherContainer>
                    <SearchCityWeather/>
                </SearchCityWeatherContainer>
                <ToggleSwitchThemeContainer>
                  <ToggleSwitchTheme/>
                </ToggleSwitchThemeContainer>
                <ToggleSwitchTempUnitContainer>
                    <TempUnitSwitcher/>
                </ToggleSwitchTempUnitContainer>
            </CityTempThemeSwitchContainer>
        </>
    );
};

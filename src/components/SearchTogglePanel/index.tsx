import React from 'react';
import {TempUnitSwitcher} from "../TempUnitSwitcher";
import {SearchCityWeather} from "../cityWeatherSearch";
import {ToggleSwitchTheme} from "../toggleTheme";
import {
    CityFinderTemperatureSwitchThemeSwitchBarContainer,
    SearchCityWeatherContainer, ToggleSwitchTempUnitContainer, ToggleSwitchThemeContainer
} from "./SearchTogglePanelStyles";

export const SearchTogglePanelContainer = () => {
    return (<>

            <CityFinderTemperatureSwitchThemeSwitchBarContainer>
                <SearchCityWeatherContainer>
                    <SearchCityWeather/>
                </SearchCityWeatherContainer>
                <ToggleSwitchThemeContainer>
                  <ToggleSwitchTheme/>
                </ToggleSwitchThemeContainer>
                <ToggleSwitchTempUnitContainer>
                    <TempUnitSwitcher/>
                </ToggleSwitchTempUnitContainer>
            </CityFinderTemperatureSwitchThemeSwitchBarContainer>
        </>
    );
};

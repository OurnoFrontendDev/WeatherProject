import React from "react";
import { TempUnitSwitcher } from "../TempUnitSwitcher";
import { SearchCityWeather } from "../searchCityWeather";
import { ToggleSwitchTheme } from "../toggleTheme";
import {
  CityTempThemeSwitchContainer,
  SearchCityWeatherContainer, ThemeTemperatureToggleContainer,
} from "./SearchTogglePanelStyles";

export const SearchTogglePanelContainer = () => {
  return (
    <CityTempThemeSwitchContainer>
      <SearchCityWeatherContainer>
        <SearchCityWeather />
      </SearchCityWeatherContainer>
      <ThemeTemperatureToggleContainer>
        <ToggleSwitchTheme />
        <TempUnitSwitcher />
      </ThemeTemperatureToggleContainer>
    </CityTempThemeSwitchContainer>
  );
};

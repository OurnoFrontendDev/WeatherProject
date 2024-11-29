import React from "react";
import { SearchCityWeather } from "../searchCityWeather";
import { ToggleSwitchTheme } from "../toggleTheme";
import {
  SwitchTemperatureMetricContainer,
  SearchCityWeatherContainer, ThemeTemperatureToggleContainer,
} from "./searchTogglePanel.styled";
import { TempUnitSwitcher } from '../TempUnitSwitcher';

export const SearchToggleTemperatureUnitPanel = () => {
  return (
    <SwitchTemperatureMetricContainer>
      <SearchCityWeatherContainer>
        <SearchCityWeather />
      </SearchCityWeatherContainer>
      <ThemeTemperatureToggleContainer>
        <ToggleSwitchTheme />
        <TempUnitSwitcher />
      </ThemeTemperatureToggleContainer>
    </SwitchTemperatureMetricContainer>
  );
};

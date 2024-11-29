import React from "react";
import { ThisDay } from "../ThisDay";
import { WeatherDetails } from "../weatherDetails";
import { WeekForecast } from "../weekForecast";
import { DailyTemperature } from "../dailyTemperature";
import {
  ForeCastContainer,
  WeatherTownInfoContainer,
  WeatherContainer,
  WeekForecastContainer,
} from "./weatherSummary.styled";

export const WeatherSummary = () => (
  <WeatherContainer>
    <WeatherTownInfoContainer>
      <ThisDay />
      <ForeCastContainer>
        <DailyTemperature />
        <WeatherDetails />
      </ForeCastContainer>
    </WeatherTownInfoContainer>
    <WeekForecastContainer>
      <WeekForecast />
    </WeekForecastContainer>
  </WeatherContainer>
);

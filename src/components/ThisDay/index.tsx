import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherBySearchRequest } from "../features/weatherSlice";
import { format } from "date-fns";
import {
  City,
  InfoDate,
  LocationDescriptionContainer,
  LocationTemperatureContainer,
  Temperature,
  TemperatureIcon,
  TemperatureIconContainer,
} from "./ThisDayStyles";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Skeleton } from "../../skeleton/Skeleton";

export const ThisDay = () => {
  const dispatch = useDispatch();
  const weather = useTypedSelector((state) => state.weather);
  const unit = useTypedSelector((state) => state.weather.unit);
  const loading = weather.loading;

  useEffect(() => {
    dispatch(fetchWeatherBySearchRequest({ location: "Moscow", weatherUnit: unit }));
  }, [dispatch, unit]);

  if (!weather.currentWeather || loading) {
    return (
      <LocationTemperatureContainer>
        <LocationDescriptionContainer>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </LocationDescriptionContainer>
        <TemperatureIconContainer>
          <Skeleton />
        </TemperatureIconContainer>
      </LocationTemperatureContainer>
    );
  }

  const { temp_max, temp_min } = weather.currentWeather.main;
  const resultTempMax = Math.floor(temp_max);
  const resultTempMin = Math.floor(temp_min);
  const today = new Date();
  const formattedDate = format(today, "d MMM, EEEE");

  function WeatherIcon() {
    const iconUrl = `https://openweathermap.org/img/w/${weather.currentWeather.weather[0].icon}.png`;
    return <TemperatureIcon src={iconUrl} alt="Weather Icon" />;
  }

  return (
    <LocationTemperatureContainer>
      <LocationDescriptionContainer>
        <InfoDate>{formattedDate}</InfoDate>
        <City>{weather.currentWeather.name}</City>
        <Temperature>
          {resultTempMax}°/{resultTempMin}°
        </Temperature>
      </LocationDescriptionContainer>
      <TemperatureIconContainer>
        <WeatherIcon />
      </TemperatureIconContainer>
    </LocationTemperatureContainer>
  );
};

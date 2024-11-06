import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherBySearchRequest } from "../features/weatherSlice";
import { format } from "date-fns";
import {
  City,
  InfoDate,
  LocationDescriptionContainer,
  LocationTemperatureContainer,
  Temperature,
  TemperatureIconContainer,
} from "./ThisDayStyles";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Skeleton } from "../../skeleton/Skeleton";
import { useWeatherInfo } from "../../hooks/useWeatherIconInfo";
import { IconLoader } from "../IconLoader";

export const ThisDay = () => {
  const dispatch = useDispatch();
  const hourlyWeather = useTypedSelector((state) => state.weather.currentWeather?.hourly);
  const weather = useTypedSelector((state) => state.weather);
  const timezone = useTypedSelector((state) => state.weather.timezone);
  const unit = useTypedSelector((state) => state.weather.unit);
  const weatherCode = hourlyWeather ? hourlyWeather[0]?.weather_code : null;

  const cityName = useTypedSelector((state) => state.weather.cityName);

  const loading = weather.loading;

  const weatherInfo = useWeatherInfo(weatherCode || 0);

  useEffect(() => {
    dispatch(
      fetchWeatherBySearchRequest({
        name: cityName,
        location: { latitude: 55.7558, longitude: 37.6173 },
        weatherUnit: unit,
      }),
    );
  }, [dispatch]);

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

  const todayWeather = weather.currentWeather.daily[0];
  const resultTempMax = Math.floor(todayWeather.temp.max);
  const resultTempMin = Math.floor(todayWeather.temp.min);

  const today = new Date();
  const formattedDate = format(today, "d MMM, EEEE");

  return (
    <LocationTemperatureContainer>
      <LocationDescriptionContainer>
        <InfoDate>{formattedDate}</InfoDate>
        {/*<City>{city}</City>*/}
        <City>{cityName}</City>
        <Temperature>
          {resultTempMax}°/{resultTempMin}°
        </Temperature>
      </LocationDescriptionContainer>
      <TemperatureIconContainer>
        {weatherInfo ? <IconLoader src={weatherInfo.image} alt={weatherInfo.description} /> : null}
      </TemperatureIconContainer>
    </LocationTemperatureContainer>
  );
};

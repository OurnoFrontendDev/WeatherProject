import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherBySearch } from '../features/weatherSlice';
import { format } from 'date-fns';
import {
  City,
  InfoDate,
  LocationDescriptionContainer,
  LocationTemperatureContainer,
  Temperature,
  TemperatureIconContainer,
} from './day.styles';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Skeleton } from '../../skeleton/Skeleton';
import { useWeatherInfo } from '../../hooks/useWeatherIconInfo';
import { IconLoader } from '../IconLoader';

export const ThisDay = () => {
  const dispatch = useDispatch();
  const hourlyWeather = useTypedSelector((state) => state.weather.currentWeather?.hourly);
  const weather = useTypedSelector((state) => state.weather);
  const unit = useTypedSelector((state) => state.weather.unit);
  const cityName = useTypedSelector((state) => state.weather.cityName);

  const weatherCode =  hourlyWeather[0]?.weather_code;
  const weatherInfo = useWeatherInfo(weatherCode);
  const loading = weather.loading;
  const todayWeather = weather.currentWeather?.daily[0];
  const resultTempMax = Math.floor(todayWeather?.temp.max);
  const resultTempMin = Math.floor(todayWeather?.temp.min);
  const today = new Date();
  const formattedDate = format(today, 'd MMM, EEEE');

  useEffect(() => {
    dispatch(
      fetchWeatherBySearch({
        name: cityName,
        weatherUnit: unit,
      })
    );
  }, [dispatch]);

  if (loading) {
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

  return (
    <LocationTemperatureContainer>
      <LocationDescriptionContainer>
        <InfoDate>{formattedDate}</InfoDate>
        <City>{cityName}</City>
        <Temperature>
          {resultTempMax}°/{resultTempMin}°
        </Temperature>
      </LocationDescriptionContainer>
      <TemperatureIconContainer>
        {weatherInfo && <IconLoader src={weatherInfo.image} alt={weatherInfo.description} />}
      </TemperatureIconContainer>
    </LocationTemperatureContainer>
  );
};

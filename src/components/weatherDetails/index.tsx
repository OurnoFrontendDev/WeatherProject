import React from "react";
import SunsetIcon from "../../icons/sunset-icon.svg";
import SunriseIcon from "../../icons/sunrise-icon.svg";
import WindIcon from "../../icons/wind-icon.svg";
import FeelsLikeIcon from "../../icons/fluent_temperature-16-filled.svg";
import WaterDropIcon from "../../icons/material-symbols_water-drop.svg";
import UvIndexIcon from "../../icons/sun-icon.svg";
import { IconLoader } from "../IconLoader";
import { Skeleton } from "../../skeleton/Skeleton";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useGetIconSize } from "../../hooks/useGetIconSize";
import {
  CardLabel,
  CardValue,
  IconContainer,
  WeatherDetailsCardContainer,
  WeatherDetailsCardInfo,
  WeatherDetailsContainer,
  WeatherDetailsText,
  WeatherDetailsTextContainer,
  WeatherDetailsTitleItem,
  WeatherDetailsValueItem,
} from "./WeatherDetailsStyles";

export const WeatherDetails = () => {
  const weatherData = useTypedSelector((state) => state.weather);
  const loading = useTypedSelector((state) => state.weather.loading);
  const { iconWeatherDetailsSize } = useGetIconSize();

  const { currentWeather, forecasts } = weatherData;
  const { daily, hourly } = forecasts;

  const todaySunrise = daily[0]?.sunrise;
  const todaySunset = daily[0]?.sunset;
  const chanceOfRain = hourly[0]?.precipitation_probability || daily[0]?.precipitation_probability;
  const windSpeed = currentWeather?.current.wind_speed;
  const uvIndex = daily[0]?.uv_index;
  const feelsLike = hourly[0]?.apparent_temp;

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  };

  const skeletonStyle = <Skeleton />;

  const weatherDetails = [
    {
      id: "Sunrise",
      label: "Sunrise",
      value: loading ? skeletonStyle : todaySunrise ? formatTime(todaySunrise) : skeletonStyle,
      icon: SunriseIcon,
    },
    {
      id: "Sunset",
      label: "Sunset",
      value: loading ? skeletonStyle : todaySunset ? formatTime(todaySunset) : skeletonStyle,
      icon: SunsetIcon,
    },
    {
      id: "Chance Of Rain",
      label: "Chance Of Rain",
      value: loading
        ? skeletonStyle
        : chanceOfRain !== undefined
          ? `${chanceOfRain}%`
          : skeletonStyle,
      icon: WaterDropIcon,
    },
    {
      id: "Wind",
      label: "Wind",
      value: loading ? skeletonStyle : windSpeed !== undefined ? `${windSpeed} m/s` : skeletonStyle,
      icon: WindIcon,
    },
    {
      id: "UV Index",
      label: "UV Index",
      value: loading
        ? skeletonStyle
        : uvIndex !== undefined
          ? `${Math.floor(uvIndex)} of 10`
          : skeletonStyle,
      icon: UvIndexIcon,
    },
    {
      id: "Feels Like",
      label: "Feels Like",
      value: loading
        ? skeletonStyle
        : feelsLike !== undefined
          ? `${Math.floor(feelsLike)}°`
          : skeletonStyle,
      icon: FeelsLikeIcon,
    },
  ];

  return (
    <WeatherDetailsContainer>
      <WeatherDetailsTextContainer>
        <WeatherDetailsText>weather details</WeatherDetailsText>
      </WeatherDetailsTextContainer>
      <WeatherDetailsCardContainer>
        {weatherDetails.map(({ id, label, value, icon }) => (
          <WeatherDetailsCardInfo key={id}>
            <WeatherDetailsTitleItem>
              <CardLabel>{label}</CardLabel>
            </WeatherDetailsTitleItem>
            <WeatherDetailsValueItem>
              <CardValue>{value}</CardValue>
              <IconContainer>
                {loading?<Skeleton/>:<IconLoader
                  Svg={icon}
                  height={iconWeatherDetailsSize}
                  width={iconWeatherDetailsSize}
                />}
              </IconContainer>
            </WeatherDetailsValueItem>
          </WeatherDetailsCardInfo>
        ))}
      </WeatherDetailsCardContainer>
    </WeatherDetailsContainer>
  );
};

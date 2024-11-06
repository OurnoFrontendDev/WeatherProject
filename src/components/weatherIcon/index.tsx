import { useWeatherInfo } from "../../hooks/useWeatherIconInfo";
import { IconLoader } from "../IconLoader";
import { IconDescription } from "../weekForecast/weekForecastStyles";
import { useGetIconSize } from "../../hooks/useGetIconSize";
import React from "react";

type WeatherIconType = {
  iconCode: number[];
  withDescription?: boolean;
  context: "weatherDetails" | "forecast";
};

export const WeatherIcon: React.FC<WeatherIconType> = ({ iconCode, withDescription, context }) => {
  const { iconWeatherDetailsSize, iconForecastSize } = useGetIconSize();
  const iconValue = useWeatherInfo(iconCode);

  const iconSize = context === "weatherDetails" ? iconWeatherDetailsSize : iconForecastSize;

  return iconValue ? (
    <>
      {withDescription ? (
        <>
          <IconLoader
            src={iconValue.image}
            alt={iconValue.description}
            height={iconSize}
            width={iconSize}
          />
          <IconDescription>{iconValue.description}</IconDescription>
        </>
      ) : (
        <IconLoader
          src={iconValue.image}
          alt={iconValue.description}
          height={iconSize}
          width={iconSize}
        />
      )}
    </>
  ) : null;
};

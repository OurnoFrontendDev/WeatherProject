// import React from "react";
// import SunsetIcon from "../../icons/sunset-icon.svg";
// import SunriseIcon from "../../icons/sunrise-icon.svg";
// import WindIcon from "../../icons/wind-icon.svg";
// import FeelsLikeIcon from "../../icons/fluent_temperature-16-filled.svg";
// import WaterDropIcon from "../../icons/material-symbols_water-drop.svg";
// import UvIndexIcon from "../../icons/mingcute_sun-fill.svg";
// import { IconLoader } from "../IconLoader";
// import { Skeleton } from "../../skeleton/Skeleton";
// import { useTypedSelector } from "../../hooks/useTypedSelector";
// import { useGetIconSize } from "../../hooks/useGetIconSize";
// import {
//   CardLabel,
//   CardValue,
//   IconContainer,
//   WeatherDetailsCardContainer,
//   WeatherDetailsCardInfo,
//   WeatherDetailsContainer,
//   WeatherDetailsText,
//   WeatherDetailsTextContainer,
//   WeatherDetailsTitleItem,
//   WeatherDetailsValueItem,
// } from "./WeatherDetailsStyles";
// // import {
// //   CardLabel,
// //   CardValue,
// //   WeatherDetailsCardContainer,
// //   WeatherDetailsCardInfo,
// //   WeatherDetailsContainer,
// //   WeatherDetailsTitleItem,
// //   WeatherDetailsText,
// //   WeatherDetailsTextContainer,
// //   WeatherDetailsValueItem,
// //   IconContainer,
// // } from "./WeatherDetailsStyles";
// // import { useTypedSelector } from "../../hooks/useTypedSelector";
// // import { useGetIconSize } from "../../hooks/useGetIconSize";
// //
// // export const WeatherDetails = () => {
// //   const hourlyData = useTypedSelector((state) => state.weather || {});
// //
// //   const loading = hourlyData.loading;
// //
// //   const { iconWeatherSize } = useGetIconSize();
// //
// //   const formatTime = (timestamp: number): string => {
// //     const date = new Date(timestamp * 1000);
// //     let hours = date.getHours();
// //     const minutes = date.getMinutes();
// //     const ampm = hours >= 12 ? "PM" : "AM";
// //     hours = hours % 12 || 12;
// //     return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
// //   };
// //
// //   const { currentWeather, forecasts } = hourlyData || {};
// //   const { main, sys, wind } = currentWeather || {};
// //   const { sunrise, sunset } = sys || {};
// //   const skeletonStyle = <Skeleton />;
// //
// //   const humidity = main?.humidity;
// //   const feelsLikeTemperature = main?.feels_like;
// //   const uvIndex = forecasts?.hourly?.[0]?.uvi;
// //
// //   const weatherDetails = [
// //     {
// //       id: "Sunrise",
// //       label: "Sunrise",
// //       value: loading ? skeletonStyle : sunrise ? formatTime(sunrise) : skeletonStyle,
// //       icon: SunriseIcon,
// //     },
// //     {
// //       id: "Sunset",
// //       label: "Sunset",
// //       value: loading ? skeletonStyle : sunset ? formatTime(sunset) : skeletonStyle,
// //       icon: SunsetIcon,
// //     },
// //     {
// //       id: "Chance Of Rain",
// //       label: "Chance Of Rain",
// //       value: loading ? skeletonStyle : humidity !== undefined ? `${humidity}%` : skeletonStyle,
// //       icon: WaterDropIcon,
// //     },
// //     {
// //       id: "Wind",
// //       label: "Wind",
// //       value: loading
// //         ? skeletonStyle
// //         : wind?.speed !== undefined
// //           ? `${wind.speed} m/s`
// //           : skeletonStyle,
// //       icon: WindIcon,
// //     },
// //     {
// //       id: "UV Index",
// //       label: "UV Index",
// //       value: loading
// //         ? skeletonStyle
// //         : uvIndex !== undefined
// //           ? `${Math.floor(uvIndex)} of 10`
// //           : skeletonStyle,
// //       icon: UvIndexIcon,
// //     },
// //     {
// //       id: "Feels Like",
// //       label: "Feels Like",
// //       value: loading
// //         ? skeletonStyle
// //         : feelsLikeTemperature !== undefined
// //           ? `${Math.floor(feelsLikeTemperature)}°`
// //           : skeletonStyle,
// //       icon: FeelsLikeIcon,
// //     },
// //   ];
// //
// //   return (
// //     <WeatherDetailsContainer>
// //       <WeatherDetailsTextContainer>
// //         <WeatherDetailsText> weather details </WeatherDetailsText>
// //       </WeatherDetailsTextContainer>
// //       <WeatherDetailsCardContainer>
// //         {weatherDetails.map(({ id, label, value, icon }) => (
// //           <WeatherDetailsCardInfo key={id}>
// //             <WeatherDetailsTitleItem>
// //               <CardLabel>{label}</CardLabel>
// //             </WeatherDetailsTitleItem>
// //             <WeatherDetailsValueItem>
// //               <CardValue>{value}</CardValue>
// //               <IconContainer>
// //                 <IconLoader Svg={icon} height={iconWeatherSize} width={iconWeatherSize} />
// //               </IconContainer>
// //             </WeatherDetailsValueItem>
// //           </WeatherDetailsCardInfo>
// //         ))}
// //       </WeatherDetailsCardContainer>
// //     </WeatherDetailsContainer>
// //   );
// // };
//
// export const WeatherDetails = () => {
//   const weatherData = useTypedSelector((state) => state.weather.currentWeather || {});
//   console.log("weatherData", weatherData);
//
//   const loading = useTypedSelector((state) => state.weather.loading);
//
//   const { iconWeatherSize } = useGetIconSize();
//
//   const formatTime = (timestamp: number): string => {
//     const date = new Date(timestamp * 1000);
//     let hours = date.getHours();
//     const minutes = date.getMinutes();
//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
//   };
//
//   const { daily } = weatherData || {};
//   console.log("daily",daily);
//   const todayWeather = daily ? daily[0] : {};
//   const { sunrise, sunset, temp, humidity } = todayWeather || {};
//   const wind = weatherData.wind || {};
//   const feelsLikeTemperature = temp ? temp.feels_like : undefined; // Ensure temp is available
//
//   const uvIndex = weatherData.hourly ? weatherData.hourly[0]?.uvi : undefined; // Assuming hourly data exists in state
//
//   const skeletonStyle = <Skeleton />;
//
//   const weatherDetails = [
//     {
//       id: "Sunrise",
//       label: "Sunrise",
//       value: loading ? skeletonStyle : sunrise ? formatTime(sunrise) : skeletonStyle,
//       icon: SunriseIcon,
//     },
//     {
//       id: "Sunset",
//       label: "Sunset",
//       value: loading ? skeletonStyle : sunset ? formatTime(sunset) : skeletonStyle,
//       icon: SunsetIcon,
//     },
//     {
//       id: "Chance Of Rain",
//       label: "Chance Of Rain",
//       value: loading ? skeletonStyle : humidity !== undefined ? `${humidity}%` : skeletonStyle,
//       icon: WaterDropIcon,
//     },
//     {
//       id: "Wind",
//       label: "Wind",
//       value: loading
//         ? skeletonStyle
//         : wind.speed !== undefined
//           ? `${wind.speed} m/s`
//           : skeletonStyle,
//       icon: WindIcon,
//     },
//     {
//       id: "UV Index",
//       label: "UV Index",
//       value: loading
//         ? skeletonStyle
//         : uvIndex !== undefined
//           ? `${Math.floor(uvIndex)} of 10`
//           : skeletonStyle,
//       icon: UvIndexIcon,
//     },
//     {
//       id: "Feels Like",
//       label: "Feels Like",
//       value: loading
//         ? skeletonStyle
//         : feelsLikeTemperature !== undefined
//           ? `${Math.floor(feelsLikeTemperature)}°`
//           : skeletonStyle,
//       icon: FeelsLikeIcon,
//     },
//   ];
//
//   return (
//     <WeatherDetailsContainer>
//       <WeatherDetailsTextContainer>
//         <WeatherDetailsText>Weather Details</WeatherDetailsText>
//       </WeatherDetailsTextContainer>
//       <WeatherDetailsCardContainer>
//         {weatherDetails.map(({ id, label, value, icon }) => (
//           <WeatherDetailsCardInfo key={id}>
//             <WeatherDetailsTitleItem>
//               <CardLabel>{label}</CardLabel>
//             </WeatherDetailsTitleItem>
//             <WeatherDetailsValueItem>
//               <CardValue>{value}</CardValue>
//               <IconContainer>
//                 <IconLoader Svg={icon} height={iconWeatherSize} width={iconWeatherSize} />
//               </IconContainer>
//             </WeatherDetailsValueItem>
//           </WeatherDetailsCardInfo>
//         ))}
//       </WeatherDetailsCardContainer>
//     </WeatherDetailsContainer>
//   );
// };
import React from "react";
import SunsetIcon from "../../icons/sunset-icon.svg";
import SunriseIcon from "../../icons/sunrise-icon.svg";
import WindIcon from "../../icons/wind-icon.svg";
import FeelsLikeIcon from "../../icons/fluent_temperature-16-filled.svg";
import WaterDropIcon from "../../icons/material-symbols_water-drop.svg";
import UvIndexIcon from "../../icons/mingcute_sun-fill.svg";
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
  const weatherData = useTypedSelector((state) => state.weather.currentWeather || {});
  const loading = useTypedSelector((state) => state.weather.loading);
  const { iconWeatherSize } = useGetIconSize();

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  };

  const { daily } = weatherData || {};
  const todayWeather = daily ? daily[0] : {};
  const { sunrise, sunset, temp, humidity } = todayWeather || {};
  const wind = weatherData.wind || {};
  const feelsLikeTemperature = temp ? temp.feels_like : undefined;
  const uvIndex = weatherData.hourly ? weatherData.hourly[0]?.uvi : undefined;

  const skeletonStyle = <Skeleton />;

  const weatherDetails = [
    {
      id: "Sunrise",
      label: "Sunrise",
      value: loading ? skeletonStyle : sunrise ? formatTime(sunrise) : skeletonStyle,
      icon: SunriseIcon,
    },
    {
      id: "Sunset",
      label: "Sunset",
      value: loading ? skeletonStyle : sunset ? formatTime(sunset) : skeletonStyle,
      icon: SunsetIcon,
    },
    {
      id: "Chance Of Rain",
      label: "Chance Of Rain",
      value: loading ? skeletonStyle : humidity !== undefined ? `${humidity}%` : skeletonStyle,
      icon: WaterDropIcon,
    },
    {
      id: "Wind",
      label: "Wind",
      value: loading ? skeletonStyle : wind.speed !== undefined ? `${wind.speed} m/s` : skeletonStyle,
      icon: WindIcon,
    },
    {
      id: "UV Index",
      label: "UV Index",
      value: loading ? skeletonStyle : uvIndex !== undefined ? `${Math.floor(uvIndex)} of 10` : skeletonStyle,
      icon: UvIndexIcon,
    },
    {
      id: "Feels Like",
      label: "Feels Like",
      value: loading ? skeletonStyle : feelsLikeTemperature !== undefined ? `${Math.floor(feelsLikeTemperature)}°` : skeletonStyle,
      icon: FeelsLikeIcon,
    },
  ];

  return (
    <WeatherDetailsContainer>
      <WeatherDetailsTextContainer>
        <WeatherDetailsText>Weather Details</WeatherDetailsText>
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
                <IconLoader Svg={icon} height={iconWeatherSize} width={iconWeatherSize} />
              </IconContainer>
            </WeatherDetailsValueItem>
          </WeatherDetailsCardInfo>
        ))}
      </WeatherDetailsCardContainer>
    </WeatherDetailsContainer>
  );
};

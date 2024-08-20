import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";
import SunsetIcon from '../../icons/sunset-icon.svg'
import SunriseIcon from '../../icons/sunrise-icon.svg'
import WindIcon from '../../icons/wind-icon.svg'
import FeelsLikeIcon from '../../icons/fluent_temperature-16-filled.svg'
import WaterDropIcon from '../../icons/material-symbols_water-drop.svg'
import UvIndexIcon from '../../icons/mingcute_sun-fill.svg'
import {Icon} from "../svg/SvgLoader";
import {
    CardLabel, CardValue,
    LeftContainer, RightContainer,
    WeatherDetailsCardContainer, WeatherDetailsCardInfo,
    WeatherDetailsContainer,
    WeatherDetailsText,
    WeatherDetailsTextContainer
} from "./WeatherDetailsStyles";

export const WeatherDetails = () => {
    const hourlyData = useSelector((state: RootState) => state.weather || {});

    const formatTime = (timestamp: number): string => {
        const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    };

    const {currentWeather, forecasts} = hourlyData;
    const {main, sys, wind} = currentWeather || {};
    const {sunrise, sunset} = sys || {};
    const humidity = main?.humidity ?? 0;
    const feelsLikeTemperature = main?.feels_like ?? 0;
    const uvIndex = forecasts?.hourly?.[0]?.uvi ?? 0;

    const weatherDetails = [
        {label: 'Sunrise', value: sunrise ? formatTime(sunrise) : 'N/A', icon: SunriseIcon},
        {label: 'Sunset', value: sunset ? formatTime(sunset) : 'N/A', icon: SunsetIcon},
        {label: 'Chance Of Rain', value: `${humidity}%`, icon: WaterDropIcon},
        {label: 'Wind', value: wind?.speed || 'N/A', icon: WindIcon},
        {label: 'UV Index', value: `${Math.floor(uvIndex)} of 10`, icon: UvIndexIcon},
        {label: 'Feels Like', value: `${Math.floor(feelsLikeTemperature)}°`, icon: FeelsLikeIcon}
    ];

    return (
        <WeatherDetailsContainer>
            <WeatherDetailsTextContainer>
                <WeatherDetailsText>
                    WEATHER DETAILS
                </WeatherDetailsText>
            </WeatherDetailsTextContainer>
            <WeatherDetailsCardContainer>
                {weatherDetails.map(({label, value, icon}) => (
                    <WeatherDetailsCardInfo>
                        <LeftContainer>
                            <CardLabel>{label}</CardLabel>
                            <CardValue>{value}</CardValue>
                        </LeftContainer>
                        <RightContainer>
                            <Icon Svg={icon} height={24} width={24}/>
                        </RightContainer>
                    </WeatherDetailsCardInfo>
                ))}
            </WeatherDetailsCardContainer>
        </WeatherDetailsContainer>
    );
};

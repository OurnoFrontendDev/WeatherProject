import React, {useEffect, useState} from 'react';
import SunsetIcon from '../../icons/sunset-icon.svg'
import SunriseIcon from '../../icons/sunrise-icon.svg'
import WindIcon from '../../icons/wind-icon.svg'
import FeelsLikeIcon from '../../icons/fluent_temperature-16-filled.svg'
import WaterDropIcon from '../../icons/material-symbols_water-drop.svg'
import UvIndexIcon from '../../icons/mingcute_sun-fill.svg'
import {Icon} from "../svg/SvgLoader";
import {Skeleton} from "../../skeleton/Skeleton";
import {
    CardLabel, CardValue,
    LeftContainer, RightContainer,
    WeatherDetailsCardContainer, WeatherDetailsCardInfo,
    WeatherDetailsContainer,
    WeatherDetailsText,
    WeatherDetailsTextContainer
} from "./WeatherDetailsStyles";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const WeatherDetails = () => {
    const hourlyData = useTypedSelector((state) => state.weather || {});

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (hourlyData && Object.keys(hourlyData).length > 0) {
            setIsLoading(false);
        }
    }, [hourlyData]);

    const formatTime = (timestamp: number): string => {
        const date = new Date(timestamp * 1000);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    };

    const {currentWeather, forecasts} = hourlyData;
    const {main, sys, wind} = currentWeather || {};
    const {sunrise, sunset} = sys || {};
    const skeletonStyle = <Skeleton width={"150px"} height={"50px"} />;

    const humidity = main?.humidity;
    const feelsLikeTemperature = main?.feels_like;
    const uvIndex = forecasts?.hourly?.[0]?.uvi;

    const weatherDetails = [
        {
            label: 'Sunrise',
            value: sunrise ? formatTime(sunrise) : skeletonStyle,
            icon: SunriseIcon
        },
        {
            label: 'Sunset',
            value: sunset ? formatTime(sunset) : skeletonStyle,
            icon: SunsetIcon
        },
        {
            label: 'Chance Of Rain',
            value: humidity !== undefined ? `${humidity}%` : skeletonStyle,
            icon: WaterDropIcon
        },
        {
            label: 'Wind',
            value: wind?.speed !== undefined ? `${wind.speed} m/s` : skeletonStyle,
            icon: WindIcon
        },
        {
            label: 'UV Index',
            value: uvIndex !== undefined ? `${Math.floor(uvIndex)} of 10` : skeletonStyle,
            icon: UvIndexIcon
        },
        {
            label: 'Feels Like',
            value: feelsLikeTemperature !== undefined ? `${Math.floor(feelsLikeTemperature)}°` : skeletonStyle,
            icon: FeelsLikeIcon
        }
    ];

    useEffect(() => {
        if (hourlyData && Object.keys(hourlyData).length > 0) {
            setIsLoading(false);
        }
    }, [hourlyData]);

    useEffect(() => {
        if (weatherDetails.length > 0) {
            setIsLoading(false);
        }
    }, [weatherDetails]);
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

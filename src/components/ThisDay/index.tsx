import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchWeatherBySearchRequest} from '../features/weatherSlice';
import {format} from 'date-fns';
import {
    CardContainer,
    City,
    InfoDate,
    LocationDescriptionContainer,
    LocationTemperatureContainer, Temperature, TemperatureIcon
} from "./ThisDayStyles";

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Skeleton} from "../../skeleton/Skeleton";

export const ThisDay = () => {
    const dispatch = useDispatch();
    const weather = useTypedSelector((state) => state.weather);
    const unit = useTypedSelector((state) => state.weather.unit);

    useEffect(() => {
        dispatch(fetchWeatherBySearchRequest({location: "Moscow", weatherUnit: unit}));
    }, [dispatch, unit]);

    if (weather.loading) {
        return <Skeleton height="200px" width="250px"/>;
    }
    if (weather.loading) {
        return <Skeleton height="200px" width="250px"/>;
    }

    if (!weather.currentWeather) {
        return <Skeleton height="200px" width="250px"/>;
    }

    const {temp_max, temp_min} = weather.currentWeather.main;
    const resultTempMax = Math.floor(temp_max);
    const resultTempMin = Math.floor(temp_min);
    const today = new Date();
    const formattedDate = format(today, 'd MMM, EEEE');

    function WeatherIcon() {
        const iconUrl = `https://openweathermap.org/img/w/${weather.currentWeather.weather[0].icon}.png`;
        return (
            <img src={iconUrl} alt="Weather Icon"/>
        );
    }

    return (
        <LocationTemperatureContainer>
            <LocationDescriptionContainer>
                <CardContainer>
                    <InfoDate>{formattedDate}</InfoDate>
                    <City>{weather.currentWeather.name}</City>
                    <Temperature>
                        {resultTempMax}°/{resultTempMin}°
                    </Temperature>
                </CardContainer>
            </LocationDescriptionContainer>
            <TemperatureIcon>
                <WeatherIcon/>
            </TemperatureIcon>
        </LocationTemperatureContainer>
    );
};

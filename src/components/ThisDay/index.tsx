import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../state/store';
import {fetchWeatherBySearchRequest} from '../features/weatherSlice';
import {format} from 'date-fns';
import {
    CardContainer,
    City,
    InfoDate,
    LocationDescriptionElementContainer,
    LocationTemperatureContainer, Temperature, TemperatureIcon
} from "./ThisDayStyles";

export const ThisDay = () => {
    const dispatch = useDispatch<AppDispatch>();
    const weather = useSelector((state: RootState) => state.weather);
    const unit = useSelector((state: RootState) => state.weather.unit);

    useEffect(() => {
        dispatch(fetchWeatherBySearchRequest({location: "Moscow", weatherUnit: unit}));
    }, [dispatch, unit]);

    if (weather.loading) {
        return <p>Loading...</p>;
    }
    if (weather.error) {
        return <p>Error: {weather.error}</p>;
    }

    if (!weather.currentWeather) {
        return <p>No weather data available</p>;
    }

    const {temp_max, temp_min} = weather.currentWeather.main;
    const resultTempMax = Math.floor(temp_max);
    const resultTempMin = Math.floor(temp_min);
    const today = new Date();
    const formattedDate = format(today, 'd MMM, EEEE');

    function WeatherIcon() {
        const iconUrl = `https://openweathermap.org/img/w/${weather?.currentWeather?.weather[0].icon}.png`;
        return <img src={iconUrl} alt="Weather Icon"/>;
    }
    return (
        <LocationTemperatureContainer>
            <LocationDescriptionElementContainer>
                <CardContainer>
                    <InfoDate>{formattedDate}</InfoDate>
                    <City>{weather.currentWeather.name}</City>
                    <Temperature>
                        {resultTempMax}°/{resultTempMin}°
                    </Temperature>
                </CardContainer>
            </LocationDescriptionElementContainer>
            <TemperatureIcon>
                <WeatherIcon/>
            </TemperatureIcon>
        </LocationTemperatureContainer>
    );
};

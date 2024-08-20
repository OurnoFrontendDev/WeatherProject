import React from 'react';
import {ThisDay} from "../ThisDay";
import {WeatherDetails} from "../weatherDetails";
import {WeekForecast} from "../weekForecast";
import {Days} from "../Days";
import {
    ForeCastContainer,
    WeatherTownInfoContainer,
    WeatherUnionInfoContainer,
    WeekForecastContainer
} from "./WeatherUnionInfoStyles";

export const WeatherUnionInfo = () => {
    return (
        <WeatherUnionInfoContainer>
            <WeatherTownInfoContainer>
                <ThisDay></ThisDay>
                <ForeCastContainer>
                    <Days></Days>
                    <WeatherDetails></WeatherDetails>
                </ForeCastContainer>
            </WeatherTownInfoContainer>
            <WeekForecastContainer>
                <WeekForecast>
                </WeekForecast>
            </WeekForecastContainer>
        </WeatherUnionInfoContainer>
    )
};

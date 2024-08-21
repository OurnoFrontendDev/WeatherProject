import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {format} from "date-fns";
import {
    DaysForecastText, ForecastIcon, IconDescription,
    WeekForecastCardContent,
    WeekForecastCardDate,
    WeekForecastCardDatesContainer,
    WeekForecastCardDay, WeekForecastCardIconContainer, WeekForecastCardTemp,
    WeekForecastContentContainer,
    WeekForecastTextContainer,
    WeekForecastWrapper
} from './weekForecastStyles';

export const WeekForecast = () => {
    const dailyForecasts = useSelector((state: RootState) => state.weather.forecasts?.daily || []);

    const dailyForecastsDateTime = dailyForecasts.slice(1, 8).map(forecast => {
        const timestamp = forecast.dt * 1000;
        const dateObject = new Date(timestamp);
        const formattedDate = format(dateObject, 'd MMM, EEEE');
        return {
            formattedDate,
            tempMin: Math.floor(forecast.temp.min),
            tempMax: Math.floor(forecast.temp.max),
            description: forecast.weather[0]?.description,
            icon: forecast.weather[0]?.icon
        };
    });

    return (
        <WeekForecastWrapper>
            <WeekForecastTextContainer>
                <DaysForecastText>7 DAYS FORECAST</DaysForecastText>
            </WeekForecastTextContainer>
            <WeekForecastContentContainer>
                {dailyForecastsDateTime.map((forecast, index) => (
                    <WeekForecastCardContent key={index}>
                        <WeekForecastCardDatesContainer>
                            <WeekForecastCardDate>
                                {forecast.formattedDate.split(', ')[0]}
                            </WeekForecastCardDate>
                            <WeekForecastCardDay>
                                {forecast.formattedDate.split(', ')[1]}
                            </WeekForecastCardDay>
                        </WeekForecastCardDatesContainer>
                        <WeekForecastCardIconContainer>
                            <ForecastIcon
                                src={`https://openweathermap.org/img/wn/${forecast.icon}.png`}
                                alt={forecast.description}/>
                            <IconDescription>
                                {forecast.description}
                            </IconDescription>
                        </WeekForecastCardIconContainer>
                        <WeekForecastCardTemp>
                            <div>{forecast.tempMax}°/</div>
                            <div>{forecast.tempMin}°</div>
                        </WeekForecastCardTemp>
                    </WeekForecastCardContent>
                ))}
            </WeekForecastContentContainer>
        </WeekForecastWrapper>
    );
};
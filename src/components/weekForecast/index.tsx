import React from 'react';
import { format } from 'date-fns';
import {
  DaysForecastText,
  WeekForecastCardContent,
  WeekForecastCardDate,
  WeekForecastCardDatesContainer,
  WeekForecastCardDay,
  WeekForecastCardIconContainer,
  WeekForecastCardTemp,
  WeekForecastCardTempContainer,
  WeekForecastContentContainer,
  WeekForecastTextContainer,
  WeekForecastWrapper,
} from './weekForecast.styled';
import { Skeleton } from '../../skeleton/Skeleton';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectLoading, selectDailyForecasts } from '../../selectors/weatherSelectors';
import { WeatherIcon } from '../weatherIcon';

export const WeekForecast: React.FC = () => {
  const loading = useTypedSelector(selectLoading);
  const dailyForecasts = useTypedSelector(selectDailyForecasts);

  const dailyForecastsGateData = dailyForecasts.slice(0, 7).map((forecast) => {
    const timestamp = forecast.dt * 1000;
    const dateObject = new Date(timestamp);
    const formattedDate = format(dateObject, 'd MMM, EEEE');

    return {
      formattedDate,
      tempMin: Math.floor(forecast.temp.min),
      tempMax: Math.floor(forecast.temp.max),
      weatherCode: forecast.weather_code,
    };
  });

  return (
    <WeekForecastWrapper>
      <WeekForecastTextContainer>
        <DaysForecastText>7 days forecast</DaysForecastText>
      </WeekForecastTextContainer>
      <WeekForecastContentContainer>
        {loading
          ? Array.from({ length: 7 }, (_, index) => <Skeleton key={index} />)
          : dailyForecastsGateData.map((forecast, index) => (
            <WeekForecastCardContent key={index}>
              <WeekForecastCardDatesContainer>
                <WeekForecastCardDate>
                  {forecast.formattedDate.split(', ')[0]}
                </WeekForecastCardDate>
                <WeekForecastCardDay>{forecast.formattedDate.split(', ')[1]}</WeekForecastCardDay>
              </WeekForecastCardDatesContainer>
              <WeekForecastCardIconContainer>
                <WeatherIcon
                  iconCode={forecast.weatherCode}
                  withDescription={true}
                  context={'forecast'}
                />
              </WeekForecastCardIconContainer>
              <WeekForecastCardTempContainer>
                <WeekForecastCardTemp>{forecast.tempMax}° /</WeekForecastCardTemp>
                <WeekForecastCardTemp>{forecast.tempMin}°</WeekForecastCardTemp>
              </WeekForecastCardTempContainer>
            </WeekForecastCardContent>
          ))}
      </WeekForecastContentContainer>
    </WeekForecastWrapper>
  );
};

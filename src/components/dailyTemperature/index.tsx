import React, { useEffect, useState } from "react";
import {
  ArrowButton,
  DateTime,
  ForecastContainer,
  ForecastItemContainer,
  ForecastTextContainer,
  ForecastWrapper,
  ScrollArea,
  ScrollAreaContainer,
  TemperatureValue,
} from "./dailyTemperature.styled";
import { Skeleton } from "../../skeleton/Skeleton";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { WeatherIcon } from "../weatherIcon";
import {
  formatTime,
  getFilteredHourlyData,
} from "../../utils/date/fomatters/date";

const MAX_CARDS_CONTAINER_WIDTH  = 1100;
const MIN_CARDS_CONTAINER_WIDTH = 0;
const SCROLL_STEP = 100;

export const DailyTemperature: React.FC = () => {
  const dailyForecasts = useTypedSelector(
    (state) => state.weather.forecasts?.hourly || [],
  );
  const weather = useTypedSelector((state) => state.weather);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollStyle, setScrollStyle] = useState({
    transform: `translateX(-${scrollPosition}px)`,
  });

  const isRightArrowButtonDisabled = scrollPosition >= MAX_CARDS_CONTAINER_WIDTH ;
  const isLeftArrowButtonDisabled = scrollPosition <= MIN_CARDS_CONTAINER_WIDTH;
  const loading = weather.loading;

  useEffect(() => {
    setScrollStyle({ transform: `translateX(-${scrollPosition}px)` });
  }, [scrollPosition]);

  const filteredData = getFilteredHourlyData(dailyForecasts).sort((a, b) => a.dt - b.dt,);

  const handleForecastCardsScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setScrollPosition((prev) => Math.max(prev - SCROLL_STEP, 0));
    } else {
      setScrollPosition((prev) => Math.min(prev + SCROLL_STEP));
    }
  };

  const dailyWeatherItems = filteredData.map((hour, index) => (
    <ForecastItemContainer key={index}>
      <DateTime>{formatTime(hour.dt)}</DateTime>
      <WeatherIcon iconCode={hour.weather_code} context={"forecast"} />
      <TemperatureValue>
        {hour.temp ? `${Math.round(Number(hour.temp))}°` : "N/A"}
      </TemperatureValue>
    </ForecastItemContainer>
  ));

  const skeletonItems = Array.from({ length: 10 }, (_, index) => (
    <ForecastItemContainer key={index}>
      <Skeleton />
    </ForecastItemContainer>
  ));

  return (
    <ForecastWrapper>
      <ForecastTextContainer>today's forecast</ForecastTextContainer>
      <ForecastContainer>
        <ArrowButton
          direction="left"
          onClick={() => handleForecastCardsScroll("left")}
          disabled={isLeftArrowButtonDisabled}
        >
          ◀
        </ArrowButton>
        <ScrollAreaContainer>
          <ScrollArea style={scrollStyle}>
            {loading ? skeletonItems : dailyWeatherItems}
          </ScrollArea>
        </ScrollAreaContainer>
        <ArrowButton
          direction="right"
          onClick={() => handleForecastCardsScroll("right")}
          disabled={isRightArrowButtonDisabled}
        >
          ▶
        </ArrowButton>
      </ForecastContainer>
    </ForecastWrapper>
  );
};

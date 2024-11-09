import React, { useState } from "react";
import {
  ArrowButton,
  DateTimeStyle,
  ForecastContainer,
  ForecastItemContainer,
  ForecastTextContainer,
  ForecastWrapper,
  ScrollArea,
  ScrollAreaContainer,
  TempStyle,
} from "./DayStyledComponents";
import { Skeleton } from "../../skeleton/Skeleton";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { WeatherIcon } from "../weatherIcon";

const visibleAreaWidth = 100;
const scrollStep = 100;

export const Days: React.FC = () => {
  const dailyForecasts = useTypedSelector((state) => state.weather.forecasts?.hourly || []);
  const weather = useTypedSelector((state) => state.weather);

  const [scrollPosition, setScrollPosition] = useState(0);
  const loading = weather.loading;

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutesStr} ${ampm}`;
  };

  const getFilteredHourlyData = () => {
    const now = new Date();
    const startOfDay = new Date(now.setHours(1, 0, 0, 0)).getTime() / 1000;
    const endOfDay = new Date(now.setHours(23, 0, 0, 0)).getTime() / 1000;

    return dailyForecasts.filter((hour) => hour.dt >= startOfDay && hour.dt <= endOfDay);
  };

  const filteredData = getFilteredHourlyData();
  filteredData.sort((a, b) => a.dt - b.dt);
  const maxScroll = filteredData.length * 110 - visibleAreaWidth;

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setScrollPosition((prev) => Math.max(prev - scrollStep, 0));
    } else {
      setScrollPosition((prev) => Math.min(prev + scrollStep, maxScroll));
    }
  };

  const weatherMappingData = filteredData.map((hour, index) => (
    <ForecastItemContainer key={index}>
      <DateTimeStyle>{formatTime(hour.dt)}</DateTimeStyle>
      <WeatherIcon iconCode={hour.weather_code} context={"forecast"} />
      <TempStyle>{hour.temp ? `${Math.round(Number(hour.temp))}°` : "N/A"}</TempStyle>
    </ForecastItemContainer>
  ));

  const skeletonItems = Array.from({ length: 10 }, (_, index) => (
    <ForecastItemContainer key={index}>
      <Skeleton height={"20px"} width={"60px"} />
      <Skeleton height={"20px"} width={"60px"} />
      <Skeleton height={"20px"} width={"60px"} />
    </ForecastItemContainer>
  ));

  const isRightArrowDisabled = scrollPosition >= maxScroll;
  const isLeftArrowDisabled = scrollPosition <= 0;

  return (
    <ForecastWrapper>
      <ForecastTextContainer>today's forecast</ForecastTextContainer>
      <ForecastContainer>
        <ArrowButton
          direction="left"
          onClick={() => handleScroll("left")}
          disabled={isLeftArrowDisabled}
        >
          ◀
        </ArrowButton>
        <ScrollAreaContainer>
          <ScrollArea style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {loading ? skeletonItems : weatherMappingData}
          </ScrollArea>
        </ScrollAreaContainer>
        <ArrowButton
          direction="right"
          onClick={() => handleScroll("right")}
          disabled={isRightArrowDisabled}
        >
          ▶
        </ArrowButton>
      </ForecastContainer>
    </ForecastWrapper>
  );
};

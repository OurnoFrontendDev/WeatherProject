import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {
    ArrowButton,
    ForecastContainer,
    ForecastItemContainer,
    ForecastTextContainer,
    ForecastWrapper, ScrollArea
} from "./Day'sStyledCompmonents";

export const Days: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const dailyForecasts = useSelector((state: RootState) => state.weather.forecasts?.hourly || []);

    const formatTime = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
        return `${hours}:${minutesStr} ${ampm}`;
    };


    const getFilteredHourlyData = () => {
        const now = new Date();
        const startOfDay = new Date(now.setHours(1, 0, 0, 0)).getTime() / 1000;
        const endOfDay = new Date(now.setHours(23, 0, 0, 0)).getTime() / 1000;

        return dailyForecasts.filter(hour => hour.dt >= startOfDay && hour.dt <= endOfDay);
    };

    const filteredData = getFilteredHourlyData();
    filteredData.sort((a, b) => a.dt - b.dt);
    const maxScroll = (filteredData.length * 110) - 400;

    const scrollStep = 100;

    const handleScroll = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            setScrollPosition(prev => Math.max(prev - scrollStep, 0));
        } else {
            setScrollPosition(prev => Math.min(prev + scrollStep, maxScroll));
        }
    };

    const WeatherIcon: React.FC<{ iconCode: string }> = ({ iconCode }) => {
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
        return <img src={iconUrl} alt="Weather Icon" />;
    };

    const arrMap = filteredData.map((hour, index) => (
        <ForecastItemContainer key={index}>
            <div>{formatTime(hour.dt)}</div>
            <WeatherIcon iconCode={hour.weather[0].icon} />
            <div>{hour.temp.day}°</div>
        </ForecastItemContainer>
    ));

    const isRightArrowDisabled = scrollPosition >= maxScroll;
    const isLeftArrowDisabled = scrollPosition <= 0;

    return (
        <ForecastWrapper>
            <ForecastTextContainer>TODAY’S FORECAST</ForecastTextContainer>
            <ForecastContainer>
                <ArrowButton
                    direction="left"
                    onClick={() => handleScroll('left')}
                    disabled={isLeftArrowDisabled}
                >
                    ◀
                </ArrowButton>
                <ScrollArea style={{ transform: `translateX(-${scrollPosition}px)` }}>
                    {arrMap}
                </ScrollArea>
                <ArrowButton
                    direction="right"
                    onClick={() => handleScroll('right')}
                    disabled={isRightArrowDisabled}
                >
                    ▶
                </ArrowButton>
            </ForecastContainer>
        </ForecastWrapper>
    );
};
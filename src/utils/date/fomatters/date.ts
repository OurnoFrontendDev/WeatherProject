import { useMemo } from "react";
import { hourlyType } from "../../../types/weather";

export const getFilteredHourlyData = (dailyForecasts: hourlyType[]) => {
  const now = new Date();
  const startOfDay = new Date(now.setHours(1, 0, 0, 0)).getTime() / 1000;
  const endOfDay = new Date(now.setHours(23, 0, 0, 0)).getTime() / 1000;

  return useMemo(
    () => dailyForecasts.filter((hour: hourlyType) => hour.dt >= startOfDay && hour.dt <= endOfDay),
    [dailyForecasts],
  );
};

export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return  `${hours}:${minutesStr} ${ampm}`;
};

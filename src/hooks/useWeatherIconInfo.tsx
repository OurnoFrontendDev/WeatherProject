import { useState, useEffect } from "react";

const weatherCodes = [
  { code: 0, description: "Clear sky", image: "http://openweathermap.org/img/wn/01d@2x.png" },
  { code: 1, description: "Mainly clear", image: "http://openweathermap.org/img/wn/01d@2x.png" },
  { code: 2, description: "Partly cloudy", image: "http://openweathermap.org/img/wn/02d@2x.png" },
  { code: 3, description: "Overcast", image: "http://openweathermap.org/img/wn/03n@2x.png" },
  { code: 45, description: "Fog", image: "http://openweathermap.org/img/wn/50d@2x.png" },
  { code: 48, description: "Depositing rime fog", image: "http://openweathermap.org/img/wn/50d@2x.png" },
  { code: 51, description: "Light drizzle", image: "http://openweathermap.org/img/wn/09d@2x.png" },
  { code: 53, description: "Moderate drizzle", image: "http://openweathermap.org/img/wn/09d@2x.png" },
  { code: 55, description: "Dense drizzle", image: "http://openweathermap.org/img/wn/09d@2x.png" },
  { code: 56, description: "Light freezing drizzle", image: "http://openweathermap.org/img/wn/09d@2x.png" },
  { code: 57, description: "Dense freezing drizzle", image: "http://openweathermap.org/img/wn/09d@2x.png" },
  { code: 61, description: "Slight rain", image: "http://openweathermap.org/img/wn/10d@2x.png" },
  { code: 63, description: "Moderate rain", image: "http://openweathermap.org/img/wn/10d@2x.png" },
  { code: 65, description: "Heavy rain", image: "http://openweathermap.org/img/wn/10d@2x.png" },
  { code: 66, description: "Light freezing rain", image: "http://openweathermap.org/img/wn/10d@2x.png" },
  { code: 67, description: "Heavy freezing rain", image: "http://openweathermap.org/img/wn/10d@2x.png" },
  { code: 71, description: "Slight snowfall", image: "http://openweathermap.org/img/wn/13d@2x.png" },
  { code: 73, description: "Moderate snowfall", image: "http://openweathermap.org/img/wn/13d@2x.png" },
  { code: 75, description: "Heavy snowfall", image: "http://openweathermap.org/img/wn/13d@2x.png" },
  { code: 77, description: "Snow grains", image: "http://openweathermap.org/img/wn/13d@2x.png" },
  { code: 80, description: "Slight rain showers", image: "http://openweathermap.org/img/wn/09d@2x.png" },
  { code: 81, description: "Moderate rain showers", image: "http://openweathermap.org/img/wn/09d@2x.png" },
  { code: 82, description: "Violent rain showers", image: "http://openweathermap.org/img/wn/09d@2x.png" },
  { code: 85, description: "Slight snow showers", image: "http://openweathermap.org/img/wn/13d@2x.png" },
  { code: 86, description: "Heavy snow showers", image: "http://openweathermap.org/img/wn/13d@2x.png" },
  { code: 95, description: "Slight or moderate thunderstorm", image: "path/to/slight_thunderstorm.png", },
  { code: 96, description: "Thunderstorm with slight hail", image: "path/to/thunderstorm_with_slight_hail.png", },
  { code: 99, description: "Thunderstorm with heavy hail", image: "path/to/thunderstorm_with_heavy_hail.png", },
];



interface WeatherInfo {
  description: string;
  image: string;
}

export function useWeatherInfo(code: number): WeatherInfo | null {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  useEffect(() => {
    const weather = weatherCodes.find((w) => w.code === code);
    if (weather) {
      setWeatherInfo({ description: weather.description, image: weather.image });
    } else {
      setWeatherInfo(null);
    }
  }, [code]);

  return weatherInfo;
}

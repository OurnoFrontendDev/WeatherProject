export enum TemperatureUnit {
  celsius = 'celsius',
  fahrenheit = 'fahrenheit',
}

export type TownSearch = {
  name: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  weatherUnit?: TemperatureUnit;
  location?: { latitude: number; longitude: number };
  suggestions?: string;
};

export type hourlyType = {
  dt: number;
  temp: number;
  apparent_temp: number;
  precipitation_probability: number;
  wind_speed: number;
  weather_code: number;
};

export type dailyType = {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  sunrise: number;
  sunset: number;
  uv_index: number;
  precipitation_probability: number;
  weather_code: number;
};

export interface WeatherResponseType {
  hourly: hourlyType[];
  daily: dailyType[];
  timezone: string;
  cityName: string;
}

export type WeatherState = {
  loading: boolean;
  error: string | null;
  currentWeather: WeatherResponseType;
  forecasts: {
    hourly: hourlyType[];
    daily: dailyType[];
  };
  suggestions: TownSearch[],
  loadingSuggestions: boolean
  unit: TemperatureUnit;
  timezone: string;
  cityName: string;
};

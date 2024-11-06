export enum TemperatureUnit {
  celsius = "celsius",
  fahrenheit = "fahrenheit",
}

export type hourlyType = {
  dt: number;
  temp: number;
  apparent_temp: number;
  precipitation_probability: number;
  wind_speed: number;
  weather_code: number;
}[];
export type dailyType = {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  sunrise:number
  sunset:number
  uv_index:number
  precipitation_probability: number;
  weather_code: number;
}[];

export type CityResult = {
  admin1: string;
  admin1_id: number;
  country: string;
  country_code: string;
  country_id: number;
  elevation: number;
  feature_code: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  timezone: string;
};

export type cityResponseType = {
  results: CityResult[];
};
export type transformedDataType={

}
export interface WeatherResponseType {
  timezone: string;
  cityName: string;
  cord: {
    latitude: number;
    longitude: number;
  };
  current: {
    temp: number;
    temperature_2m: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    wind_speed: number;
    wind_deg: number;
  };
  hourly:{
    time: string[];
    apparent_temperature: number[];
    precipitation_probability: number[];
    temperature_2m: number[];
    wind_speed_10m: number[];
    weather_code: number[];
  };
  daily: dailyType;
}

export type WeatherState = {
  loading: boolean;
  error: string | null;
  currentWeather: any;
  forecasts: {
    hourly: hourlyType[];
    daily: dailyType[];
  };
  unit: TemperatureUnit;
  timezone: string;
  cityName: string;
};



export type Temperature = {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export type Forecast = {
    dt: number;
    temp: Temperature;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
}

export type WeatherResponse = {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        message: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
    hourly?: Forecast[];
    daily?: Forecast[];
}

export type WeatherState = {
    loading: boolean;
    error: string | null;
    currentWeather: any;
    forecasts: {
        hourly: Forecast[];
        daily: Forecast[];
    };
    unit: 'metric' | 'imperial';
}
export const initialState: WeatherState = {
    loading: false,
    error: null,
    currentWeather: null,
    forecasts: {
        hourly: [],
        daily: [],
    },
    unit: 'metric'
};

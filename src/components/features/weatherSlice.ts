import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TemperatureUnit, WeatherResponseType, WeatherState,
} from "../../types/weather";

export const initialState:WeatherState = {
  loading: false,
  error: "",
  currentWeather: null,
  forecasts: {
    hourly: [],
    daily: [],
  },
  unit: TemperatureUnit.celsius,
  timezone: "",
  cityName: "Moscow",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeatherBySearchRequest: (state, action: PayloadAction) => {
      state.loading = true;
      state.error = "";
    },
    fetchWeatherBySearchSuccess: (state, action: PayloadAction<WeatherResponseType>) => {
      state.loading = false;
      state.currentWeather = action.payload;
      state.forecasts = {
        hourly: action.payload.hourly,
        daily: action.payload.daily ,
      };
      state.timezone = action.payload.timezone;
      state.cityName = action.payload.cityName;
    },
    fetchWeatherFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setTemperatureUnit: (state, action: PayloadAction<TemperatureUnit>) => {
      state.unit = action.payload;
    },
  },
});

export const WeatherReducer = weatherSlice.reducer;
export const {
  fetchWeatherBySearchRequest,
  fetchWeatherBySearchSuccess,
  fetchWeatherFailure,
  setTemperatureUnit,
} = weatherSlice.actions;

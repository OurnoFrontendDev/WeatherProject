import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TemperatureUnit,
  TownSearch,
  WeatherResponseType,
  WeatherState,
} from '../../types/weather';

export const initialState: WeatherState = {
  loading: false,
  error: "",
  currentWeather: {
    hourly:[],
    daily: [],
    timezone: "auto",
    cityName: "",
  },
  forecasts: {
    hourly: [],
    daily: [],
  },
  suggestions: [],
  loadingSuggestions: false,
  unit: TemperatureUnit.celsius,
  timezone: "",
  cityName: "Moscow",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeatherBySearch: (state, action: PayloadAction<TownSearch>) => {
      state.loading = true;
      state.error = "";
      state.cityName = action.payload.name;
      state.unit = action.payload.weatherUnit ?? TemperatureUnit.celsius;
    },
    fetchWeatherBySearchSuccess: (
      state,
      action: PayloadAction<WeatherResponseType>,
    ) => {
      state.loading = false;
      state.currentWeather = action.payload;
      state.forecasts = {
        hourly: action.payload.hourly,
        daily: action.payload.daily,
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
    fetchSuggestions: (state,action: PayloadAction<string>) => {
      state.loadingSuggestions = true;
      state.error = action.payload;
      state.suggestions = [];
    },
    fetchSuggestionsSuccess: (state, action: PayloadAction<TownSearch[]>) => {
      state.suggestions = action.payload;
      state.loadingSuggestions = false;
    },
    fetchSuggestionsFailure: (state, action: PayloadAction<string>) => {
      state.suggestions = [];
      state.loadingSuggestions = false;
      state.error = action.payload;
    },
  },
});

export const WeatherReducer = weatherSlice.reducer;
export const {
  fetchWeatherBySearch,
  fetchWeatherBySearchSuccess,
  fetchWeatherFailure,
  setTemperatureUnit,
  fetchSuggestions,
  fetchSuggestionsSuccess,
  fetchSuggestionsFailure,
} = weatherSlice.actions;

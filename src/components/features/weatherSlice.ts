import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialState, WeatherResponse} from "../../types/stateType";

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fetchWeatherBySearchRequest: (
            state,
            action: PayloadAction<{ location: string; weatherUnit: 'metric' | 'imperial'; }>
        ) => {
            state.loading = true;
            state.error = null;
        },
        fetchWeatherBySearchSuccess: (state, action: PayloadAction<WeatherResponse>) => {
            state.loading = false;
            state.currentWeather = action.payload;
            state.forecasts = {
                hourly: action.payload.hourly || [],
                daily: action.payload.daily || [],
            };
        },
        fetchWeatherFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        setTemperatureUnit: (state, action: PayloadAction<'metric' | 'imperial'>) => {
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
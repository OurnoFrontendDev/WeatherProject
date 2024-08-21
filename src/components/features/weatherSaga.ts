import {call, put, takeLatest, select} from 'redux-saga/effects';
import axios, {all, AxiosResponse} from 'axios';
import {
    fetchWeatherBySearchRequest,
    fetchWeatherBySearchSuccess,
    fetchWeatherFailure, setTemperatureUnit,
} from './weatherSlice';
import {RootState} from "../../state/store";
import {WeatherResponse} from "../../types/stateType";

export const API_KEY = 'fe4feefa8543e06d4f3c66d92c61b69c';
export const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function* fetchWeatherData(action: ReturnType<typeof fetchWeatherBySearchRequest>) {
    try {
        const {location, weatherUnit} = action.payload;
        const currentWeatherResponse: AxiosResponse<WeatherResponse> = yield call(
            axios.get,
            `${BASE_URL}/weather`,
            {
                params: {
                    q: location,
                    units: weatherUnit,
                    appid: API_KEY,
                },
            }
        );
        const {lat, lon} = currentWeatherResponse.data.coord;
        const forecastResponse: AxiosResponse<WeatherResponse> = yield call(
            axios.get,
            `${BASE_URL}/onecall`,
            {
                params: {
                    lat,
                    lon,
                    units: weatherUnit,
                    appid: API_KEY,
                },
            }
        );
        const combinedData = {
            ...currentWeatherResponse.data,
            daily: forecastResponse.data.daily,
            hourly: forecastResponse.data.hourly
        };
        yield put(fetchWeatherBySearchSuccess(combinedData));
    } catch (error: any) {
        console.error('Error fetching weather data:', error);
        yield put(fetchWeatherFailure(error.message || 'Error fetching weather data'));
    }
}

export function* watchFetchWeather() {
    yield takeLatest(fetchWeatherBySearchRequest.type, fetchWeatherData);
}

function* handleTemperatureUnitChange() {
    const location: string  = yield select(
        (state: RootState) => state.weather.currentWeather?.name
    );
    const weatherUnit: 'metric' | 'imperial' = yield select(
        (state: RootState) => state.weather.unit
    );

    if (location) {
        yield put(fetchWeatherBySearchRequest({location, weatherUnit}));
    }
}

export function* watchTemperatureUnitChange() {
    yield takeLatest(setTemperatureUnit.type, handleTemperatureUnitChange);
}

export default function* rootSaga() {
    yield all([
        watchFetchWeather(),
        watchTemperatureUnitChange(),
    ]);
}
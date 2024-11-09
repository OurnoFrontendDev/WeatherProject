import { call, put, takeLatest, select } from "redux-saga/effects";
import axios, { all, AxiosResponse } from "axios";
import {
  fetchWeatherBySearchRequest,
  fetchWeatherBySearchSuccess,
  fetchWeatherFailure,
  setTemperatureUnit,
} from "./weatherSlice";
import { RootState } from "../../state/store";
import { cityResponseType, TemperatureUnit, WeatherResponseType } from "../../types/weather";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL_SEARCH_TOWN = process.env.REACT_APP_SEARCH_TOWN_URL;

function* fetchWeatherData(action: ReturnType<typeof fetchWeatherBySearchRequest>) {
  try {
    const { name, weatherUnit } = action.payload;

    const cityResponse: AxiosResponse<cityResponseType> = yield call(
      axios.get,
      `${BASE_URL_SEARCH_TOWN}`,
      {
        params: {
          name,
          count: 1,
          language: "en",
          format: "json",
        },
      },
    );
    const { latitude, longitude } = cityResponse.data.results[0];

    const weatherResponse: AxiosResponse<WeatherResponseType> = yield call(
      axios.get,
      `${BASE_URL}`,
      {
        params: {
          latitude,
          longitude,
          current: "temperature_2m,weather_code,wind_speed_10m,wind_direction_10m",
          hourly:
            "temperature_2m,precipitation_probability,wind_speed_10m,apparent_temperature,weather_code",
          daily:
            "sunrise,sunset,precipitation_probability_max,uv_index_max,temperature_2m_max,temperature_2m_min,weather_code",
          timezone: "auto",
          temperature_unit:
            weatherUnit === TemperatureUnit.fahrenheit
              ? TemperatureUnit.fahrenheit
              : TemperatureUnit.celsius,
          forecast_days: 7,
        },
      },
    );

    const transformedData = {
      timezone: weatherResponse.data.timezone,
      cityName: name,
      cord: {
        latitude: latitude,
        longitude: longitude,
      },
      current: {
        temp: weatherResponse.data.current.temperature_2m,
        wind_speed: weatherResponse.data.current.wind_speed_10m,
        wind_deg: weatherResponse.data.current.wind_direction_10m,
        temperature_2m: 0,
        wind_speed_10m: 0,
        wind_direction_10m: 0,
      },
      hourly: weatherResponse.data.hourly.time.map((time: string, index: number) => ({
        dt: new Date(time).getTime() / 1000,
        temp: weatherResponse.data.hourly.temperature_2m[index],
        apparent_temp: weatherResponse.data.hourly.apparent_temperature[index],
        precipitation_probability: weatherResponse.data.hourly.precipitation_probability[index],
        wind_speed: weatherResponse.data.hourly.wind_speed_10m[index],
        weather_code: weatherResponse.data.hourly.weather_code[index],
      })),
      daily: weatherResponse.data.daily.time?.map((time: string, index: number) => ({
        dt: new Date(time).getTime() / 1000,
        temp: {
          max: weatherResponse.data.daily.temperature_2m_max[index],
          min: weatherResponse.data.daily.temperature_2m_min[index],
        },
        sunrise: new Date(weatherResponse.data.daily.sunrise[index]).getTime() / 1000,
        sunset: new Date(weatherResponse.data.daily.sunset[index]).getTime() / 1000,
        uv_index: weatherResponse.data.daily.uv_index_max[index],
        precipitation_probability: weatherResponse.data.daily.precipitation_probability_max[index],
        weather_code: weatherResponse.data.daily.weather_code[index],
      })),
    };
    yield put(fetchWeatherBySearchSuccess(transformedData));
  } catch (error: any) {
    console.error("Error fetching weather data:", error);
    yield put(fetchWeatherFailure(error.message || "Error fetching weather data"));
  }
}

export function* watchFetchWeather() {
  yield takeLatest(fetchWeatherBySearchRequest.type, fetchWeatherData);
}

function* handleTemperatureUnitChange() {
  const { cityName, cord } = yield select((state: RootState) => state.weather.currentWeather || {});
  const weatherUnit: TemperatureUnit = yield select((state: RootState) => state.weather.unit);

  if (cord && cityName) {
    yield put(fetchWeatherBySearchRequest({ name: cityName, weatherUnit }));
  } else {
    console.error("Location data not available for weather fetch");
  }
}

export function* watchTemperatureUnitChange() {
  yield takeLatest(setTemperatureUnit.type, handleTemperatureUnitChange);
}

export function* rootSaga() {
  yield all([
    takeLatest(setTemperatureUnit.type, handleTemperatureUnitChange),
    takeLatest(fetchWeatherBySearchRequest.type, fetchWeatherData),
  ]);
}

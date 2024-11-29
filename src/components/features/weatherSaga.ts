import { all, call, put, takeLatest, select } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  fetchSuggestions,
  fetchSuggestionsFailure,
  fetchSuggestionsSuccess,
  fetchWeatherBySearch,
  fetchWeatherBySearchSuccess,
  fetchWeatherFailure,
  setTemperatureUnit,
} from "./weatherSlice";
import { RootState } from "../../state/store";
import { TemperatureUnit, TownSearch } from "../../types/weather";
import { queryParams } from "../../shared/constants/queryParams/querryParams";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL_SEARCH_TOWN = process.env.REACT_APP_SEARCH_TOWN_URL;

function* fetchWeatherData(action: { payload: TownSearch }) {
  try {
    const { name, weatherUnit } = action.payload;

    const cityResponse: AxiosResponse = yield call(
      axios.get,
      `${BASE_URL_SEARCH_TOWN}`,
      {
        params: {
          name,
          ...queryParams.searchTown,
        },
      },
    );

    const { latitude, longitude } = cityResponse.data.results[0];

    const weatherResponse: AxiosResponse = yield call(
      axios.get,
      `${BASE_URL}`,
      {
        params: {
          latitude,
          longitude,
          ...queryParams.weatherData,
          temperature_unit:
            weatherUnit === TemperatureUnit.fahrenheit
              ? TemperatureUnit.fahrenheit
              : TemperatureUnit.celsius,
          timezone: "auto",
        },
      },
    );

    const processedWeather = {
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
      hourly: weatherResponse.data.hourly.time.map(
        (time: string, index: number) => ({
          dt: new Date(time).getTime() / 1000,
          temp: weatherResponse.data.hourly.temperature_2m[index],
          apparent_temp:
            weatherResponse.data.hourly.apparent_temperature[index],
          precipitation_probability:
            weatherResponse.data.hourly.precipitation_probability[index],
          wind_speed: weatherResponse.data.hourly.wind_speed_10m[index],
          weather_code: weatherResponse.data.hourly.weather_code[index],
        }),
      ),
      daily: weatherResponse.data.daily.time?.map(
        (time: string, index: number) => ({
          dt: new Date(time).getTime() / 1000,
          temp: {
            max: weatherResponse.data.daily.temperature_2m_max[index],
            min: weatherResponse.data.daily.temperature_2m_min[index],
          },
          sunrise:
            new Date(weatherResponse.data.daily.sunrise[index]).getTime() /
            1000,
          sunset:
            new Date(weatherResponse.data.daily.sunset[index]).getTime() / 1000,
          uv_index: weatherResponse.data.daily.uv_index_max[index],
          precipitation_probability:
            weatherResponse.data.daily.precipitation_probability_max[index],
          weather_code: weatherResponse.data.daily.weather_code[index],
        }),
      ),
    };
    yield put(fetchWeatherBySearchSuccess(processedWeather));
  } catch (error: any) {
    console.error("Error fetching weather data:", error);
    yield put(
      fetchWeatherFailure(error.message || "Error fetching weather data"),
    );
  }
}

export function* watchFetchWeather() {
  yield takeLatest(fetchWeatherBySearch, fetchWeatherData);
}

function* handleTemperatureUnitWorker() {
  const { cityName } = yield select(
    (state: RootState) => state.weather.currentWeather || {},
  );
  const weatherUnit: TemperatureUnit = yield select(
    (state: RootState) => state.weather.unit,
  );

  yield put(fetchWeatherBySearch({ name: cityName, weatherUnit }));
}

export function* watchTemperatureUnitWatcher() {
  yield takeLatest(setTemperatureUnit.type, handleTemperatureUnitWorker);
}

function* fetchSuggestionsWorker(action: { payload: string }) {
  try {
    const query = action.payload;

    const response: AxiosResponse = yield call(
      axios.get,
      `${BASE_URL_SEARCH_TOWN}`,
      {
        params: {
          name: query,
          ...queryParams.searchTown,
        },
      },
    );
    const suggestions = response.data.results || [];
    yield put(fetchSuggestionsSuccess(suggestions));
  } catch (error: any) {
    yield put(
      fetchSuggestionsFailure(error.message || "Error fetching suggestions"),
    );
  }
}

export function* watchFetchSuggestions() {
  yield takeLatest(fetchSuggestions, fetchSuggestionsWorker);
}

export function* rootSaga() {
  yield all([
    watchFetchWeather(),
    watchTemperatureUnitWatcher(),
    watchFetchSuggestions(),
  ]);
}
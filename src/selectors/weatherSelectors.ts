import { createSelector } from "reselect";
import { RootState } from "../state/store";

const selectWeatherState = (state: RootState) => state.weather;

export const selectLoading = createSelector([selectWeatherState], (weather) => weather.loading);

export const selectDailyForecasts = createSelector(
  [selectWeatherState],
  (weather) => weather.forecasts.daily || [],
);

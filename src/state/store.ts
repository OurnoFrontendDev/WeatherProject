import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { WeatherReducer } from "../components/features/weatherSlice";
import { rootSaga } from '../components/features/weatherSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  weather: WeatherReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
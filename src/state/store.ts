import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {WeatherReducer} from '../components/features/weatherSlice';
import {watchFetchWeather} from '../components/features/weatherSaga';
import {ThemeReducer} from "../components/features/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    weather: WeatherReducer,
    theme: ThemeReducer,
});
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchWeather);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

import {ForecastWrapper} from "./components/Days/Day'sStyledCompmonents";

export interface Theme {
    color: string;
    toggleBorder: string;
    background: string | boolean;
    backgroundForecast?:string
    backgroundWeatherDetails?:string
}

export const lightTheme :Theme = {
    color: '#000',
    toggleBorder: '#FFF',
    background: '#F5F5F5',
    backgroundForecast:"#E8EAF6",
    backgroundWeatherDetails:'#FFFFFF'
};

export const darkTheme :Theme = {
    color: '#F5F5F5',
    toggleBorder: '#6B8096',
    background: '#0a0a0a',
};
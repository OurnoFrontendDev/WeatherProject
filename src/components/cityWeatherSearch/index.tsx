import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherBySearchRequest} from "../features/weatherSlice";
import styled from 'styled-components';
import {fonts} from "../../fonts/fontStyles";


const InputSearchBar = styled.input.attrs({

    placeholder: "Search for cities",
})`
    &::placeholder {
        padding-left: 6px;
        padding-top: 20px;
        letter-spacing: 0.15px;
        font-family: ${fonts.Body};
    }

    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #E8EAF6;
    border: none;
    outline: none;
    padding-left: 30px;
`

export const SearchCityWeather = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const weather = useSelector((state: any) => state.weather);

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (city.trim() !== '' && e.key === "Enter") {
            dispatch(fetchWeatherBySearchRequest({location: city, weatherUnit: weather.unit}));
        }
    };

    return (
        <>
            <InputSearchBar
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyUp={handleSearch}
                placeholder="Enter city name"
            />
        </>
    );
};
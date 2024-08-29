import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherBySearchRequest} from "../features/weatherSlice";
import styled from 'styled-components';
import {fonts} from "../../fonts/fontStyles";
import {debounce} from 'lodash';
import axios from "axios";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface City {
    name: string;
    country_name: string;
}
const InputSearchBar = styled.input
    `
        &::placeholder {
            padding-left: 6px;
            padding-top: 20px;
            letter-spacing: 0.15px;
            font-family: ${fonts.Body};
        }

        background-color: ${({theme}) => theme['input-background-color']};
        width: 828px;
        height: 35px;
        box-sizing: border-box;
        border-radius: 8px;
        border: none;
        outline: none;
        padding-left: 30px;

        @media screen and (max-width: 768px) {
            margin-left: 30px;
            width: 400px;
        }
        @media screen and (max-width: 973px) {
            width: 760px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        @media screen and (max-width: 375px) {
            width: 197px;
            margin-left: 0;
        }
    `

export const SearchCityWeather = () => {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();
    const weather = useTypedSelector((state) => state.weather);

    const debouncedFetchCities = debounce(async (query: string) => {
        if (query.trim() !== '') {
            try {
                const response = await axios.get('https://autocomplete.travelpayouts.com/places2', {
                    params: {
                        term: query,
                        locale: 'en',
                        types: 'city',
                    },
                });
                setSuggestions(response.data);
                setShowSuggestions(true);
            } catch (error) {
                console.error('Error fetching city suggestions:', error);
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, 300);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setCity(inputValue);
        debouncedFetchCities(inputValue); // Запуск дебаунс функции
    };

    const handleSelectCity = (selectedCity: City) => {
        setCity(selectedCity.name);
        setShowSuggestions(false);
        dispatch(fetchWeatherBySearchRequest({location: selectedCity.name, weatherUnit: weather.unit}));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && city.trim() !== '') {
            if (suggestions.length > 0) {
                handleSelectCity(suggestions[0]);
            } else {
                dispatch(fetchWeatherBySearchRequest({location: city, weatherUnit: weather.unit}));
                setShowSuggestions(false);
            }
        }
    };

    return (
        <div style={{position: 'relative'}}>
            <InputSearchBar
                type="text"
                value={city}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter city name"
            />
            {showSuggestions && suggestions.length > 0 && (
                <ul style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    zIndex: 1000,
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    {suggestions.map((suggestion: City, index: number) => (
                        <li
                            key={index}
                            onClick={() => handleSelectCity(suggestion)}
                            style={{
                                padding: '10px',
                                cursor: 'pointer'
                            }}
                        >
                            {suggestion.name}, {suggestion.country_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
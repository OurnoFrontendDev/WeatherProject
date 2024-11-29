import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchSuggestions,
  fetchWeatherBySearch,
} from "../features/weatherSlice";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  SearchWeatherInput,
  SearchCitiesList,
  SearchCitiesListTownItem,
} from "./searchCityWeather.styled";
import { TownSearch } from "../../types/weather";
import useDebouncedCallback from "../../hooks/useDebounceCallback";

export const SearchCityWeather = () => {
  const dispatch = useDispatch();
  const weather = useTypedSelector((state) => state.weather);
  const suggestions = useTypedSelector((state) => state.weather.suggestions);

  const [city, setCity] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setShowSuggestions(suggestions.length > 0);
  }, [suggestions]);

  const debouncedFetchSuggestions = useDebouncedCallback((value: string) => {
    dispatch(fetchSuggestions(value));
  }, 500);

  const handleSelectCity = (selectedCity: TownSearch) => {
    if (
      selectedCity.latitude !== undefined &&
      selectedCity.longitude !== undefined
    ) {
      setCity(selectedCity.name);
      setShowSuggestions(false);
      dispatch(
        fetchWeatherBySearch({
          name: selectedCity.name,
          location: {
            latitude: selectedCity.latitude,
            longitude: selectedCity.longitude,
          },
          weatherUnit: weather.unit,
        }),
      );
      setCity("")
    } else {
      console.error("Selected city is null or undefined");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    debouncedFetchSuggestions(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && city.trim()) {
      dispatch(
        fetchWeatherBySearch({
          name: city,
          weatherUnit: weather.unit,
        }),
      );
      setShowSuggestions(false);
    }
  };

  return (
    <>
      <SearchWeatherInput
        type="text"
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name"
      />
      {showSuggestions && suggestions.length > 0 && (
        <SearchCitiesList>
          {suggestions.map((suggestion: TownSearch, index: number) => (
            <SearchCitiesListTownItem
              key={index}
              onClick={() => handleSelectCity(suggestion)}
            >
              {suggestion.name}, {suggestion.country}
            </SearchCitiesListTownItem>
          ))}
        </SearchCitiesList>
      )}
    </>
  );
};

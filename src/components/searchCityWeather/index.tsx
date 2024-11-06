
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherBySearchRequest } from "../features/weatherSlice";
import { debounce } from "lodash";
import axios from "axios";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { InputSearchBar, SearchCitiesList, SearchCitiesListTownItem } from "./SearchCityWeatherStyle";

interface City {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export const SearchCityWeather = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const weather = useTypedSelector((state) => state.weather);

  const fetchCitiesFromNewApi = async (query: string) => {
    if (query.trim()) {
      try {
        const response = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
          params: {
            name: query,
            count: 10,
            language: "en",
            format: "json",
          },
        });

        if (response.data.results) {
          setSuggestions(response.data.results);
          setShowSuggestions(true);
        } else {
          setSuggestions([]);
          setShowSuggestions(false);
        }
      } catch (error) {
        console.error("Error fetching city suggestions:", error);
        setSuggestions([]);
        setShowSuggestions(false);
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const debouncedFetchCities = debounce(async (query: string) => {
    await fetchCitiesFromNewApi(query);
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCity(inputValue);
    debouncedFetchCities(inputValue);
  };

  const handleSelectCity = (selectedCity: City) => {
    if (selectedCity) {
      setCity(selectedCity.name);
      console.log("selectedCity.name", selectedCity.name);
      setShowSuggestions(false);
      dispatch(
        fetchWeatherBySearchRequest({
          location: {
            latitude: selectedCity.latitude,
            longitude: selectedCity.longitude,
          },
          weatherUnit: weather.unit,
          name: selectedCity.name,
        }),
      );
    } else {
      console.error("Selected city is null or undefined");
    }
  };


  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && city.trim()) {
      if (suggestions.length) {
        handleSelectCity(suggestions[0]);
      } else {
        try {
          const response = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
            params: {
              name: city,
              count: 1,
              language: "en",
              format: "json",
            },
          });

          if (response.data.results.length) {
            const selectedCity = response.data.results[0];
            dispatch(
              fetchWeatherBySearchRequest({
                location: {
                  latitude: selectedCity.latitude,
                  longitude: selectedCity.longitude,
                },
                weatherUnit: weather.unit,
                name:selectedCity.name,
              }),
            );
            setShowSuggestions(false);
          }
        } catch (error) {
          console.error("Error fetching coordinates:", error);
        }
      }
    }
  };

  return (
    <>
      <InputSearchBar
        type="text"
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name"
      />
      {showSuggestions && suggestions.length > 0 && (
        <SearchCitiesList>
          {suggestions.map((suggestion: City, index: number) => (
            <SearchCitiesListTownItem key={index} onClick={() => handleSelectCity(suggestion)}>
              {suggestion.name}, {suggestion.country}
            </SearchCitiesListTownItem>
          ))}
        </SearchCitiesList>
      )}
    </>
  );
};
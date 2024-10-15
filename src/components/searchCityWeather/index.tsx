import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherBySearchRequest } from "../features/weatherSlice";
import { debounce } from "lodash";
import axios from "axios";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { InputSearchBar, ULSearchList } from "./SearchCityWeatherStyle";

interface City {
  name: string;
  country_name: string;
}

export const SearchCityWeather = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const weather = useTypedSelector((state) => state.weather);

  const debouncedFetchCities = debounce(async (query: string) => {
    if (query.trim() !== "") {
      try {
        const response = await axios.get("https://autocomplete.travelpayouts.com/places2", {
          params: {
            term: query,
            locale: "en",
            types: "city",
          },
        });
        setSuggestions(response.data);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching city suggestions:", error);
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
    debouncedFetchCities(inputValue);
  };

  const handleSelectCity = (selectedCity: City) => {
    setCity(selectedCity.name);
    setShowSuggestions(false);
    dispatch(
      fetchWeatherBySearchRequest({ location: selectedCity.name, weatherUnit: weather.unit }),
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && city.trim() !== "") {
      if (suggestions.length > 0) {
        handleSelectCity(suggestions[0]);
      } else {
        dispatch(fetchWeatherBySearchRequest({ location: city, weatherUnit: weather.unit }));
        setShowSuggestions(false);
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
        <ULSearchList>
          {suggestions.map((suggestion: City, index: number) => (
            <li
              key={index}
              onClick={() => handleSelectCity(suggestion)}
              style={{
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {suggestion.name}, {suggestion.country_name}
            </li>
          ))}
        </ULSearchList>
      )}
    </>
  );
};

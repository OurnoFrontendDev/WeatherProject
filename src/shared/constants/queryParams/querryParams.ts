export const queryParams = {
  searchTown: {
    count: 10,
    language: 'en',
    format: 'json',
  },
  weatherData: {
    current: 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m',
    hourly:
      'temperature_2m,precipitation_probability,wind_speed_10m,apparent_temperature,weather_code',
    daily:
      'sunrise,sunset,precipitation_probability_max,uv_index_max,temperature_2m_max,temperature_2m_min,weather_code',
    timezone: 'auto',
    forecast_days: 7,
  },
};

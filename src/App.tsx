import React from "react";
import { FontStyles } from "./fonts/fontStyles";
import { AppWrapper } from "./AppStyles";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "./provider";
import { WeatherSummary } from './components/WeatherSummary';
import { SearchToggleTemperatureUnitPanel } from './components/SearchTogglePanel';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <FontStyles />
      <AppWrapper>
        <SearchToggleTemperatureUnitPanel/>
        <WeatherSummary />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

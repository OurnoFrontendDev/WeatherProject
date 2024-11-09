import React from "react";
import { FontStyles } from "./fonts/fontStyles";
import { SearchTogglePanelContainer } from "./components/SearchTogglePanel";
import { WeatherUnionInfo } from "./components/WeatherUnionInfo";
import { AppWrapper } from "./AppStyles";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "./provider";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <FontStyles />
      <AppWrapper>
        <SearchTogglePanelContainer />
        <WeatherUnionInfo />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

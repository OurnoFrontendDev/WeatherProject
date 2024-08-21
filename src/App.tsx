import React from 'react';
import "/src/styles/App.scss"
import {useSelector} from "react-redux";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./themes";
import {GlobalStyle} from "./index";
import {RootState} from "./state/store";
import {FontStyles} from "./fonts/fontStyles";
import {SearchTogglePanelContainer} from "./components/SearchTogglePanel";
import {WeatherUnionInfo} from "./components/WeatherUnionInfo";
import {AppWrapper, HeaderContainer} from "./AppStyles";

function App() {
    const theme = useSelector((state: RootState) => state.theme?.theme);
    return (<>
            <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                <FontStyles/>
                <GlobalStyle/>
                <AppWrapper>
                    <HeaderContainer>
                        <SearchTogglePanelContainer/>
                    </HeaderContainer>
                    <WeatherUnionInfo/>
                </AppWrapper>
            </ThemeProvider>
        </>

    )
}
export default App;

import styled from "styled-components";

export const CityTempThemeSwitchContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 1276px;
    height: 40px;
    margin-top: 29px;
    
    @media screen and (max-width:1024px) {
        width: 100%;
    }
    @media screen and (max-width:1121px) {
        width: 100%;
    }
`
export const SearchCityWeatherContainer = styled.div`
    display: flex;
    width: 830px;
    margin-left: 219px;

    @media screen and (max-width:1024px) {
        margin-left: 0;
    }

    @media screen and (max-width:768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 30px;
        width: 100%;
    }

    @media screen and (max-width:973px) {
        width: 886px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    @media screen and (max-width:1121px) {
        margin-left: 0;
    }
    
`
export const ToggleSwitchTempUnitContainer = styled.div`
    display: flex;
    height: 36px;
`
export const ToggleSwitchThemeContainer = styled.div`
    display: flex;
    margin-left: 10px;
    margin-right: 2px;
`
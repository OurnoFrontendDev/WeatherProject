import styled from "styled-components";

export const CityTempThemeSwitchContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40px;
    margin-top: 29px;
    
    @media screen and (min-width: 320px) and (max-width: 768px) {
        margin-top: 8px;
    }
    
    @media screen and (min-width: 768px) and (max-width: 992px) {
        width: 100vw;  
        height: 5vh;;
    }
`
export const SearchCityWeatherContainer = styled.div`
    display: flex;
    width: 830px;

    @media screen and (min-width: 320px) and (max-width: 768px ) {
        width: 70vw;
        margin-left: 0;
    }
    @media screen and (min-width: 768px) and (max-width: 992px ) {
        width: 80vw;
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
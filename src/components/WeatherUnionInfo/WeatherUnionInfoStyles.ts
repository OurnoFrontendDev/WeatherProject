import styled from "styled-components";

export const WeatherUnionContainer = styled.section`
    display: flex;
    height: 100%;
    width: 100%;
    gap: 37px;
    align-items: center;

    @media screen and (min-width: 768px) and (max-width: 992px) {
        align-items: normal;
        width: 100vw;
        height: 100vh;
        margin-left: 0;
    }
`
export const WeatherUnionInfoContainer = styled.section`
    display: flex;
    height: 90%;
    width: 100%;
    gap: 37px;
    margin-left: 94px;
    
    @media screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        margin-left: 0;
    }
    
    @media screen and (min-width: 768px) and (max-width: 992px) {
        width: 100vw;
        height: 100vh;
        margin-left: 30px;
    }
`
export const WeatherTownInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 811px;
    height: 710px;
    gap: 38px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        width: 100vw;
        height: 45vh;
        gap: 0;
    }
    
    @media screen and (min-width: 768px) and (max-width: 992px) {
        width: 50%;
        height: 100%;
        gap: 0;
    }
`
export const WeekForecastContainer = styled.section`
    display: flex;
    width: 30%;
    border-radius: 17px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        width: 100vw;
        height: 40vh;
        margin-top: 5px;
    }
    
    @media screen and (min-width: 768px) and (max-width: 992px) {
        height: 80%;
        width: 40%;
    }
`
export const ForeCastContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 36px;
    
    @media screen and (min-width: 320px) and (max-width: 768px) {
        width: 100vw;
        height: 40vh;
        gap: 9px;
    }
    
    @media screen and (min-width: 768px) and (max-width: 992px) {
        gap: 95px;
    }
`
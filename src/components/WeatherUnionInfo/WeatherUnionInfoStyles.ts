import styled from "styled-components";
import {DefaultFlexSettings} from "../../reusedStyleVariables";

export const WeatherUnionInfoContainer = styled.section`
    ${DefaultFlexSettings};
    gap: 2%;
    @media screen and (max-width: 375px) {
        justify-content: center;
        align-items: center;
    }
`
export const WeatherTownInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 57%;
    height: 88.3%;
    margin-top: 43px;
    margin-left: 85px;
    @media screen and (max-width: 500px) {
        margin-left: 1%;
    }
`
export const WeekForecastContainer = styled.section`
    display: flex;
    width: 27%;
    height: 88%;
    margin-top: 3%;
    border: 1px solid grey;
    border-radius: 17px;

    @media screen and (max-width: 940px) {
        margin-top: 6%;
    } 
    @media screen and (max-width: 800px) {
        visibility: hidden;
    }
`
export const ForeCastContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75%;
    margin-top: 1%;
    gap: 5%;
`
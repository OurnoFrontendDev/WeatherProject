import styled from "styled-components";
import {DefaultFlexSettings} from "../../reusedStyleVariables";

export const WeatherUnionInfoContainer = styled.section`
    ${DefaultFlexSettings};
    gap: 27px;

    @media screen and (max-width: 759px) {
        padding-left: 40px;
    }
`
export const WeatherTownInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 57%;
    height: 88%;
    margin-top: 43px;
    margin-left: 85px;
    
    @media screen and (max-width: 768px){
        margin-left: 20px;
    }
    @media screen and (max-width: 375px) {
        display: flex;
        flex-direction: column;
    }
    
`
export const WeekForecastContainer = styled.section`
    display: flex;
    width: 27%;
    height: 88%;
    margin-top: 3%;
    border: 1px solid grey;
    border-radius: 17px;

    @media screen and (max-width:768px) {
        width: 270px;
        margin-top: 36px;
    }
`
export const ForeCastContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75%;
    margin-top: 10px;
    gap: 7px;
`
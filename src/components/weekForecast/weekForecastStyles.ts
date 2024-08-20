import styled from "styled-components";
import {fonts} from "../../fonts/fontStyles";
import {fontSizeStyle} from "../../reusedStyleVariables";


export const WeekForecastWrapper = styled.section`
    display: flex;
    background-color: ${({theme}) => theme.backgroundForecast || '#000;'};
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    
`
export const DaysForecastText = styled.div`
    margin: 15px 24px 23px 23px;
    color: gray;
    opacity: 60%;
    font-family: ${fonts.Body_2};
`
export const WeekForecastTextContainer = styled.div`
    display: flex;
    width: 100%;
    height: 9%;

`
export const WeekForecastContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 88%;
    border: 1px solid #E8EAF6;
    background-color: ${({theme}) => theme.backgroundWeatherDetails || '#000'};
    opacity: 60%;


`
export const WeekForecastCardContent = styled.div`
    display: flex;
    width: 100%;
    height: 14%;

    &:not(:last-child) {
        border-bottom: 1px solid #D0D0D0;
    }

`
export const WeekForecastCardDatesContainer = styled.div`
    display: flex;
    width: 65%;
    flex-direction: column;
    height: 100%;
`
export const WeekForecastCardDate = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    font-family: ${fonts.Body};
    padding-top: 10px;
    padding-left: 19px;
    @media screen and (max-width: 1496px) {
        flex-direction: column;
        ${fontSizeStyle}
    };

`
export const WeekForecastCardDay = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    font-family: ${fonts.Body};
    padding-left: 19px;
    @media screen and (max-width: 1496px) {
        flex-direction: column;
        ${fontSizeStyle}
    ;
`

export const WeekForecastCardIconContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
`
export const ForecastIcon = styled.img`
    width: auto;
    height: auto;
    @media screen and (max-width: 1496px) {
        width: 50%;
        height: 50%;
    ;
`;
export const WeekForecastCardTemp = styled.div`
    display: flex;
    width: 35%;
    height: 100%;
    padding-top: 25px;
    padding-left: 9px;

    @media screen and (max-width: 1496px) {
        flex-direction: column;
        ${fontSizeStyle}
    ;
    }
`
export const IconDescription = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 19px;
    @media screen and (max-width: 1496px) {
        flex-direction: column;
        ${fontSizeStyle}
    ;
`

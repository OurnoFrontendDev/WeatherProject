import styled from "styled-components";
import {fonts} from "../../fonts/fontStyles";
import {fontSizeStyle} from "../../reusedStyleVariables";

export const WeatherDetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 58%;
    margin-bottom: 5px;
    border-radius: 20px;
    border: 1px solid #E8EAF6;
    background-color: ${({theme}) => theme.backgroundForecast || '#000'};
`
export const WeatherDetailsTextContainer = styled.div`
    display: flex;
    width: 100%;
    height: 23%;

`
export const WeatherDetailsText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${fonts.Body}
    width: 24%;
    padding-bottom: 6px;
    padding-left: 4px;

    @media screen and (max-width: 940px) {
        ${fontSizeStyle};
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        margin: 1%;
    }
`
export const WeatherDetailsCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`
export const WeatherDetailsCardInfo = styled.div`
    display: flex;
    width: 29%;
    height: 43%;
    border-radius: 16px;
    background-color: ${({theme}) => theme.backgroundWeatherDetails};
    border: 1px solid #eee;
    opacity: 32%;

`
export const CardLabel = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 500;
    padding: 15px;
    width: 100%;
    height: 50%;
    
    @media screen and (max-width: 1000px) {
        ${fontSizeStyle};
    }

`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 1208px) {
        ${fontSizeStyle};
    }
`;
export const RightContainer = styled.div`
    display: flex;
    height: 100%;
    width: 30%;
    align-items: center;
    padding-left: 10px;
`;

export const CardValue = styled.div`
    display: flex;
    font-size: 24px;
    font-weight: bold;
    padding-left: 17px;
    
    @media screen and (max-width: 1208px) {
        ${fontSizeStyle};
    }
`;

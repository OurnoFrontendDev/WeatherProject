import styled from "styled-components";
import {fonts} from "../../fonts/fontStyles";
import {fontSizeStyle} from "../../reusedStyleVariables";

export const WeatherDetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 55%;
    margin-bottom: 5px;
    border-radius: 20px;
    border: 1px solid #E8EAF6;
    background-color: ${({theme}) => theme['--card-main-background-color']};
`
export const WeatherDetailsTextContainer = styled.div`
    display: flex;
    width: 100%;
    height: 25%;
`
export const WeatherDetailsText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${fonts.Body}
    width: 25%;
    padding-bottom: 6px;
    padding-left: 4px;
    color: ${({theme}) => theme['--card-title-color']};

    @media screen and (max-width: 759px) {
        width: 150px;
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
    width: 30%;
    height: 45%;
    border-radius: 16px;
    border: 1px solid #eee;
    background-color: ${({theme}) => theme['--card-item-background-color']};
`
export const CardLabel = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 500;
    padding: 15px;
    width: 100%;
    height: 50%;
    color: ${({theme}) => theme['--card-title-color']};

`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

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
    color: ${({theme}) => theme['--indicator-color']};

`;

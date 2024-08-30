import styled from "styled-components";
import {fonts} from "../../fonts/fontStyles";

export const WeatherDetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 55%;
    border-radius: 20px;
    border: 1px solid #E8EAF6;
    background-color: ${({theme}) => theme['--card-main-background-color']};

    @media screen and (min-width: 320px) and (max-width: 768px) {
        width: 100vw;
        height: 20vh;
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
        width: 100%;
        height: 40%;
    }
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
`
export const WeatherDetailsCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        height: 80%;
    }
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

    @media screen and (min-width: 320px) and (max-width: 768px) {
        padding: 0;
        overflow: hidden;
    }
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
    @media screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 80%;
        padding-left: 0;
    }
`;

export const CardValue = styled.div`
    display: flex;
    font-size: 24px;
    font-weight: bold;
    padding-left: 17px;
    color: ${({theme}) => theme['--indicator-color']};

    @media screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 80%;
        padding-left: 2px;
    }
    
    @media screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1rem;
    }
`;

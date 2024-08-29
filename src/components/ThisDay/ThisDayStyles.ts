import styled from "styled-components";
import {ContainerStyles, DefaultFlexSettings} from "../../reusedStyleVariables";
import {fonts} from "../../fonts/fontStyles";

export const LocationTemperatureContainer = styled.section`
    ${ContainerStyles};
    height: 25%;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
    
`;

export const LocationDescriptionContainer = styled.div`
    ${DefaultFlexSettings};
    flex-direction: column;
    flex: 1;
    margin-bottom: 6px;

    @media screen and (max-width: 1024px) {
        width: 50%;
    }

    @media screen and (max-width: 375px) {
        width: 197px;
        margin-left: 0;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    
`;

export const TemperatureIcon = styled.div`
    display: flex;
    width: 20%;
    margin-bottom: 21px;
    
    @media screen and (max-width:375px) {
        width: 10%;
    }
`;

export const InfoDate = styled.div`
    ${DefaultFlexSettings};
    font-weight: normal;
    font-size: 15px;
    color: ${({theme}) => theme['--day-title-color']};
    padding: 1px 0 0 3px;
    @media screen and (max-width:375px) {
        width: 10%;
    }
`;

export const City = styled.div`
    ${ContainerStyles};
    height: 50%;
    font-family: ${fonts.Headline_L};
    color: ${({theme}) => theme['--day-title-color']};
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0 0 8px;

`;

export const Temperature = styled.div`
    display: flex;
    color: ${({theme}) => theme['--day-title-color']};
    width: 95%;
    height: 80%;
    padding-left: 5px;
    font-family: ${fonts.Headline_XL};
`;
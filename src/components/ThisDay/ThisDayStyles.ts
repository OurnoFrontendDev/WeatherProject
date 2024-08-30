import styled from "styled-components";
import {ContainerStyles} from "../../reusedStyleVariables";
import {fonts} from "../../fonts/fontStyles";

export const LocationTemperatureContainer = styled.section`
    ${ContainerStyles};
    height: 25%;
    
    @media screen and (min-width: 320px) and (max-width: 768px) {
        width: 100vw;
        height: 10vh;
    }
    
    @media screen and (min-width: 768px) and (max-width: 992px) {
        width: 100%;
        height: 20vh;
    }
`;

export const LocationDescriptionContainer = styled.div`
    flex-direction: column;
    flex: 1;
    margin-bottom: 6px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 0;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    
    @media screen and (min-width: 320px) and (max-width: 768px) {
        width: 30vw;
    }
`;

export const TemperatureIcon = styled.div`
    display: flex;
    width: 20%;
    margin-bottom: 21px;
`;

export const InfoDate = styled.div`
    font-weight: normal;
    font-size: 15px;
    color: ${({theme}) => theme['--day-title-color']};
    padding: 1px 0 0 3px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 1rem;
        padding: 0;
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
    
    @media screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 1rem;
        padding: 0;
    }
`;

export const Temperature = styled.div`
    display: flex;
    color: ${({theme}) => theme['--day-title-color']};
    width: 95%;
    height: 80%;
    padding-left: 5px;
    font-family: ${fonts.Headline_XL};
    
    @media screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 1rem;
        padding: 0;
    }
`;
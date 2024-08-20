import styled from "styled-components";
import {ContainerStyles, DefaultFlexSettings} from "../../reusedStyleVariables";
import {fonts} from "../../fonts/fontStyles";

export const LocationTemperatureContainer = styled.section`
    ${ContainerStyles};
    height: 25%;
    
    @media screen and (max-width: 780px) {
        width: 60%;
    }
`;

export const LocationDescriptionElementContainer = styled.div`
    ${DefaultFlexSettings};
    flex-direction: column;
    flex: 1;
    margin-bottom: 6px;
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
`;

export const InfoDate = styled.div`
    ${DefaultFlexSettings};
    font-weight: normal;
    font-size: 15px;
    color: ${({ theme }) => theme.text};
    padding: 1px 0 0 3px;
`;

export const City = styled.div`
    ${ContainerStyles};
    height: 47%;
    font-family: ${fonts.Headline_L};
    color: ${({ theme }) => theme.text};
    justify-content: flex-start;
    align-items: center;
    padding: 2.1% 0 0 3.6%;
    
    @media screen and (max-width: 780px) {
        font-size:2em;
    }
`;

export const Temperature = styled.div`
    display: flex;
    color: ${({ theme }) => theme.text};
    width: 96%;
    height: 82%;
    padding-left: 5px;
    font-family: ${fonts.Headline_XL};
`;
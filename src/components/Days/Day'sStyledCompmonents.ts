import styled from "styled-components";
import {fonts} from "../../fonts/fontStyles";

export const ForecastWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 181px;
    border-radius: 22px;
    border: 1px solid #E8EAF6;
    background-color: ${({ theme }) => theme.backgroundForecast || '#000'};
`

export const ForecastContainer = styled.div`
    display: flex;
    overflow-x: hidden;
    padding: 10px;
    border-radius: 8px;
    position: relative;
    margin-top: 6px;
`;
export const ForecastTextContainer = styled.div`
    display: flex;
    border-radius: 8px;
    margin-top: 18px;
    padding-left: 22px;
    padding-top: 2px;
    font-family: ${fonts.Body_2};
`;

export const ScrollArea = styled.div`
    display: flex;
    transition: transform 0.3s ease; /* Smooth scroll */
`;

export const ForecastItemContainer = styled.div`
    display: inline-block;
    margin-left: 10px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 8px;
    width: 86px;
    height: 97px;
    background-color: ${({ theme }) => theme.backgroundColor};
    opacity: 32%;
    font-family: ${fonts.Body_2};
`;

export const ArrowButton = styled.button<{ direction: string }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.backgroundColor};
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 1;
    ${({direction}) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}
    &:hover {
        opacity: 0.7;
    }
`;
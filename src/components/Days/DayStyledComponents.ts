import styled from "styled-components";
import {fonts} from "../../fonts/fontStyles";

export const ForecastWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 181px;
    border-radius: 22px;
    border: ${({theme}) => theme['--border-style']};;
    background-color: ${({theme}) => theme['--card-main-background-color']};
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
    color: ${({theme}) => theme['--card-title-color']};
    font-family: ${fonts.Body_2};
`;

export const ScrollArea = styled.div`
    display: flex;
    transition: transform 0.3s ease;
`;

export const ForecastItemContainer = styled.div`
    display: inline-block;
    margin-left: 10px;
    text-align: center;
    border-radius: 8px;
    width: 86px;
    height: 97px;
    background-color: ${({theme}) => theme['--card-item-background-color']};
    font-family: ${fonts.Body_2};
`;

export const ArrowButton = styled.button<{ direction: string }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: ${({theme}) => theme['--card-item-background-color']};
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 1;

    ${({direction}) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}
    &:hover {
        opacity: 0.7;
    }
`;
export const TempStyle = styled.div`
    color: ${({theme}) => theme['--temp-indicator-color']};
`
export const DateTimeStyle = styled.div`
    color: ${({theme}) => theme['--card-title-color']};
`
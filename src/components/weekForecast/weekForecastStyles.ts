import styled from "styled-components";
import {fonts} from "../../fonts/fontStyles";

export const WeekForecastWrapper = styled.section`
    display: flex;
    background-color: ${({theme}) => theme['--card-main-background-color']};
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    
    @media screen and (min-width: 992px) and (max-width: 1200px) {
       height: 100%;
    }
 
`
export const DaysForecastText = styled.div`
    margin: 15px 24px 23px 23px;
    font-family: ${fonts.Body_2};
    color: ${({theme}) => theme['--card-title-color']};

    @media screen and (min-width: 320px) and (max-width: 768px) {
        margin: 0 23px 23px;
    }
`
export const WeekForecastTextContainer = styled.div`
    display: flex;
    width: 100%;
    @media screen and (min-width: 320px) and (max-width: 768px) {
        height: 3vh;
    }
`
export const WeekForecastContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 88%;
    border: ${({theme}) => theme['--border-style']};
    background-color: ${props => props.theme['--card-item-background-color']};
`
export const WeekForecastCardContent = styled.div`
    display: flex;
    width: 100%;
    height: 15%;

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
    color: ${({theme}) => theme['--card-title-color']};

    @media screen and (min-width: 320px) and (max-width: 768px) {
        padding-top: 0;
    }

`
export const WeekForecastCardDay = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    font-family: ${fonts.Body};
    padding-left: 19px;
    color: ${({theme}) => theme['--card-title-color']};

`
export const WeekForecastCardIconContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
export const ForecastIcon = styled.img`
    width: 40px;
    height: 40px;
`;
export const WeekForecastCardTemp = styled.div`
    display: flex;
    width: 35%;
    height: 100%;
    align-items: center;
    padding-left: 9px;
    color: ${({theme}) => theme['--card-title-color']};
}
`
export const IconDescription = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme['--card-title-color']};
`

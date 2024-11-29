import styled from 'styled-components';
import { fonts } from '../../fonts/fontStyles';

export const WeekForecastWrapper = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme['--card-main-background-color']};
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  padding: 0 2px 20px;

  @media screen and (min-width: 500px) and (max-width: 500px) {
    max-height: 285px;
    min-height: 285px;
  }
`;

export const DaysForecastText = styled.div`
  font-family: ${fonts.Body_2};
  color: ${({ theme }) => theme['--card-title-color']};
  text-transform: uppercase;

  @media screen and (min-width: 300px) and (max-width: 699px) {
    margin: 0;
  }

  @media screen and (width: 1024px) and (height: 600px) {
    margin: 0;
  }
`;

export const WeekForecastTextContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;

  @media screen and (min-width: 800px) and (max-width: 999px) {
    max-height: 49px;
  }
    
  @media screen and (max-width: 500px) {
    padding-bottom: 5px;
    padding-top: 5px;
  }
`;

export const WeekForecastContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  border: ${({ theme }) => theme['--border-style']};
  background-color: ${(props) => props.theme['--card-item-background-color']};
`;

export const WeekForecastCardContent = styled.div`
  display: flex;
  width: 100%;
  height: 15%;

  &:not(:last-child) {
    border-bottom: 1px solid #d0d0d0;
  }

  @media screen and (min-width: 600px) and (max-width: 665px) {
    height: 14%;
  }

  @media screen and (min-width: 500px) and (max-width: 611px) {
    padding: 5px;
  }
`;

export const WeekForecastCardDatesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 500px) {
    flex-direction: row;
  }

  @media screen and (max-width: 416px) {
    width: 100%;
  }

  @media screen and (width: 375px) and (height: 667px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const WeekForecastCardDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: ${fonts.Body};
  color: ${({ theme }) => theme['--card-title-color']};

  @media screen and (max-width: 352px) {
    font-size: 13px;
  }

  @media screen and (max-width: 326px) {
    font-size: 11px;
  }
`;

export const WeekForecastCardDay = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.Body};
  color: ${({ theme }) => theme['--card-title-color']};

  @media screen and (min-width: 700px) and (max-width: 799px) {
    padding-left: 6px;
  }

  @media screen and (min-width: 670px) and (max-width: 699px) {
    font-size: 13px;
    padding-left: 5px;
  }

  @media screen and (min-width: 500px) and (max-width: 699px) {
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 500px) and (max-width: 528px) {
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
    
  @media screen and (max-width: 352px) {
    font-size: 13px;
  }

  @media screen and (max-width: 326px) {
    font-size: 11px;
  }
`;

export const WeekForecastCardIconContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const WeekForecastCardTemp = styled.div`
  font-size: ${fonts.Body};

  @media screen and (max-width: 326px) {
   font-size: 11px;
  }
`;

export const WeekForecastCardTempContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 2px;
    color: ${({ theme }) => theme['--card-title-color']};

    @media screen and (max-width: 499px) {
        width: 55%;
    }
}`;

export const IconDescription = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: ${({ theme }) => theme['--card-title-color']};
  font-size: ${fonts.Body};

  @media screen and (min-width: 800px) and (max-width: 845px) {
    font-size: 13px;
    padding-right: 2px;
  }

  @media screen and (min-width: 700px) and (max-width: 799px) {
    font-size: 13px;
  }

  @media screen and (min-width: 1000px) and (max-width: 1084px) {
    font-size: 13px;
  }

  @media screen and (min-width: 503px) and (max-width: 699px) {
    font-size: 13px;
  }

  @media screen and (max-width: 352px) {
    font-size: 13px;
  }

  @media screen and (max-width: 326px) {
    font-size: 11px;
  }
`;

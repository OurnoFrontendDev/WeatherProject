import styled from 'styled-components';

export const WeatherContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 24px;

  @media screen and (min-width: 500px) and (max-width: 570px) {
    max-height: 95%;
  }

  @media screen and (min-width: 400px) and (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
    
  @media screen and (max-width: 445px) {
    flex-direction: column;
    gap: 10px;
  }
    
  @media screen and (min-width: 300px) and (max-width: 445px) {
    gap: 20px;
  }
`;

export const WeatherTownInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 698px;
  width: 10%;
  height: 100%;
  gap: 20px;
  flex: 1;

  @media screen and (width: 1024px) and (height: 600px) {
    gap: 0;
  }
    
  @media screen and (max-width: 500px) {
    width: 100%;
    max-height: 455px;
    gap: 0;
  }
    
  @media screen and (max-width: 445px) {
    width: 100%;
    gap: 0;
    max-height: 445px;
  }

  @media screen and (max-width: 338px) {
    width: 100%;
    gap: 0;
    max-height: 445px;
  }
`;

export const WeekForecastContainer = styled.section`
  display: flex;
  width: 100%;
  border-radius: 17px;
  height: 100%;
  min-width: 300px;
  max-width: 348px;

  @media screen and (min-width: 500px) and (max-width: 1062px) {
    min-width: 0;
    width: 50%;
  }
    
  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: 100%;
  }

  @media screen and (min-width: 300px) and (max-width: 445px) {
    max-height: 440px;
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
`;

export const ForeCastContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 24px;
  max-height: 450px;

  @media screen and (max-width: 500px) {
    gap: 10px;
  }
`;

import styled from "styled-components";

export const WeatherUnionContainer = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  padding: 20px 20px 0;
  max-height: 614px;

  @media screen and (min-width: 992px) and (max-width: 1300px) {
    align-items: normal;
    width: 100%;
    height: 100%;
    padding-top: 20px;
  }

  @media screen and (min-width: 300px) and (max-width: 500px) {
    padding: 20px 0 0;
  }
  @media screen and (min-width: 334px) and (max-width: 446px) {
    padding: 18px 0 0;
  }
  @media screen and (min-width: 320px) and (max-width: 333px) {
    padding: 10px 0 0;
  }
`;
export const WeatherUnionInfoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 10%;

  @media screen and (min-width: 800px) and (max-width: 1250px) {
    gap: 15px;
  }
  @media screen and (min-width: 300px) and (max-width: 799px) {
    gap: 5px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
`;
export const WeatherTownInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  gap: 20px;
  flex: 1;
  @media screen and (width: 1024px) and (height: 600px) {
    gap: 0;
  }

  @media screen and (min-width: 320px) and (max-width: 799px) {
    gap: 5px;
    width: 100%;
    min-width: 100%;
    min-height: 304px;
  }
  @media screen and (min-width: 300px) and (max-width: 499px) {
    gap: 2px;
    width: 100%;
    min-width: 100%;
  }
`;
export const WeekForecastContainer = styled.section`
  display: flex;
  width: 100%;
  border-radius: 17px;
  height: 100%;
  max-width: 348px;

  @media screen and (min-width: 800px) and (max-width: 1020px) {
    max-width: 40%;
    width: 40%;
  }
  @media screen and (min-width: 300px) and (max-width: 799px) {
    max-height: 313px;
    max-width: 100%;
    width: 100%;
  }
  @media screen and (min-width: 300px) and (max-width: 445px) {
    max-height: 313px;
    max-width: 100%;
    width: 100%;
    height: 35%;
  }
`;
export const ForeCastContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 24px;
  max-height: 395px;

  @media screen and (min-width: 500px) and (max-width: 799px) {
    width: 100%;
    flex-direction: row;
    gap: 5px;
    min-height: 150px;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    flex-direction: row;
    gap: 5px;
  }
  @media screen and (min-width: 300px) and (max-width: 499px) {
    width: 100%;
    flex-direction: column;
    gap: 5px;
  }
`;

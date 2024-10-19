import styled from "styled-components";

export const CityTempThemeSwitchContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 25px;
  height: 37px;

  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    padding-left: 25px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1820px) {
    padding-right: 20px;
  }

  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    padding-right: 35px;
  }

  @media screen and (min-width: 599px) and (max-width: 699px) {
    padding-left: 30px;
    padding-right: 20px;
  }
  @media screen and (min-width: 570px) and (max-width: 599px) {
    padding-left: 3px;
    padding-right: 20px;
  }
  @media screen and (min-width: 300px) and (max-width: 570px) {
    padding-left: 3px;
    padding-right: 0;
  }
`;
export const SearchCityWeatherContainer = styled.div`
  display: flex;
  width: 830px;
  position: relative;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;
export const ToggleSwitchTempUnitContainer = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
`;
export const ToggleSwitchThemeContainer = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 2px;
  align-items: center;
  @media screen and (min-width: 300px) and (max-width: 499px) {
    margin-left: 2px;
  }
`;

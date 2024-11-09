import styled from "styled-components";
import { fonts } from "../../fonts/fontStyles";

export const LocationTemperatureContainer = styled.section`
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: space-between;
  gap: 10px;

    @media screen and (min-width: 900px) {
       min-height: 154px;
    }

  @media screen and (min-width: 500px) and (max-width: 585px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
  }
  @media screen and (max-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2px;
    min-height: 121px;
  }
`;

export const LocationDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 5px;
  width: 35%;
  height: 100%;

  @media screen and (min-width: 501px) and (max-width: 1338px) {
    width: 50%;
  }
  @media screen and (min-width: 300px) and (max-width: 500px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const TemperatureIcon = styled.img`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TemperatureIconContainer = styled.div`
  display: flex;
  width: 181px;
  height: 100%;
  
  @media screen and (max-width: 1162px) {
    display: flex;
    width: 150px;
    justify-content: center;
    align-items: center;
  }
  
`;

export const InfoDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-size: 20px;
  color: ${({ theme }) => theme["--day-title-color"]};
  white-space: nowrap;
  min-width: 146px;
  min-height: 27px;

  @media screen and (min-width: 800px) and (max-width: 1200px) {
    font-size: 18px;
  }
  @media screen and (min-width: 300px) and (max-width: 340px) {
    font-size: 15px;
  }
`;

export const City = styled.div`
  display: flex;
  font-family: ${fonts.Headline_L};
  color: ${({ theme }) => theme["--day-title-color"]};
  justify-content: flex-start;
  align-items: center;
  min-height: 50px;
  min-width: 147px;

  @media screen and (max-width: 585px) {
    font-size: 25px;
    justify-content: center;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    font-size: 30px;
  }

  @media screen and (min-width: 300px) and (max-width: 446px) {
    font-size: 25px;
  }
`;

export const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme["--day-title-color"]};
  font-family: ${fonts.Headline_XL};
  min-height: 44px;
  min-width: 117px;

  @media screen and (min-width: 800px) and (max-width: 1200px) {
    font-size: 50px;
  }

  @media screen and (min-width: 400px) and (max-width: 499px) {
    font-size: 35px;
  }

  @media screen and (width: 1024px) and (height: 600px) {
    font-size: 30px;
    padding: 0;
  }
  @media screen and (max-width: 585px) {
    font-size: 25px;
  }
  @media screen and (min-width: 341px) and (max-width: 446px) {
    font-size: 35px;
  }
  @media screen and (min-width: 300px) and (max-width: 340px) {
    font-size: 30px;
  }
`;

import styled from "styled-components";
import { fonts } from "../../fonts/fontStyles";

export const LocationTemperatureContainer = styled.section`
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: space-between;

  @media screen and (min-width: 300px) and (max-width: 799px) {
    height: 100%;
    min-height: 124px;
  }

  @media screen and (min-width: 300px) and (max-width: 400px) {
    max-height: 105px;
  }
`;

export const LocationDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 5px;
  width: 30%;
  height: 100%;
  min-height: 178px;

  @media screen and (min-width: 401px) and (max-width: 799px) {
    width: 130px;
    min-height: 82px;
  }

  @media screen and (min-width: 300px) and (max-width: 400px) {
    width: 120px;
    height: 107px;
    min-height: 127px;
  }

  @media screen and (width: 1024px) and (height: 600px) {
    margin-bottom: 0;
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
  width: 25%;
  height: 100%;

  @media screen and (min-width: 800px) and (max-width: 1375px) {
    width: 40%;
  }

  @media screen and (min-width: 400px) and (max-width: 650px) {
    width: 40%;
  }

  @media screen and (min-width: 300px) and (max-width: 446px) {
    width: 40%;
  }
`;

export const InfoDate = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 20px;
  color: ${({ theme }) => theme["--day-title-color"]};
  white-space: nowrap;
  min-width: 146px;
  min-height: 27px;

  @media screen and (min-width: 800px) and (max-width: 1200px) {
    font-size: 18px;
  }
  @media screen and (min-width: 341px) and (max-width: 800px) {
    font-size: 15px;
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

  @media screen and (min-width: 800px) and (max-width: 1200px) {
    font-size: 30px;
  }

  @media screen and (min-width: 300px) and (max-width: 446px) {
    font-size: 25px;
  }
`;

export const Temperature = styled.div`
  display: flex;
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
  @media screen and (min-width: 517px) and (max-width: 800px) {
    font-size: 50px;
  }
  @media screen and (min-width: 341px) and (max-width: 446px) {
    font-size: 35px;
  }
  @media screen and (min-width: 300px) and (max-width: 340px) {
    font-size: 30px;
  }
`;

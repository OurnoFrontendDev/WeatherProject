import styled from "styled-components";
import { fonts } from "../../fonts/fontStyles";

export const ForecastWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 185px;
  border-radius: 22px;
  padding: 15px;
  border: ${({ theme }) => theme["--border-style"]};
  background-color: ${({ theme }) => theme["--card-main-background-color"]};

  @media screen and (min-width: 500px) and (max-width: 799px) {
    width: 40%;
    padding: 0;
  }
  @media screen and (min-width: 300px) and (max-width: 499px) {
    padding: 5px;
  }
  @media screen and (width: 1024px) and (height: 600px) {
    max-height: 139px;
  }
`;
export const ForecastContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  padding: 10px 23px;
  border-radius: 8px;
  position: relative;
  margin-top: 6px;

  @media screen and (min-width: 300px) and (max-width: 799px) {
    margin-top: 0;
    padding: 0;
  }
  @media screen and (width: 1024px) and (height: 600px) {
    margin: 0;
  }
  @media screen and (min-width: 800px) and (max-width: 999px) {
  }

  @media screen and (min-width: 400px) and (max-width: 499px) {
    padding: 0;
  }
  @media screen and (min-width: 300px) and (max-width: 399px) {
    padding: 0;
  }
`;
export const ForecastTextContainer = styled.div`
  display: flex;
  border-radius: 8px;
  color: ${({ theme }) => theme["--card-title-color"]};
  font-family: ${fonts.Body_2};
  text-transform: uppercase;

  @media screen and (min-width: 589px) and (max-width: 799px) {
    font-size: 13px;
    padding: 3px 0 3px 10px;
  }
  @media screen and (min-width: 500px) and (max-width: 589px) {
    font-size: 12px;
    padding: 3px 0 3px 0;
  }
  @media screen and (min-width: 550px) and (max-width: 657px) {
    font-size: 9px;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  @media screen and (min-width: 500px) and (max-width: 549px) {
    font-size: 10px;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  @media screen and (min-width: 300px) and (max-width: 499px) {
    font-size: 13px;
    padding-left: 10px;
    padding-bottom: 10px;
  }
`;

export const ScrollArea = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.3s ease;
`;
export const WeatherForecastIcon = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 300px) and (max-width: 445px) {
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 445px) and (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`;
export const ForecastItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  border-radius: 8px;
  width: 95px;
  height: 106px;
  max-width: 95px;
  max-height: 108px;
  background-color: ${({ theme }) => theme["--card-item-background-color"]};
  font-family: ${fonts.Body_2};

  @media screen and (width: 1024px) and (height: 600px) {
    height: 76px;
  }
  @media screen and (min-width: 445px) and (max-width: 499px) {
    height: 70px;
    width: 73px;
    font-size: 10px;
  }
  @media screen and (min-width: 400px) and (max-width: 445px) {
    height: 70px;
    width: 73px;
    font-size: 10px;
  }
  @media screen and (min-width: 300px) and (max-width: 399px) {
    height: 70px;
    font-size: 12px;
  }
`;

export const ArrowButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme["--card-item-background-color"]};
  //border: none;
  color: gray;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  border: 1px solid red;

  ${({ direction }) => (direction === "left" ? "left: 0;" : "right: 0;")}
  &:hover {
    opacity: 0.7;
  }
`;
export const TempStyle = styled.div`
  color: ${({ theme }) => theme["--temp-indicator-color"]};
`;
export const DateTimeStyle = styled.div`
  color: ${({ theme }) => theme["--card-title-color"]};
`;

export const ScrollAreaContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  min-height: 108px;
`;

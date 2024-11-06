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

  @media screen and (width: 1024px) and (height: 600px) {
    max-height: 139px;
  }
  @media screen and (max-width: 500px) {
    height: 40%;
    padding-bottom: 5px;
    padding-top: 5px;
    min-height: 154px;
  }
`;
export const ForecastContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  padding: 10px 23px;
  border-radius: 8px;
  position: relative;
  margin-top: 6px;

  @media screen and (min-width: 500px) and (max-width: 799px) {
    padding: 6px 23px;
  }
  @media screen and (max-width: 500px) {
    padding: 4px 23px;
  }
  @media screen and (width: 1024px) and (height: 600px) {
    margin: 0;
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

`;

export const ScrollArea = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.3s ease;
`;

export const ForecastItemContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  border-radius: 8px;
  min-width: 65px;
  height: 106px;
  max-width: 95px;
  max-height: 108px;
  background-color: ${({ theme }) => theme["--card-item-background-color"]};
  font-family: ${fonts.Body_2};

  &:first-child {
    margin-left: 0;
  }

  @media screen and (width: 1024px) and (height: 600px) {
    height: 76px;
  }
`;

export const ArrowButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: gray;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  border: none;

  ${({ direction }) => (direction === "left" ? "left: 0;" : "right: 0;")}
  &:hover {
    opacity: 0.7;
  }
`;
export const TempStyle = styled.div`
  color: ${({ theme }) => theme["--temp-indicator-color"]};
`;
export const DateTimeStyle = styled.div`
  text-align: center;
  color: ${({ theme }) => theme["--card-title-color"]};
`;

export const ScrollAreaContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 108px;
  overflow: hidden;
`;

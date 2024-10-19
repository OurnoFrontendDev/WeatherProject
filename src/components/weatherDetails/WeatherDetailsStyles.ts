import styled from "styled-components";
import { fonts } from "../../fonts/fontStyles";

export const WeatherDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px solid #e8eaf6;
  background-color: ${({ theme }) => theme["--card-main-background-color"]};

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    height: 100%;
  }
`;
export const WeatherDetailsTextContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;

  @media screen and (min-width: 300px) and (max-width: 799px) {
    padding: 3px 0 3px 10px;
  }

  @media screen and (min-width: 400px) and (max-width: 499px) {
    height: 20%;
  }
  @media screen and (min-width: 500px) and (max-width: 669px) {
    height: 20px;
  }
`;
export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  padding-left: 5px;
`;
export const WeatherDetailsText = styled.div`
    display: flex;
    align-items: center;
    font-family: ${fonts.Body_2}
    width: 100%;
    color: ${({ theme }) => theme["--card-title-color"]};
    text-transform: uppercase;

    @media screen and (min-width: 1000px) and (max-width: 1560px) {
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }
    @media screen and (min-width: 500px) and (max-width: 606px) {
        font-size: 10px;
        padding-top: 5px;
    }

    @media screen and (width: 768px) and (height: 1024px) {
        padding: 0;
    }

    @media screen and (min-width: 400px) and (max-width: 499px) {
        display: flex;
        justify-content: flex-start;
        padding: 0;
        padding-left: 10px;
        width: 100%;
        font-size: 13px;
    }
    @media screen and (min-width: 300px) and (max-width: 399px) {
        display: flex;
        justify-content: flex-start;
        padding: 0;
        padding-left: 10px;
        width: 100%;
        font-size: 13px;
    }


`;
export const WeatherDetailsCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 3px;
`;
export const WeatherDetailsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  max-height: 105px;
  border-radius: 16px;
  padding: 5px;
  border: 1px solid #eee;
  background-color: ${({ theme }) => theme["--card-item-background-color"]};

  @media screen and (min-width: 400px) and (max-width: 499px) {
    align-items: center;
  }

  @media screen and (min-width: 600px) and (max-width: 799px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 670px) and (max-width: 699px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const CardLabel = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  padding-left: 5px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme["--card-title-color"]};

  @media screen and (min-width: 607px) and (max-width: 1371px) {
    font-size: 13px;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  @media screen and (min-width: 536px) and (max-width: 606px) {
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  @media screen and (min-width: 300px) and (max-width: 535px) {
    font-size: 10px;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  @media screen and (width: 1024px) and (height: 600px) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    height: 80%;
    padding: 0;
  }
`;

export const WeatherDetailsTitleItem = styled.div`
  display: flex;
`;

export const WeatherDetailsValueItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 300px) and (max-width: 669px) {
    flex-direction: column;
  }

  @media screen and (min-width: 445px) and (max-width: 500px) {
    flex-direction: row;
  }
`;

export const CardValue = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  font-weight: bold;
  padding-left: 5%;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  color: ${({ theme }) => theme["--indicator-color"]};

  @media screen and (min-width: 1475px) and (max-width: 1600px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1414px) and (max-width: 1474px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1395px) and (max-width: 1413px) {
    font-size: 19px;
    justify-content: center;
  }
  @media screen and (min-width: 1376px) and (max-width: 1394px) {
    font-size: 18px;
    justify-content: center;
  }
  @media screen and (min-width: 1271px) and (max-width: 1375px) {
    font-size: 15px;
    justify-content: center;
  }
  @media screen and (min-width: 1255px) and (max-width: 1270px) {
    font-size: 14px;
    justify-content: center;
  }
  @media screen and (min-width: 1210px) and (max-width: 1254px) {
    font-size: 13px;
  }
  @media screen and (min-width: 1142px) and (max-width: 1210px) {
    font-size: 12px;
    padding-left: 20%;
    white-space: break-spaces;
  }
  @media screen and (min-width: 1000px) and (max-width: 1142px) {
    font-size: 11px;
    padding-left: 20%;
    white-space: break-spaces;
  }
  @media screen and (min-width: 600px) and (max-width: 1020px) {
    font-size: 11px;
    justify-content: center;
    white-space: break-spaces;
  }
  @media screen and (min-width: 571px) and (max-width: 605px) {
    font-size: 10px;
    justify-content: center;
    white-space: break-spaces;
  }
  @media screen and (min-width: 536px) and (max-width: 570px) {
    font-size: 9px;
    justify-content: center;
    white-space: break-spaces;
  }
  @media screen and (min-width: 500px) and (max-width: 535px) {
    font-size: 8px;
    justify-content: center;
    white-space: break-spaces;
  }
  @media screen and (min-width: 450px) and (max-width: 499px) {
    font-size: 10px;
    align-items: center;
    justify-content: center;
    min-height: 31px;
    white-space: break-spaces;
  }
  @media screen and (min-width: 300px) and (max-width: 450px) {
    font-size: 9px;
    align-items: center;
    justify-content: center;
    min-height: 20px;
    white-space: break-spaces;
  }
`;

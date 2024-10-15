import styled from "styled-components";
import { fonts } from "../../fonts/fontStyles";

export const WeekForecastWrapper = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme["--card-main-background-color"]};
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 18px;

  @media screen and (min-width: 900px) and (max-width: 1000px) {
    min-width: 311px;
  }
`;
export const DaysForecastText = styled.div`
  font-family: ${fonts.Body_2};
  color: ${({ theme }) => theme["--card-title-color"]};
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

  @media screen and (min-width: 300px) and (max-width: 799px) {
    padding: 3px 0 3px 10px;
  }
  @media screen and (min-width: 800px) and (max-width: 999px) {
    max-height: 49px;
  }

  @media screen and (min-width: 669px) and (max-width: 699px) {
    padding: 5px;
    padding-left: 12px;
  }
  @media screen and (min-width: 500px) and (max-width: 666px) {
    padding: 5px 13px;
  }

  @media screen and (min-width: 300px) and (max-width: 500px) {
    padding: 0;
    padding-left: 12px;
  }
`;
export const WeekForecastContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 88%;
  border: ${({ theme }) => theme["--border-style"]};
  background-color: ${(props) => props.theme["--card-item-background-color"]};

  @media screen and (min-width: 800px) and (max-width: 999px) {
    max-height: 592px;
  }
  @media screen and (min-width: 300px) and (max-width: 799px) {
    width: 100%;
    max-height: 100%;
  }
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
`;
export const WeekForecastCardDatesContainer = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  height: 100%;

  @media screen and (width: 375px) and (height: 667px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 300px) and (max-width: 799px) {
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
  height: 100%;
  font-family: ${fonts.Body};
  color: ${({ theme }) => theme["--card-title-color"]};

  @media screen and (min-width: 800px) and (max-width: 999px) {
    font-size: 12px;
  }
  @media screen and (min-width: 700px) and (max-width: 799px) {
    padding-left: 10px;
  }
  @media screen and (min-width: 670px) and (max-width: 699px) {
    padding-top: 1px;
    font-size: 13px;
    white-space: nowrap;
    padding-left: 0;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 300px) and (max-width: 669px) {
    padding: 0;
    font-size: 13px;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 500px) and (max-width: 667px) {
    padding: 0;
    font-size: 13px;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 300px) and (max-width: 499px) {
    padding: 0;
    font-size: 11px;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
  }
`;
export const WeekForecastCardDay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.Body};
  color: ${({ theme }) => theme["--card-title-color"]};

  @media screen and (min-width: 800px) and (max-width: 999px) {
    font-size: 12px;
  }
  @media screen and (min-width: 700px) and (max-width: 799px) {
    padding-left: 6px;
  }
  @media screen and (min-width: 670px) and (max-width: 699px) {
    font-size: 13px;
    padding-left: 5px;
  }

  @media screen and (min-width: 500px) and (max-width: 699px) {
    font-size: 13px;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 500px) and (max-width: 528px) {
    align-items: center;
    justify-content: center;
    padding-left: 8px;
  }
  @media screen and (min-width: 300px) and (max-width: 499px) {
    align-items: center;
    justify-content: center;
    font-size: 11px;
  }
  @media screen and (min-width: 300px) and (max-width: 399px) {
    align-items: center;
    justify-content: center;
    padding-left: 8px;
    font-size: 12px;
  }
`;
export const WeekForecastCardIconContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const ForecastIcon = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 667px) and (max-width: 799px) {
    width: 40px;
    height: 35px;
  }
  @media screen and (min-width: 500px) and (max-width: 667px) {
    width: 40px;
    height: 34px;
  }

  @media screen and (width: 320px) and (height: 866px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 401px) and (max-width: 499px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 300px) and (max-width: 400px) {
    width: 30px;
    height: 28px;
  }
  @media screen and (width: 360px) and (height: 740px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (width: 375px) and (height: 667px) {
    width: 25px;
    height: 25px;
  }
`;
export const WeekForecastCardTemp = styled.div`
  font-size: ${fonts.Body};

  @media screen and (min-width: 300px) and (max-width: 490px) {
    font-size: 11px;
  }
`;
export const WeekForecastCardTempContainer = styled.div`
    display: flex;
    width: 35%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme["--card-title-color"]};

    @media screen and (min-width: 334px) and (max-width: 799px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }
    @media screen and (width: 300px) and (height: 333px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }
    @media screen and (width: 853px) and (height: 1280px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }
}
`;
export const IconDescription = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme["--card-title-color"]};
  font-size: ${fonts.Body};

  @media screen and (min-width: 845px) and (max-width: 999px) {
    font-size: 13px;
  }

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
  @media screen and (min-width: 491px) and (max-width: 503px) {
    font-size: 11px;
  }

  @media screen and (min-width: 300px) and (max-width: 490px) {
    font-size: 11px;
  }

  @media screen and (width: 375px) and (max-width: 667px) {
    font-size: 10px;
  }

  @media screen and (width: 360px) {
    font-size: 12px;
  }
`;

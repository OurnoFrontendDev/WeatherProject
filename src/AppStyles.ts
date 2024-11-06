import styled from "styled-components";

export const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme["--app-background-color"]};
  padding: 32px 10px 0;
  height: 80vh;
  width: 65vw;

    @media screen and (min-width: 500px) and (max-width: 960px) {
        padding: 32px 10px 10px;
        height: 100vh;
        width: 100vw;
    }
    @media screen and (max-width: 500px) {
        padding: 30px 10px 10px;
        height: 100vh;
        width: 100vw;
    }
    
  @media screen and (width: 360px) and (height: 740px) {
    justify-content: flex-start;
    padding: 5px;
    height: 100vh;
  }

  @media screen and (width: 375px) and (height: 667px) {
    padding: 5px;
    height: 100vh;
  }

  @media screen and (width: 414px) and (height: 896px) {
    justify-content: flex-start;
  }

  @media screen and (width: 412px) and (height: 915px) {
    justify-content: flex-start;
  }

  @media screen and (width: 430px) and (height: 932px) {
    justify-content: flex-start;
  }

  @media screen and (width: 540px) and (height: 720px) {
    height: 100vh;
  }
  @media screen and (width: 768px) and (height: 1024px) {
    justify-content: flex-start;
  }
  @media screen and (width: 820px) and (height: 1180px) {
    justify-content: flex-start;
  }
  @media screen and (width: 1024px) and (height: 1366px) {
    justify-content: flex-start;
  }
  @media screen and (width: 1024px) and (height: 600px) {
    height: 100vh;
    padding: 20px 10px;
  }
  @media screen and (width: 1280px) and (height: 800px) {
    height: 100vh;
    justify-content: flex-start;
    padding: 20px 10px;
  }

  @media screen and (width: 912px) and (height: 1368px) {
    padding: 5px;
    width: 100vw;
    justify-content: flex-start;
  }
  @media screen and (width: 853px) and (height: 1280px) {
    justify-content: flex-start;
  }
`;

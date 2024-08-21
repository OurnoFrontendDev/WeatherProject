import styled from "styled-components";

export const AppWrapper = styled.main`
    display: flex;
    flex-direction: column;
    height: 84.6vh;
    width: 66.5vw;
    background-color: ${({theme}) => theme.background};
    
    @media screen and  (max-width: 500px) {
        width: 100vw;
        height: 100vh;
    }
`;
export const HeaderContainer = styled.header`
    width: 100%;
    height: 5.6%;
    margin-top: 2.8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
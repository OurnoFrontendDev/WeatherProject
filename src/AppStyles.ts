import styled from "styled-components";

export const AppWrapper = styled.main`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme['--app-background-color']};
    height: 787px;
    width: 1276px;
    margin-top: 20px;
    
    @media screen and (max-width:1024px) {
        width: 1024px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:768px) {
        width: 768px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:973px) {
        width: 973px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:1121px) {
        width: 1121px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    @media screen and (max-width:969px) {
        width: 968px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 100px;
    }
`;
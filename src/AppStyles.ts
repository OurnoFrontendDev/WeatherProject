import styled from "styled-components";

export const AppWrapper = styled.main`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme['--app-background-color']};
    height: 867px;
    width: 1422px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        width: 100%;
        height: 100%;
        
    }
    
    @media screen and (min-width: 768px) and (max-width: 992px) {
        width: 100%;
        height: 100%;
    }
    
    @media screen and (min-width: 992px) and (max-width: 1200px) {
        width: 100%;
        height: 100%;
    }
`
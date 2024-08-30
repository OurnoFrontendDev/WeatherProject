import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        transition: all 0.25s linear;
        display: flex;
        justify-content: center;
        align-content: center;
        font-family: "Nunito", sans-serif;
    }
`;

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

        @media screen and (max-width:1024px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        @media screen and (max-width:768px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        @media screen and (max-width:1121px) {
            width:1121px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 50px;
        }

        @media screen and (max-width:375px) {
            width: 375px;
        }
        
    }
`;

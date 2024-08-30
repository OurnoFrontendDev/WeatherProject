import styled from "styled-components";
import {fonts} from "../../fonts/fontStyles";

export const InputSearchBar = styled.input
    `
        &::placeholder {
            padding-left: 6px;
            padding-top: 20px;
            letter-spacing: 0.15px;
            font-family: ${fonts.Body};
        }

        background-color: ${({theme}) => theme['input-background-color']};
        width: 828px;
        height: 35px;
        box-sizing: border-box;
        border-radius: 8px;
        border: none;
        outline: none;
        padding-left: 30px;

        @media screen and (min-width: 320px) and (max-width: 768px ) {
            width: 50vw;
        }

        @media screen and (min-width: 768px) and (max-width: 992px) {
            width: 80vw;
        }
    `
export const ULSearchList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    z-index: 100;
    list-style: none;
    padding: 0;
    margin: 0
`
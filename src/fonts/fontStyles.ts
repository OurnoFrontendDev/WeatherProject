import {createGlobalStyle} from "styled-components";
import NunitoBold from "./Nunito-Bold.ttf";
import NunitoMedium from "./Nunito-Medium.ttf";
import NunitoRegular from "./Nunito-Regular.ttf";
import NunitoSemiBold from "./Nunito-SemiBold.ttf";



export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoBold}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
`;

export const fonts = {
    bold: "'Nunito', sans-serif; font-weight: bold;",
    medium: "'Nunito', sans-serif; font-weight: 500;",
    regular: "'Nunito', sans-serif; font-weight: normal;font-size:16px",
    semiBold: "'Nunito', sans-serif; font-weight: 600;",
    Headline_XL: "'Nunito', sans-serif; font-weight: bold;font-size:54px;",
    Body:"'Nunito', sans-serif; font-weight:200;font-size:14px;letter-spacing: 0.15px;",
    Headline_L: "'Nunito', sans-serif; font-weight: 600;font-size:39px;",
    Body_2: "'Nunito', sans-serif; font-weight: 600;font-size:14px;",
};

import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${({theme}) => theme?.body};
        color: ${({theme}) => theme?.color};
        transition: all 0.25s linear;
        display: flex;
        justify-content: center;
        align-content: center;
        font-family: "Nunito", sans-serif;
    }
`;

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App";
import store from "./state/store";
import {Provider} from "react-redux";

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
);
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App";
import store from "./state/store";
import {Provider} from "react-redux";
import {ThemeProvider} from "./provider";

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
               <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
);
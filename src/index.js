import React from 'react';
import ReactDOM from 'react-dom';
import App from '/src/components/app/App';
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./thems/defaultTheme";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

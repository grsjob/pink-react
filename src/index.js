import React from 'react';
import ReactDOM from 'react-dom';
import App from '/src/components/app/App';
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./thems/defaultTheme";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import {Provider} from "react-redux";


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={defaultTheme}>
                    <App/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

import React, {createContext} from "react";
import useMediaQuery from "/src/hooks/useMediaQuery"
import {Routes, Route} from "react-router-dom"
import {GlobalStyle} from "./styles";
import MainPage from "/src/components/pages/main-page/main-page"
import Catalog from "/src/components/pages/catalog/catalog"
import Form from "/src/components/pages/form/form"
import {AppRoute} from "/src/const/const"
import NotFoundPage from "../pages/notfoundpage/notfoundpage";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import {DeviceContext} from "/src/context/device-context/device-context";

function App() {
    const devices = {
        isDesktop: useMediaQuery('(min-width: 960px)'),
        isTablet: useMediaQuery('(min-width: 660px) and (max-width: 959px)'),
        isMobile: useMediaQuery('(max-width: 659px)')
    }

    return (
            <DeviceContext.Provider value={devices}>
                <GlobalStyle/>
                <Routes>
                    <Route path={AppRoute.MAIN} element={<PageWrapper/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path={AppRoute.CATALOG} element={<Catalog/>}/>
                        <Route path={AppRoute.FORM} element={<Form/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </DeviceContext.Provider>
    );
}

export default App;

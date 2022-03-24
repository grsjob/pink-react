import React from 'react';
import PropTypes from 'prop-types';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Main} from "./styles";
import {Outlet} from "react-router-dom"

const PageWrapper = props => {
    return (
<>
    <Header />
    <Main>
        <Outlet />
    </Main>
    <Footer />
</>
    );
};

PageWrapper.propTypes = {

};

export default PageWrapper;

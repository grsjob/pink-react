import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {StyledSectionHeader} from "./styles";
import useCurrentDevice from "../../../hooks/useCurrentDevice";
import Nav from "../nav/nav";
import VisuallyHidden from "../../staled/visually-hidden/visually-hidden";
import StoreWrapper from "../../blocks/store-wrapper/store-wrapper";

const Header = (props) => {
    // useEffect(()=>{
    //     return () => setOpenPopup(!isOpenPopup) //TODO разобраться с обнулением состояния кнопки и списка
    // },[isOpenPopup])

    const device = useCurrentDevice('desktop', 'tablet', 'mobile')

    return (
        <StyledSectionHeader device={device} as="header">
            <Nav />
            <VisuallyHidden as={'h1'}>
                Приложение Pink
            </VisuallyHidden>
            <StoreWrapper />
        </StyledSectionHeader>
    );
};

Header.propTypes = {
    pageUrl: PropTypes.string
};

export default Header;

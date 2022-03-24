import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {StyledSectionHeader} from "./styles";
import HeaderTitle from "/src/components/blocks/header-title/header-title"
import {DeviceContext} from "../../../context/device-context/device-context";

const Header = (props) => {
    const devices = useContext(DeviceContext);

    return (
        <StyledSectionHeader as="header">
            <HeaderTitle />
        </StyledSectionHeader>
    );
};

Header.propTypes = {
    pageUrl: PropTypes.string
};

export default Header;

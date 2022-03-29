import React from 'react';
import PropTypes from 'prop-types';
import {StyledStoreWrapper} from "./styles";

import useCurrentDevice from "/src/hooks/useCurrentDevice";
import StoreContent from "../store-content/store-content";


const StoreWrapper = ({children}) => {
    const device = useCurrentDevice('desktop', 'tablet', 'mobile')
    return (
        <StyledStoreWrapper device={device}>
            <StoreContent />
        </StyledStoreWrapper>
    );
};

StoreWrapper.propTypes = {};

export default StoreWrapper;

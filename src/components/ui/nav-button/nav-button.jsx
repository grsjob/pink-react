import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {DeviceContext} from "/src/context/device-context/device-context";
import {Inside, StyledButtonPopupClose, StyledButtonPopupOpen} from "./styles"

const NavButton = ({isOpenPopup,setOpenPopup}) => {
    const device = useContext(DeviceContext);
    if (device.isMobile || device.isTablet) {
        return (
            <>
                {
                    isOpenPopup
                    ? <StyledButtonPopupOpen onClick={()=>setOpenPopup(!isOpenPopup)}></StyledButtonPopupOpen>
                    : <StyledButtonPopupClose onClick={()=>setOpenPopup(!isOpenPopup)}><Inside></Inside></StyledButtonPopupClose>
                }
            </>

        )
    }
    return null
}


NavButton.propTypes = {
    isOpenPopup: PropTypes.bool,
    setOpenPopup: PropTypes.func.isRequired
};

export default NavButton;

import React from 'react';
import PropTypes from 'prop-types';
import Logo from "/src/components/ui/logo/logo";
import NavButton from "/src/components/ui/nav-button/nav-button";
import {HeaderTitleWrapper} from "./styles"
import useCurrentDevice from "/src/hooks/useCurrentDevice";
import {Wrapper} from '/src/components/staled/wrapper/wrapper'


const HeaderTitle = ({isOpenPopup,setOpenPopup}) => {
    const device = useCurrentDevice('desktop', 'tablet', 'mobile')
    return (

        <HeaderTitleWrapper
            device={device}
            isOpenPopup={isOpenPopup}>
                <Logo />
                < NavButton
                    setOpenPopup={setOpenPopup}
                    isOpenPopup={isOpenPopup}
                />
        </HeaderTitleWrapper>

    )
};

HeaderTitle.propTypes =
    {
        isOpenPopup: PropTypes.bool,
        setOpenPopup: PropTypes.func.isRequired
    }
;

export default HeaderTitle;

import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import NavButton from "/src/components/ui/nav-button/nav-button";
// import {DeviceContext} from "/src/context/device-context/device-context";
import {HeaderTitleWrapper} from "./styles"
import useCurrentDevice from "/src/hooks/useCurrentDevice";


const HeaderTitle = (props) => {
    const [isOpenPopup, setOpenPopup] = useState(false);
    useEffect(()=>{
        return () => setOpenPopup(!isOpenPopup) //TODO разобраться с обнулением состояния кнопки и списка
    },[isOpenPopup])

    const device = useCurrentDevice('desktop', 'tablet', 'mobile')
    return (

        < HeaderTitleWrapper
            device={device}>
            <Logo />
            <Nav isOpenPopup={isOpenPopup}/>
            < NavButton
                setOpenPopup={setOpenPopup}
                isOpenPopup={isOpenPopup}
            />
        </HeaderTitleWrapper>

    )
};

HeaderTitle.propTypes =
    {}
;

export default HeaderTitle;

import React, {useContext, useState} from 'react';
import {StyledNavUl, StyledNav, StyledNavWrapper, StyledNavLi} from "./styles"
import CustomLink from "/src/components/ui/link/link";
import {DeviceContext} from "/src/context/device-context/device-context";
import {pagesCatalog} from "/src/mocks/pages-catalog"
import HeaderTitle from "/src/components/blocks/header-title/header-title"
import useCurrentDevice from "../../../hooks/useCurrentDevice";
import Logo from "/src/components/ui/logo/logo";



const getNavList = (pagesCatalog, deviceStr, isOpenPopup) => {
    let content = []
    for (let pagesCatalogKey in pagesCatalog) {
        const item = pagesCatalog[pagesCatalogKey]
        content.push(<StyledNavLi isOpenPopup={isOpenPopup}><CustomLink isOpenPopup={isOpenPopup} key={item.id} to={item.path}>{item.value}</CustomLink></StyledNavLi>)
    }
    return (

            <StyledNav>
                <StyledNavUl device={deviceStr}>
                    {content}
                </StyledNavUl>
            </StyledNav>

    )
}

const Nav = () => {
    const device = useContext(DeviceContext);
    const [isOpenPopup, setOpenPopup] = useState(false);
    const deviceStr = useCurrentDevice('desktop', 'tablet', 'mobile')

    if (device.isMobile || device.isTablet) {
        return (
            <StyledNavWrapper device={deviceStr}>
                <HeaderTitle
                    setOpenPopup={setOpenPopup}
                    isOpenPopup={isOpenPopup}
                />
                {
                    isOpenPopup
                        ? getNavList(pagesCatalog,deviceStr,isOpenPopup)
                        : null
                }
            </StyledNavWrapper>
        )
    }
    return (
        <StyledNavWrapper device={deviceStr}>
            <Logo />
            {getNavList(pagesCatalog, deviceStr,isOpenPopup)}
        </StyledNavWrapper>

    );
};


export default Nav;

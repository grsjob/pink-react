import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {StyledNavUl, StyledNavDesktop} from "./styles"
import CustomLink from "/src/components/ui/link/link";
import {DeviceContext} from "/src/context/device-context/device-context";
import {pagesCatalog} from "/src/mocks/pages-catalog"

const getNavList = (pagesCatalog) => {
    let content = []
    for (let pagesCatalogKey in pagesCatalog) {
        const item = pagesCatalog[pagesCatalogKey]
        content.push(<CustomLink key={item.id} to={item.path}>{item.value}</CustomLink>)
    }
    return (
        <>
            <StyledNavDesktop>
                <StyledNavUl>
                    {content}
                </StyledNavUl>
            </StyledNavDesktop>
        </>
    )
}

const Nav = ({isOpenPopup}) => {
    const device = useContext(DeviceContext);


    if (device.isMobile || device.isTablet) {
        return (
            <>
                {
                    isOpenPopup
                        ? getNavList(pagesCatalog)
                        : null
                }
            </>
        )
    }
    return (
        <>
            {getNavList(pagesCatalog)}
        </>

    );
};

Nav.propTypes = {
    isOpenPopup: PropTypes.bool
};

export default Nav;

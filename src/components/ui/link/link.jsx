import {useMatch, useResolvedPath} from "react-router-dom"
import {StyledLink} from "./styles"
import {useContext} from "react";
import {DeviceContext} from "../../../context/device-context/device-context";


function CustomLink({ children, to, isOpenPopup, ...props }) {
    const device = useContext(DeviceContext);

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <>
            <StyledLink
                style={{ borderBottom: match && device.isDesktop ? '2px solid #FFFFFF' : 'none' }}
                to={to}
                {...props}
            >
                {children}
            </StyledLink>
        </>
    );
}

export default CustomLink
import {useMatch, useResolvedPath} from "react-router-dom"
import {StyledLink} from "./styles"


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <>
            <StyledLink
                style={{ borderBottom: match ? '2px solid #FFFFFF' : 'none' }}
                to={to}
                {...props}
            >
                {children}
            </StyledLink>
        </>
    );
}

export default CustomLink
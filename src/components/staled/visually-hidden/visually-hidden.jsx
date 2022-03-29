import React from 'react';
import {StyledVisuallyHidden} from "./styles";

const VisuallyHidden = ({as, children}) => {
    return (
        <StyledVisuallyHidden as={as}>
            {children}
        </StyledVisuallyHidden>
    );
};

export default VisuallyHidden;


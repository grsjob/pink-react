import React from 'react';
import PropTypes from 'prop-types';
import {StyledStoreContent} from "./styles";
import {Title} from "/src/components/ui/title/title"
import DownloadAddresses from '/src/components/ui/downloadAddresses/downloadAddresses'
import useCurrentDevice from "/src/hooks/useCurrentDevice";


const StoreContent = props => {
    const device = useCurrentDevice('desktop', 'tablet', 'mobile')

    return (
        <StyledStoreContent>
            <Title as='h1' device={device}>Взгляните
                на жизнь
                иначе!</Title>
            <DownloadAddresses/>
        </StyledStoreContent>
    );
};

StoreContent.propTypes = {
    
};

export default StoreContent;

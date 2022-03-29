import React from 'react';
import PropTypes from 'prop-types';
import {StyledStore, StyledStoreDescription, StyledStoreDownloadLink, StyledStoreList} from './styles'
import {Link} from "react-router-dom";
import {Li} from "/src/components/staled/li/li";
import {downloadAddressList} from '/src/mocks/download-address-list'

const DownloadAddresses = ({device}) => {
    return (
        <StyledStore>
            <StyledStoreDownloadLink href='https://www.apple.com/ru/ios/app-store/'>Скачать
                приложение</StyledStoreDownloadLink>
            <StyledStoreList>
                {
                    downloadAddressList
                        .map((store) => (
                            <a href={store.link} key={store.id}>{store.image}</a>
                            ))
                }
            </StyledStoreList>
            <StyledStoreDescription>Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows
                8</StyledStoreDescription>
        </StyledStore>
    );
};

DownloadAddresses.propTypes = {
    device: PropTypes.string,
};

export default DownloadAddresses;

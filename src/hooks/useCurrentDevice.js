import {useEffect, useContext, useState} from "react";
import {DeviceContext} from "/src/context/device-context/device-context";
import PropTypes from "prop-types";


const useCurrentDevice = (desktop, tablet, mobile) =>{
    const {isDesktop, isTablet, isMobile} = useContext(DeviceContext);
    const [device, setDevice] = useState('');
    let deviceArray = [
        {
            id: 0,
            flag:  isDesktop,
            device:   desktop
        },
        {
            id: 1,
            flag:  isTablet,
            device:   tablet
        },
        {
            id: 2,
            flag:  isMobile,
            device:  mobile
        }
    ]
    useEffect(()=>{
        let currentDevice = deviceArray
            .filter((device)=> (device.flag===true))
            .map((device) => device.device = device.device)
            .toString()
        setDevice(currentDevice)
    }, [deviceArray])

    return device;
}
export default useCurrentDevice
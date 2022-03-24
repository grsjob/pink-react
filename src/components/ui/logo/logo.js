import {ReactComponent as LogoDesktop} from "/src/assets/logotype-desktop.svg";
import {ReactComponent as LogoTablet} from "/src/assets/logotype-tablet.svg";
import {ReactComponent as LogoMobile} from "/src/assets/logotype-mobile.svg";
import {useContext} from "react";
import {DeviceContext} from "/src/context/device-context/device-context";
import {Link} from "react-router-dom";
import {AppRoute} from "/src/const/const"



function Logo() {
    const {isDesktop, isTablet, isMobile} = useContext(DeviceContext);

    const devicesArray = [
        {
            value: <LogoDesktop/>,
            flag: isDesktop,
            id: 0,
        },
        {
            value: <LogoTablet/>,
            flag: isTablet,
            id: 1,
        },
        {
            value: <LogoMobile/>,
            flag: isMobile,
            id: 3,
        }]


    return (
        <>
            {
                devicesArray
                    .filter((device) => device.flag === true)
                    .map((device, index) => (
                       <Link to ={AppRoute.MAIN} key={index}>{device.value}</Link>
                    ))
            }
        </>
    )
}

export default Logo

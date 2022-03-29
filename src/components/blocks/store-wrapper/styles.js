import styled, {css} from "styled-components";
import {Wrapper} from "/src/components/staled/wrapper/wrapper";
import phoneDesktop from '/src/assets/division-into-pages/main-page/header/phone-desktop.png'
import phoneTablet from '/src/assets/division-into-pages/main-page/header/phone-tablet.png'
import phoneMobile from '/src/assets/division-into-pages/main-page/header/phone-mobile.png'

export const StyledStoreWrapper = styled(Wrapper)`
  background-repeat: no-repeat;
  ${(props) => {
    switch (props.device) {
      case 'desktop':
        return css`
          background-image: url(${phoneDesktop});
          padding: 108px 10px 122px;
          width: 940px;
          background-position: 5% 44%;
          background-size: cover;
        `
        break
      case 'tablet':
        return css`
          background-image: url(${phoneTablet});
          padding: 93px 20px 110px;
          width: 622px;
          background-position: 5px 0;
          background-size: 700px 545px
        `
        break
      case 'mobile':
        return css`
          background-image: url(${phoneMobile});
          padding: 424px 20px 30px;
          width: 280px;
          background-position: 0 110px;
          background-size: 258px 286px;
          background-repeat: no-repeat;
          background-position: 50% 24%;
        `
        break
    }
  }}

`

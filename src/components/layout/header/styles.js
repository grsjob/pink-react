import styled, {css} from "styled-components";
import {Section} from "/src/components/staled/section/section";
import backDesktop from '/src/assets/division-into-pages/main-page/header/bg-back-desktop@2x.jpg'
import backTablet from '/src/assets/division-into-pages/main-page/header/bg-back-tablet@2x.jpg'
import backMobile from '/src/assets/division-into-pages/main-page/header/bg-back-mobile@1x.jpg'

export const StyledSectionHeader = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-repeat: no-repeat;
  background-color: #1D2631;
  //background-position: 50% 259px;
  ${(props) => {
    switch (props.device) {
      case "desktop":
        return css`
          background-image: url(${backDesktop});
          padding-top: 0;
          background-position: 50% 0;
          background-size: 2560px 853px;
        `;
      case "tablet":
        return css`
          background-image: url(${backTablet});
          background-size: 1200px 729px;
          `;
      case "mobile":
        return css`
          background-image: url(${backMobile});
          background-position: 50% 0;
          background-size: 700px 462px;
        `;
    }
  }}
`;


import styled, {css} from "styled-components";
import {Section} from "/src/components/staled/section/section";
import background from '/src/assets/division-into-pages/main-page/header/background.png'

export const StyledSectionHeader = styled(Section)`
  display: flex;
  justify-content: space-around;
  background-image: url(${background});

  ${(props) => {
    switch (props.device) {
      case "desktop":
        return css`
          //padding: 21px 10px 21px;
          justify-content: flex-start;
          gap: 20px;  
        `;
      case "tablet":
        return css`

          `;
      case "mobile":
        return css`

        `;
    }
  }}
`;


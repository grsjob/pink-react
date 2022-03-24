import styled, {css} from "styled-components";

export const HeaderTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${(props) => {
    switch (props.device) { //TODO эталонная реализация условий в стилях
        case "desktop":
            return css`
              padding: 21px 0 21px;
        `;
      case "tablet":
          return css`
            padding: 27px 20px 43px;
          `;
      case "mobile":
        return css`
          padding: 21px 20px 21px;
        `;
    }
}}
`;

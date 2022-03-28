import styled, {css} from "styled-components";

export const HeaderTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0,0,0,.3);
  ${(props) => {
    switch (props.device) { 
        case "desktop":
            return css`
              padding: 27px 20px 43px;
            `;
      case "tablet":
          return css`
            padding: 27px 20px 38px;
          `;
      case "mobile":
        return css`
          padding: 21px 20px 21px;
        `;
    }
}}
  ${(props) =>{
  if(props.isOpenPopup){
      return css`
        background: #283645;
        box-shadow: 0px 1px 0px #000000;
      `
  }
  }}
`;

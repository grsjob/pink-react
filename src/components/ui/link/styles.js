import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
  padding: 10px 0;
  color: ${(props) => props.theme.mainColorWhite};
  display: block;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  line-height: 18px;
  &:hover{
    color: ${(props) => props.theme.mainColorRed};
  }
  &:active{
    opacity: 0.3;
  }
  
  ${(props)=>{
    if(props.isOpenPopup){
      return css`
        border-bottom: none;
      `
    }
  }}
  `
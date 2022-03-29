import styled, {css} from "styled-components";
import {Ul} from "/src/components/staled/ul/ul";
import {Li} from "/src/components/staled/li/li";
import {Wrapper} from "../../staled/wrapper/wrapper";

export const StyledNavUl = styled(Ul)`
  display: flex;
  flex-grow: 0;
  flex-wrap: wrap;
  
  ${(props) => {
    switch (props.device) {
        case "desktop":
            return css`
              flex-direction: row;
              gap: 10px;
            `;
        case "tablet":
            return css`
              flex-direction: column;
          `;
        case "mobile":
            return css`
              flex-direction: column;
        `;
    }
  }}
`

export const StyledNavLi = styled(Li)`
  margin-top: 1px;
${(props)=>{
    if(props.isOpenPopup){
       return css`
         background: #283645;
         box-shadow: 0px 1px 0px #000000, inset 0px 1px 0px rgba(255, 255, 255, 0.15);
         display: flex;
         justify-content: center;
         align-items: center;
       `
    }
}}
`
export const StyledNav = styled.nav`
  //display: flex; //TODO нужен ли флексконтейнер для нав
  //justify-content: space-between;
  align-items: center;
  background-color: transparent;
`

export const StyledNavWrapper = styled.div`
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0,0,0,.3);
  display: block;
  //width: 100%;
  ${(props) => {
    switch (props.device) {
      case "desktop":
        return css`
          display: flex;
          position: static;
          flex-direction: row;
          padding: 27px 20px 43px;
          gap: 10px;
        `;
      case "tablet":
        return css`
          //position: fixed; //TODO позиция заголовка
          `;
      case "mobile":
        return css`
          //position: fixed;
        `;
    }
  }}
`

export const NavWrapper = styled(Wrapper)`
  display: flex;
  width: 940px;
  gap: 100px;

`
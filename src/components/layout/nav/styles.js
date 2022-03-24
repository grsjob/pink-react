import styled from "styled-components";
import {Ul} from "/src/components/staled/ul/ul";
import {Li} from "/src/components/staled/li/li";

export const StyledNavUl = styled(Ul)`
display: flex;
`

export const StyledNavLi = styled(Li)`
margin: 2px 0;
`
//TODO поправить стили под видимую кнопку
export const StyledNavDesktop = styled.nav`
  display: inline-flex; 
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  width: 940px;
  background-color: transparent;
`
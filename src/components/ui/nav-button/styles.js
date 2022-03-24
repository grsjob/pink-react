import styled from "styled-components";

export const StyledButtonPopupOpen = styled.button`
  z-index: 3;
  position: relative;
  padding: 0;
  border: 0;
  width: 50px;
  height: 24px;
  color: ${(props)=>props.theme.mainColorWhite};
  background-color: transparent;
  &:hover,
  &:active {
    color: ${(props)=>props.theme.mainColorRed};
  }

  &:active {
    opacity: 0.3;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 4px;
    background-color: currentColor;
  }
  &::before{
    top: 40%;
    left: 24%;
  }
  &::after{
    bottom: 40%;
    left: 24%;
  }
  &::before {
    transform: rotate(-45deg);
  }

  &::after {
    transform: rotate(45deg);
  }
`

export const StyledButtonPopupClose = styled.button`
  position: relative;
  padding: 0;
  border: 0;
  width: 50px;
  height: 24px;
  color: ${(props)=>props.theme.mainColorWhite};
  background-color: transparent;
  &:hover,
  &:active {
    color: ${(props)=>props.theme.mainColorRed};
  }

  &:active {
    opacity: 0.3;
  }
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 4px;
    background-color: currentColor;
  }
  &::before{
    top: 0;
    left: 0;
  }
  &::after{
    bottom: 0;
    left: 0;
  }
`

export const Inside = styled.span`
  content: "";
  position: absolute;
  width: 50px;
  height: 4px;
  top: 40%;
  left: 0;
  background-color: currentColor;

  &:hover,
  &:active {
    background-color: currentColor;
  }

  &:active {
    opacity: 0.3;
  }
`
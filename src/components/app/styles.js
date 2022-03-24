import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html{
      height: 100%;
    }
    body,
    html {
      margin: 0;
      font-family: ${(props)=>props.theme.fontFamily};
      font-size: ${(props)=>props.theme.fontSizeDefault};
    }
`

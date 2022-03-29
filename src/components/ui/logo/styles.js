import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLogoLink = styled(Link)`
    & svg:hover path{
      fill: #D22856
    }
  & svg:active path{
    opacity: 0.3;
    fill: white;
  }
`
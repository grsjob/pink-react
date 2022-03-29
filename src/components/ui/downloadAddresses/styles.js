import styled from "styled-components";
import {Link} from "react-router-dom";
import {Ul} from "/src/components/staled/ul/ul";

export const StyledStore = styled.div`
color: white;
  margin-top: 20px;

`

export const StyledStoreDownloadLink = styled.a`
border: 3px solid #FFFFFF;
box-sizing: border-box;
border-radius: 29px;
padding: 15px 32px;
font-weight: 700;
font-size: 21px;
line-height: 18px;
margin-bottom: 20px;
margin-top: 20px;
display: block;
cursor: pointer;

&:hover{
background-color:white;
color: #D22856;
text-decoration: none;
}
&:active{
color: rgba(210, 40, 86, 0.3)
}
&:visited{
color: #D22856;
}
`

export const StyledStoreList = styled(Ul)`
    display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
`

export  const StyledStoreDescription = styled.p`
margin-top: 20px;
`
import styled, {css} from "styled-components";


export const Title = styled.p`
  margin: 0;
  padding: 0;
  color: white;
  font-weight: 300;
  ${(props) => {
    switch (props.device) {
      case 'desktop':
        return css`
          font-size: 50px;
          line-height: 68px;
          margin-bottom: 52px
        `
        break
      case 'tablet':
        return css`
          font-size: 40px;
          line-height: 120%;
          margin-top: 0;
          margin-bottom: 31px
        `
        break
      case 'mobile':
        return css`
          font-size: 24px;
          line-height: 120%;
        `
        break
    }

  }}
`
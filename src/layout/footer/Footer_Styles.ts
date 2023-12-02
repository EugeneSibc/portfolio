import styled from "styled-components"
import { font } from "../../styles/Common"
import { theme } from "../../styles/Theme"
import { Button } from "../../component/Button"

const Footer = styled.footer`
  padding:40px 0;
  position:relative;  
  
  ${Button}{
    align-self: flex-start;
    position:absolute;
    top: 20px;
    left: 20px;
    
    @media ${theme.media.mobile}{
      padding:6px 8px;
    }
  }  
`
const Invite = styled.span`
  ${font({ weight: 500, Fmax: 16, Fmin: 12 })};  
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin:20px 0;    
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  background-color:${theme.colors.miniBlock};
  color:${theme.colors.font};
  border-radius: 50%;
  width: 35px;
  height: 35px;
  
  display:flex;
  justify-content: center;
  align-items: center;  
  
  &:hover{
    background:linear-gradient(90deg,#00F5A0 0%,#00D9F5 100%);
    color:${theme.colors.button};
    transform: translateY(-4px);
  }
`
const Copyright = styled.small`
  ${font({ lineHeight: 1.5, Fmax: 12, Fmin: 6 })};
  text-align: center;
  opacity: 0.5;  
`
export const S = {
    Footer,
    Invite,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}
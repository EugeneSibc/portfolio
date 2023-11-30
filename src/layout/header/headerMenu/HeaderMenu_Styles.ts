import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"

//Menu
const Mask = styled.span`
  position:absolute;
  top: 0;
  left: 0;
  display:inline-block;
  height:50%;
  overflow-y: hidden;
  //outline:1px solid red;
  color:${theme.colors.accent};
  
  & + &{
    top:50%;
    span{
      display:inline-block;
      transform: translateY(-50%);
    }
  }
  
`
const MenuItem = styled.li`
  position:relative;
  
  &::before{
    content:'';
    display:inline-block;
    height: 2px;
    background-color:${theme.colors.accent};
    
    position:absolute;
    top:50%;
    left:-10px;
    right:-10px;
    z-index: 1;
    
    transform:scale(0);
  }
  
  &:hover{
    &::before{
        transform:scale(1);
      }
    ${Mask}{
      color:${theme.colors.font};
      transform:skewX(15deg) translateX(7px);
      & + ${Mask}{
        transform:skewX(-15deg) translateX(-5px);
      }
    }
  } 
  
`

const Link = styled.a`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color:transparent;  
`

//MobileMenu
const MobileMenu = styled.nav`
`

const MobilePopup = styled.div<{isOpen:boolean}>`
  position:fixed;
  background-color:rgba(4,31,49,0.9);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index:9;
  display: none;
  
  ${props => props.isOpen && css<{isOpen:boolean}>`
    display:flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const BurgerButton = styled.button<{isOpen:boolean}>`
  position:fixed;
  top:10px;
  right:10px;
  width:30px;
  height:30px;
  background-color:rgba(255,255,255,0);
  z-index: 9999;  
  
  span{
    display:block;
    position:absolute;
    width:24px;
    height:2px;
    background-color:${theme.colors.accent};
    left: 3px;
    top: 15px;
    
    ${props => props.isOpen && css<{isOpen:boolean}>`
    background-color:rgba(255,255,255,0);    
    `}
    
    &::before{
      content:"";
      display:block;
      position:absolute;
      width: 24px;
      height: 2px;
      background-color:${theme.colors.accent}; 
      transform:translateY(-8px); 
           
      ${props => props.isOpen && css<{isOpen:boolean}>`
        transform: rotate(45deg) translateY(0);
      `}          
    }
    &::after{
      content:"";
      display:block;
      position:absolute;
      width: 24px;
      height: 2px;
      background-color:${theme.colors.accent}; 
      transform:translateY(8px);
            
      ${props => props.isOpen && css<{isOpen:boolean}>`
        transform: rotate(-45deg) translateY(0);
      `}  
    }
  }
`

//DesktopMenu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;    
  }
`



export const S = {
    Link,
    MenuItem,
    Mask,
    MobileMenu,
    MobilePopup,
    BurgerButton,
    DesktopMenu
}
import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  color: ${theme.colors.font};
  text-align: center;
  font-family: Montserrat,sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding:6px 8px;
  border-radius: 10px; 
  background-color:transparent;
  
    &:hover{
      background: linear-gradient(90deg,#00F5A0 0%,#00D9F5 100%);
      color: ${theme.colors.button};

    }

  
`

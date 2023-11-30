import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";
import { Button } from "./Button";

export const Link = styled.a<{ active?: boolean }>`
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase; 
    letter-spacing: 1px;
    position:relative;
    
    ${props => props.active && css<{ active?: boolean }>`
    background: linear-gradient(90deg,#00F5A0 0%,#00D9F5 100%);
      color: ${theme.colors.button};
      
    `}

 `
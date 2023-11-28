import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";
import { font } from '../styles/Common';

export const SectionTitle = styled.h2`
  ${font({weight:600,Fmax:24,Fmin:16 })};
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat, sans-serif;
    letter-spacing: 1px;
    margin-bottom: 50px;
    position: relative;

    &::before{
      content:"";
      display: inline-block;
      width: 55px;
      height: 2px;
      background-color: ${theme.colors.accent};
      
      position:absolute;
      left:50%;
      transform: translateX(-50%);
      bottom:-25px;

      @media ${theme.media.mobile}{
        bottom:-15px;
      }


      
    }
`


import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../component/Link";
import {Button} from "../../../../component/Button";
import { font } from '../../../../styles/Common';

type ProjectPropsType = {
    src: string
    title: string
    description: string
}

export const Project = (props:ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <Title >{props.title}</Title>
                <Text>{props.description}</Text>
                <Link as={Button} href={'#'}>Demo</Link>
                <Link as={Button} href={'#'}>Code</Link>
            </Description>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  background-color: ${theme.colors.miniBlock};
  width:330px;
  flex-grow: 1;

  @media ${theme.media.desktop}{
    max-width: 540px;
  }
  
  ${Link}{
    //padding:5px 0;
    & + ${Link}{
      margin-left: 10px;
    }
  }
  
`
const ImageWrapper = styled.div`
  position: relative;

  ${Button}{
    opacity: 0;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
  &::before{
    content:"";
    position:absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(5px);
    opacity: 0;
    }    
  
  &:hover{
    ${Button}{
      opacity: 1;
      background: linear-gradient(90deg,#00F5A0 0%,#00D9F5 100%);
      color: ${theme.colors.button};
    }
    &::before{
      opacity: 1;
    }    
  }
  
  @media ${theme.media.tablet}{
    ${Button}{
      opacity: 1; 
      background: linear-gradient(90deg,#00F5A0 0%,#00D9F5 100%);
      color: ${theme.colors.button};   
    }
    &::before{
      opacity: 1;
    }
  }  
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Description = styled.div`
  padding:20px 25px;
  
`
const Title = styled.h3`
 ${font({weight:600, Fmax:20, Fmin:16})};
`

const Text = styled.p`
  margin: 14px 0;
`

